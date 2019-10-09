import React from "react";
import SupernovaData from "./Data/supernova.json";

function Supernova() {
  return (
    <div className="Supernova">
      <h1>Hello.</h1>
      {SupernovaData.map((supernovaDetail, index) => {
        return (
          <h1>
            A stellar object {supernovaDetail.name}, also known as{" "}
            {supernovaDetail.alias}, is a class {supernovaDetail.type}{" "}
            supernova. It lies in a spiral galaxy. It is{" "}
            {supernovaDetail.distance_mpc} megaparsecs (~30,5 million
            light-years) from us.
            <p>It doesn't know who you are.</p>
            <p> You are not important.</p>
            <p>
              {" "}
              It was discovered by {supernovaDetail.discoverer.firstName}{" "}
              {supernovaDetail.discoverer.lastName}.
            </p>
          </h1>
        );
      })}
    </div>
  );
}

export default Supernova;
