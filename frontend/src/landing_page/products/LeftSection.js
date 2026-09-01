import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-12 col-lg-6 p-3 p-lg-5 mt-lg-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div className="d-flex flex-wrap gap-3">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className="mt-3 d-flex flex-wrap gap-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Download on Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="Download on App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
