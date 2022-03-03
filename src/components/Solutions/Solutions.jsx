/** @format */

import React from "react";
import "./solution.styles.scss";
import SolutionItem from "./SolutionItem";

const Solutions = () => {
  return (
    <div className="solution-container">
      <div className="solution-contents">
        <header className="solution-header">
          <h3>Our Solutions</h3>
          <p>
            Our Digital Manufacturing solutions focus on leveraging the power of
            digital technologies to reshape the manufacturing landscape. We help
            clients leverage digital platforms to increase collaboration and
            provide insights across the product lifecycle and across the
            engineering to manufacturing value chain.
          </p>
        </header>
        <div className="solution-items">
          <SolutionItem
            data={{
              name: "Additive Manufacturing",
              img: "https://i.ibb.co/H7kvPLY/metalworking-cnc-milling-machine-2021-08-26-22-59-26-utc-removebg-preview.png",
            }}
          />
          <SolutionItem
            data={{
              name: "Mass Manufacturing",
              img: "https://i.ibb.co/yV9f6nn/mastars-c-Jpv-BX-g-Nrg-unsplash-removebg-preview.png",
            }}
          />
          <SolutionItem
            data={{
              name: "Packaging",
              img: "https://i.ibb.co/rfYv6kb/Untitled-design-18.png",
            }}
          />
          <SolutionItem
            data={{
              name: "Logistics",
              img: "https://i.ibb.co/dt8sLGZ/toppng-com-logistics-truck-png-642x359.png",
            }}
          />
          <SolutionItem
            data={{
              name: "Assembly",
              img: "https://i.ibb.co/f1S4Mpp/Untitled-design-20.png",
            }}
          />
          <SolutionItem
            data={{
              name: "Onsite Solutions",
              img: "https://i.ibb.co/Z69cLwf/SP-incontext-1272.png",
            }}
          />
          <SolutionItem
            data={{
              name: "Consumer solutions",
              img: "https://i.ibb.co/MffdkCb/s.png",
            }}
          />
          <SolutionItem
            data={{
              name: "Consulting",
              img: "https://i.ibb.co/Gk4RTmR/Untitled-design-19.png",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
