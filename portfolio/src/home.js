import React, { useState } from "react";
import { Image, Row, Col } from "react-bootstrap";
import d from "./data.js";

import PortfolioItem from "./portfolioItem";
const HomeScreen = ({ item }) => {
  const items = d;

  return (
    <>
      <div class="row mb-4">
        <h2 class="col-6 tm-text-primary">Latest Portfolio Items</h2>
        <div class="col-6 d-flex justify-content-end align-items-center"></div>
      </div>
      <Row className="tm-mb-90 tm-gallery">
        {items.map((p) => {
          return <PortfolioItem key={p.title} item={p} />;
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
