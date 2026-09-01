import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/yogirajGautam.png"
            style={{ borderRadius: "100%", width: "100%", maxWidth: "220px" }}
            alt="Yogiraj Gautam, Founder"
          />
          <h4 className="mt-4">Yogiraj Gautam</h4>
          <h6>Founder</h6>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Yogiraj founded FortuneFlow in 2026 with one clear mission,to solve the real trading challenges he had battled for years.
             What started as frustration with a broken system became a platform that is now reshaping how India experiences modern broking.
          </p>
          <p>
            Beyond building FortuneFlow, Yogiraj actively contributes to the future of Indian capital markets as a member of key advisory bodies including SEBI’s Secondary Market Advisory Committee (SMAC) and Market Data Advisory Committee (MDAC).
          </p>
          <p>For Yogiraj, Cricket is more than a sport — it is clarity in motion.</p>
          <p>
            Connect on <a href="https://yogiraj-portfolio-eta.vercel.app/">Portfolio</a> / <a href="https://www.linkedin.com/in/yogiraj-gautam18/">LinkedIn</a> /{" "}
            <a href="https://twitter.com/yogirajgautam">Twitter</a>
          </p>
        </div>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/vikalp_official.png"
            style={{ borderRadius: "100%", width: "100%", maxWidth: "220px" }}
            alt="Vikalp, Technology Lead"
          />
          <h4 className="mt-4">Vikalp</h4>
          <h6>Technology Lead</h6>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Vikalp leads the technology and infrastructure at FortuneFlow with
            a focus on building scalable and secure trading systems. With a
            background in distributed systems, he ensures that FortuneFlow can
            handle millions of transactions seamlessly.
          </p>
          <p>
            He is passionate about open-source technology and contributes to
            several fintech open-source projects.
          </p>
          <p>Vikalp believes in continuous learning and often speaks at tech conferences about scaling fintech platforms.</p>
          <p>
            Connect on <a href="#homepage">Homepage</a> / <a href="#github">GitHub</a> /{" "}
            <a href="#twitter">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
