import React from "react";
import { Link } from "react-router-dom";

import "./cards.css";

const ArticleCards = () => (
  <div>
    <div className="row">
      <div className="article-card-home">
        <Link to="/" className="article-link">
          <h3>Article1</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
          repellendus aliquam, voluptatibus eos modi necessitatibus animi
          recusandae eligendi molestias voluptate! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
          ut? Corrupti suscipit, vero atque illum repellendus aliquam,
          voluptatibus eos modi necessitatibus animi recusandae eligendi
          molestias voluptate!
        </p>
      </div>
      <div className="article-card-home">
        <Link to="/" className="article-link">
          <h3>Article2</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
          repellendus aliquam, voluptatibus eos modi necessitatibus animi
          recusandae eligendi molestias voluptate! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
          ut? Corrupti suscipit, vero atque illum repellendus aliquam,
          voluptatibus eos modi necessitatibus animi recusandae eligendi
          molestias voluptate!
        </p>
      </div>
      <div className="article-card-home">
        <Link to="/" className="article-link">
          <h3>Article3</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
          repellendus aliquam, voluptatibus eos modi necessitatibus animi
          recusandae eligendi molestias voluptate! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
          ut? Corrupti suscipit, vero atque illum repellendus aliquam,
          voluptatibus eos modi necessitatibus animi recusandae eligendi
          molestias voluptate!
        </p>
      </div>
    </div>
  </div>
);

export default ArticleCards;
