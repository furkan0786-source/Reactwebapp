import React from "react";
import web from "../src/Images/gd9.jpg";
import { NavLink } from "react-router-dom";
//import Common from "./Common";
const Home = () => {
  return (
    <>
   <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg ">
          <div className="row ">
            <div className="col-10 max-auto  ms-auto">
            <div className="row">

            
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h2>
                  
                 Grow your business with
                  <strong className="brand-name"> CSITian</strong>
                </h2>
                <h5 className="my-3">
                  We are the team of talented developer making websites
                </h5>
                <div className="mt-3">
                  <NavLink to="/service" className="btn-get-started" role="button">
                    Get Started
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src= {web} className="img-fluid animated" alt="home img"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     </>
  );
};

export default Home;
