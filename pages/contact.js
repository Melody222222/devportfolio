import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapPin,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default () => (
  <div className="custom-card">
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 about-text centered">
          <h1 className="heading-margin">Contact Me</h1>
          <p>
            Feel free to reach out to me for any collaboration on the below
            details:
          </p>
          <div className="contact-details">
            <div className="icon-gap">
              <FontAwesomeIcon className="icon" icon={faPhone} />{" "}
              <p>072 556 1011</p>
            </div>
            <div className="icon-gap">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
              <Link href="mailto:melody.furmie@gmail.com">
                <a className="remove-decoration">
                  <p>melody.furmie@gmail.com</p>
                </a>
              </Link>
            </div>
            <div className="icon-gap">
              <FontAwesomeIcon className="icon" icon={faMapPin} />{" "}
              <p>145 3rd Avenue, Midrand</p>
            </div>
            <div className="icon-gap justify-content-center social-wrapper">
              <div className="icon-gap">
                <Link href="https://www.linkedin.com/in/melody-furmie-a87379b3/">
                  <a className="white">
                    <FontAwesomeIcon
                      className="icon social-icon white"
                      icon={faLinkedin}
                    />
                  </a>
                </Link>
              </div>
              <div className="icon-gap">
                <Link href="https://github.com/Melody222222">
                  <a className="white">
                    <FontAwesomeIcon
                      className="icon social-icon white"
                      icon={faGithub}
                    />
                  </a>
                </Link>
              </div>
              <div className="icon-gap">
                <Link href="http://melodyfurmie.me/Melody-Furmie-Resume/">
                  <a className="white">
                    <FontAwesomeIcon
                      className="icon social-icon white"
                      icon={faBriefcase}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        .white {
          color: #fff !important;
        }
        .custom-card {
          transition: 0.3s;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        .section {
          width: 80vw;
          height: 80%;
          border-radius: 30px;
          padding: 1.5em 2em;
          color: rgb(255, 255, 255);
        }

        .centered {
          margin-top: 10px;
          text-align: center;
        }

        .icon-gap {
          display: flex;
          gap: 1em;
        }

        .btn-secondary {
          width: 130px;
          font-size: 1rem;
          background: rgb(165, 117, 210);
          padding: 0.5rem 1rem;
        }

        .remove-decoration {
          text-decoration: none;
          color: #fff;
        }

        a:hover {
          color: blueviolet;
        }
        .icon {
          width: 1em;
          height: 1em;
        }

        .social-icon {
          font-size: 1.5em;
          background: blueviolet;
          padding: 8px;
          border-radius: 50%;
        }

        .social-icon:hover {
          color: #fff !important;
          background: rgb(165, 117, 210);
          transition: ease-in 0.2s;
        }
        .contact-details {
          width: fit-content;
          margin: 0 auto;
        }

        .heading-margin {
          margin: 2em 0 1em 0;
        }
      `}
    </style>
  </div>
);
