import React from "react";
import myLogo from "../assets/logo.jpeg";
import ig from "../assets/ig.svg";
import tiktok from "../assets/tiktok.svg";
function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <img
          src={myLogo}
          alt="Logo"
          className="inline-block"
          width="50"
          height="50"
        />

        <p className="font-bold">
          Candu Diksi. <br />
          Providing a 3D Folklore Book
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/official.candudiksi?igsh=Nng0aHloeHllcXc5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ig}
              alt="Instagram"
              className="fill-current"
              width="24"
              height="24"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@official.candudiksi?_t=8nOFUNgqekk&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tiktok}
              alt="TikTok"
              className="fill-current"
              width="24"
              height="24"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
