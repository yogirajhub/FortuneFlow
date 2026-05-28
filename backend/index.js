require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || process.env.SESSION_SECRET || "fortuneflow_secret";
const FRONTEND_ORIGINS = ["http://localhost:3001", "http://localhost:3000"];

// ── Validate required env vars early ──────────────────────────────────────────
if (!uri) {
  console.error("✗ MONGO_URL is not defined. Make sure your .env file exists and is named exactly '.env' (not '_env').");
  process.exit(1);
}

const app = express();

app.use(
  cors({
    origin: FRONTEND_ORIGINS,
    credentials: true,           // required for cookies to pass cross-origin
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

// ── Auth helpers ───────────────────────────────────────────────────────────────
function createAuthToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

function authMiddleware(req, res, next) {
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// ── Public data routes ─────────────────────────────────────────────────────────
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("✗ Error fetching holdings:", err.message);
    res.status(500).json({ message: "Failed to fetch holdings", error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("✗ Error fetching positions:", err.message);
    res.status(500).json({ message: "Failed to fetch positions", error: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    console.error("✗ Error saving order:", err.message);
    res.status(500).json({ message: "Failed to save order", error: err.message });
  }
});

// ── Auth routes ────────────────────────────────────────────────────────────────
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const existingUser = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(409).json({ message: "A user with that email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    await user.save();

    const token = createAuthToken(user);
    res.cookie("auth_token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ user: { id: user._id, email: user.email } });
  } catch (err) {
    console.error("✗ Signup error:", err.message);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = createAuthToken(user);
    res.cookie("auth_token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ user: { id: user._id, email: user.email } });
  } catch (err) {
    console.error("✗ Login error:", err.message);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("auth_token", { httpOnly: true, sameSite: "lax" });
  res.json({ message: "Logged out" });
});

app.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("email createdAt");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({ user: { id: user._id, email: user.email, createdAt: user.createdAt } });
  } catch (err) {
    console.error("✗ Profile error:", err.message);
    res.status(500).json({ message: "Failed to fetch profile", error: err.message });
  }
});

// ── Start server then connect DB ───────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✓ Server listening on port ${PORT}`);

  mongoose
    .connect(uri, {
      dbName: "fortuneflow",   // ← explicitly sets the database name
    })
    .then(() => {
      console.log("✓ MongoDB connected successfully!");
    })
    .catch((err) => {
      console.error("✗ MongoDB connection failed:", err.message);
      process.exit(1);
    });
});

// ── Global error handlers ──────────────────────────────────────────────────────
process.on("unhandledRejection", (reason, promise) => {
  console.error("✗ Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("✗ Uncaught Exception:", error);
  process.exit(1);
});