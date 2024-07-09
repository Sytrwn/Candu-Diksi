import React from "react";
import naiza from "../assets/naiza.jpeg";
import rizka from "../assets/rizka.jpeg";
import alfin from "../assets/alfin.jpeg";
import fitra from "../assets/fitra.jpeg";

function Carousel() {
  return (
    <div
      id="tim-pengembang"
      className="carousel mb-24 w-full flex justify-center"
    >
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center"
      >
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 lg:gap-4  gap-8 px-4 mt-6 mb-6">
            {/* Riezka */}
            <div className="card lg:-ml-20 w-32 md:w-64 lg:w-full bg-transparent mx-auto">
              <figure>
                <img src={rizka} alt="Riezka" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center mt-2">
                <p className="text-lg font-bold">Ketua</p>
                <p>Riezka Maghfirah</p>
              </div>
            </div>
            {/* Naiza */}
            <div className="card w-32 lg:mr-10 md:w-64 lg:w-full bg-transparent mx-auto">
              <figure>
                <img src={naiza} alt="Naiza" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center mt-2">
                <p className="text-lg font-bold">Sekretaris</p>
                <p>Naiza Ferona</p>
              </div>
            </div>
            {/* Alfin */}
            <div className="card w-32 lg:ml-10 md:w-64 lg:w-full bg-transparent mx-auto">
              <figure>
                <img src={alfin} alt="Alfin" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center mt-2">
                <p className="text-lg font-bold">Anggota</p>
                <p>Alfin Syatriawan</p>
              </div>
            </div>
            {/* Fitra */}
            <div className="card w-32 lg:-mr-20 md:w-64 lg:w-full bg-transparent mx-auto">
              <figure>
                <img src={fitra} alt="Fitra" className="rounded-lg" />
              </figure>
              <div className="items-center text-black text-center mt-2">
                <p className="text-lg font-bold">Anggota</p>
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
