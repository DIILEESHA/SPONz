  import React from "react";
import "./offer.css";
import startup from "../../assets/assests/startup.png";
import performance from "../../assets/assests/performance.png";
import analytics from "../../assets/assests/analytics.png";
import stockmarket from "../../assets/assests/stockmarket.png";
import emailmarketing from "../../assets/assests/emailmarketing.png";
import art from "../../assets/assests/art.png";
const Offer = () => {
  return (
    <div className="offercontainer">
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={startup}
            alt="search_engine_optimzatiion"
          />
          <p className="box-p">
            Without effective SEO, prospective customers may never get to see any of your digital marketing efforts.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={performance}
            alt="social_media_marketing"
          />
          <p className="box-p">
            This involves publishing, engaging your followers, analyzing your results, and running social media advertisements.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={analytics}
            alt="Website_Strategy"
          />
          <p className="box-p">
            We will go through your website carefully and ensure that every aspect of it is working to your benefit.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={stockmarket}
            alt="social_media_marketing"
          />
          <p className="box-p">
            Our SEM strategies involve paying a search engine to place your website in front of customers. It’s closely related to pay-per-click advertising.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={emailmarketing}
            alt="emailmarketing"
          />
          <p className="box-p">
            We can make the customers on your email list aware of new products, discounts, and other services. It can also be anything in between.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={art}
            alt="graphic_design"
          />
          <p className="box-p">
            Whether you're looking for a spectacular new logo or some stunning flyers, we can make it happen. Get design you'll love today!
          </p>
        </div>
      </div>

    </div>
  );
};

export default Offer;
