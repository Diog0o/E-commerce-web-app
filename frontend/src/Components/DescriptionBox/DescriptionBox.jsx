import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce, short for electronic commerce, refers to the buying and
          selling of goods or services using the internet, as well as the
          transfer of money and data to execute these transactions. This can
          include a wide range of activities such as online retail shopping,
          electronic payments, online auctions, internet banking, and online
          ticketing. E-commerce businesses operate in various models including
          business-to-consumer (B2C), business-to-business (B2B),
          consumer-to-consumer (C2C), and consumer-to-business (C2B).
        </p>
        <p>
          E-commerce has transformed traditional commerce by enabling businesses
          to reach a global audience, operate 24/7, and reduce operational
          costs. It offers consumers the convenience of shopping from anywhere
          at any time, access to a broader selection of products and services,
          and the ability to compare prices easily. With the advancement of
          technology, e-commerce continues to evolve, incorporating new features
          like personalized recommendations, virtual try-ons, and enhanced
          security measures to improve the shopping experience and build trust
          with consumers.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
