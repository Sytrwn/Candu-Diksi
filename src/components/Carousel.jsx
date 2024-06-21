import React from "react";
import naiza from "../assets/naiza.jpeg";
import rizka from "../assets/rizka.jpeg";
import alfin from "../assets/alfin.jpeg";
import fitra from "../assets/fitra.jpeg";

function Carousel() {
  return (
    <div id="tim-pengembang" className="carousel mb-24 w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full ">
          <div className=" px-4 flex   mt-6 mb-6 justify-between">
            {/* Riezka */}
            <div className="card w-72 bg-transparent">
              <figure>
                <img src={rizka} alt="Riezka" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center">
                <p className="text-lg font-bold">Ketua</p>
                <p>Riezka Maghfirah</p>
              </div>
            </div>
            {/* naiza*/}
            <div className="card w-72 bg-transparent ">
              <figure>
                <img src={naiza} alt="Naiza" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center">
                <p className="text-lg font-bold">Sekretaris</p>
                <p>Naiza Ferona</p>
              </div>
            </div>
            {/* alfin */}
            <div className="card w-72 bg-transparent ">
              <figure>
                <img src={alfin} alt="Alfin" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center">
                <p className="text-lg  font-bold">Anggota</p>
                <p>Alfin Syatriawan</p>
              </div>
            </div>
            {/* Fitra*/}
            <div className="card w-72 bg-transparent ">
              <figure>
                <img src={fitra} alt="Fitra" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center">
                <p className="text-lg  font-bold">Anggota</p>
                <p>M Fitra Waldi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
