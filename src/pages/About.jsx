import React from "react";
import avatar from '../assets/avatar.png'
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mt-5" >
      <div className="row d-flex justify-content-center" >
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img
                src={avatar}
                width={100}
                className="rounded-circle"
                alt="a"
              />
            </div>
            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="mt-2 mb-0 fs-3 text-danger" style={{ textDecoration: "underline" }}>Burak Karaman</h5>
              <span className="fs-5">Fullstack Developer</span>
              <div className="px-4 mt-1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  voluptatem dolore sint quo assumenda eum voluptate aut, sequi
                  rem cumque facilis asperiores possimus porro, facere eveniet!
                  Tempora non cupiditate in quis adipisci. Distinctio, deleniti
                  dolores?
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-x" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-black "
                    href="https://wwww.karaman.buraak@gmail.com"
                    target="true">
                    <i className="gmail fa-brands fa-google " />
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/karamanburak"
                    target="true">
                    <FaGithub className="github" />  Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
