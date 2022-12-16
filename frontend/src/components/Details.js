import React from "react";
import Dataoption from "./Dataoption";

import Option1 from "./Option1";

const Details = (props) => {
  return (
    <div>
      <ul
        className="nav nav-tabs"
        id="myTab"
        role="tablist"
        style={{ marginBottom: "4%" }}
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="Details-tab"
            data-bs-toggle="tab"
            data-bs-target="#Details"
            type="button"
            role="tab"
            aria-controls="Details"
            aria-selected="true"
          >
            Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="References-tab"
            data-bs-toggle="tab"
            data-bs-target="#Dataoptions"
            type="button"
            role="tab"
            aria-controls="References"
            aria-selected="false"
          >
            Data output
          </button>
        </li>

      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="Details"
          role="tabpanel"
          aria-labelledby="Details-tab"
        >
          <Option1 values={props.values} />
        </div>
        <div
          className="tab-pane fade"
          id="Dataoptions"
          role="tabpanel"
          aria-labelledby="References-tab"
        >
          <Dataoption values={props.values} />
        </div>
      </div>
    </div>
  );
};

export default Details;
