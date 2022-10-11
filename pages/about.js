import Link from "next/link";

export default () => (
  <div className="custom-card">
    <div className="container section">
      <div className="row d-flex">
        <div className="about-text centered">
          <h1 className="heading-margin">About Me</h1>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-4">
          <img
            src="../static/me.png"
            alt="Avatar"
            className="img-fluid round"
          />
          <div className="col-md-12 centered">
            <h4>Melody Furmie</h4>
            <h6 className="lightPurpleText">Developer</h6>
          </div>
        </div>
        <div className="col-md-8 about-text">
          <small>
            {" "}
            <b>Hi, I am Melody Furmie</b> , I have years of experience within
            administration and customer service, having worked in many different
            industries and environments. I want the opportunity to practice my
            newly acquired skills, focusing on front end development and UX
            design. As I moved through my programming bootcamp with Hyperiondev,
            I learnt more about UX design which I found to be rather exciting.
          </small>
          <small>
            I am passionate in learning more about how UX design collaborates
            with programming and people's experiences on sites, the psycholoy
            involved in this and how this all flows into delivering a complete
            solution to end users.
          </small>
          <small>
            I have a BA in Psychology, obtained from UNISA in the year 2020
            alongside a short Course in Trauma Counselling from Hospivision in
            the year 2021.
          </small>
          <small>
            My programming skills include HTML, CSS, JavaScript, React JS,
            nextJS, JQuery, GitHub, MongoDB etc.
          </small>
          <Link href="/contact">
            <a className="btn btn-secondary">Contact me</a>
          </Link>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        .full-width {
          width: 100%;
        }

        .custom-card {
          margin-top: 1em;
          transition: 0.3s;
          width: 100%;
          display: flex;
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

        .round {
          border-radius: 50px !important;
        }

        .centered {
          margin-top: 10px;
          text-align: center;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1em;
        }

        .btn-secondary {
          width: 130px;
          font-size: 1rem;
          background: rgb(165, 117, 210);
          padding: 0.5rem 1rem;
        }

        .btn-secondary:hover {
          background: blueviolet !important;
        }

        .heading-margin {
          margin: 2em 0 0.5em 0;
        }

        .lightPurpleText {
          color: rgb(165, 117, 210);
        }
      `}
    </style>
  </div>
);
