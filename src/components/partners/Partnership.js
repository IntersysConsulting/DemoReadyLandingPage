import React from "react";
import {addRepoName} from '../../../src/utils'

import "./Partnership.css";
const partners = [
  {
    name: "Amazon Web Services",
    img: "aws",
    ext: "jpg"
  },
  {
    name: "Elastic",
    img: "elastic",
    ext: "jpg"
  },
  {
    name: "Gold Microsoft Partner ",
    img: "microsoft",
    ext: "png"
  },
  {
    name: "Cloudera",
    img: "cloudera",
    ext: "jpg"
  },
  {
    name: "Horton Works",
    img: "hortonworks",
    ext: "jpg"
  },
  {
    name: "Mapr",
    img: "mapr",
    ext: "jpg"
  }
];

export default () => (
  <div className="partners row">
    {partners.map(({ name, img, ext }) => (
      <div key={name} className="partners__container col s6 m2 center-align">
        <img
          className="partners__logo"
          src={addRepoName(`/img/partners/logo_${img}.${ext}`)}
          alt={name}
        />
      </div>
    ))}
  </div>
);
