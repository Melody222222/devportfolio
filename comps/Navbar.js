import Link from "next/link";
export default () => (
  <div>
    <nav>
      <ul className="nav-list">
        <li className="nav-items">
          <Link href="/">
            <h3>My Portfolio</h3>
          </Link>
        </li>
        <li className="nav-items">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="nav-items">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="nav-items">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className="nav-items">
          <Link href="/contact">
            <span className="nav-btn">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx global>
      {`
        nav {
          position: fixed;
          z-index: 9999999999999;
          width: 100%;
          top: 0;
        }
        * {
          font-family: "Montserrat", sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .nav-list {
          background-color: rgb(255, 255, 255);
          margin: 0;
          padding: 1rem 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .nav-items {
          list-style: none;
          margin-right: 2rem;
          color: rgb(0, 0, 0);
        }

        .nav-items a {
          text-decoration: none;
          color: rgb(0, 0, 0);
        }

        .nav-items:first-child {
          margin-right: auto;
          margin-left: 2rem;
        }

        .nav-btn {
          font-size: 1rem;
          background: rgb(165, 117, 210);
          border: none;
          outline: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          color: #fff !important;
        }

        .nav-btn:hover {
          background-color: blueviolet;
          color: #fff !important;
        }

        .nav-items a:hover {
          color: blueviolet;
        }
      `}
    </style>
  </div>
);
