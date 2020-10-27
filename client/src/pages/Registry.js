import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

function registry() {
    return(
      <React.Fragment>
      <Nav />
      <Jumbotron />
        <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          <div className="cell">
            <div className="card">
              <img src="./Images/Amazon.jpg" alt="baby"></img>
              <div className="card-section">
                <p>You'll find our registry by clicking on the button below.</p>
                <a className="button primary" href="HTTPS://www.amazon.com">View</a>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img src="./Images/BuyBuyBaby.jpg" alt="baby"></img>
              <div className="card-section">
                <p>You'll find our registry by clicking on the button below.</p>
                <a className="button primary" href="HTTPS://www.buybuybaby.com">View</a>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img src="./Images/Target.jpg" alt="baby"></img>
              <div className="card-section">
                <p>You'll find our registry by clicking on the button below.</p>
                <a className="button primary" href="HTTPS://www.target.com">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
}

export default registry;