import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import mylogo from "../assets/logo.jpeg";
import File from "../components/File";
import Hero from "../assets/hero.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import pakarnawan from "../assets/pak-arnawan.jpeg";
import Berita from "../components/Berita";

const Beranda = () => {
  const handleScroll = () => {
    const element = document.getElementById("tim-pengembang");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };
  return (
    <div id="beranda-section" className="beranda">
      <Navbar />
      <div
        className="hero min-h-screen rounded-b-lg shadow-2xl"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className=" text-center mt-20">
          <div className="max-w-md bg-white bg-opacity-75 rounded-lg py-5 text-black ">
            <h1 className="mb-8 text-5xl   font-bold">
              Selamat Datang di <br /> Candu Diksi
            </h1>
            <p className="mb-8 font-lg   ">
              Candu Diksi (Cerita Daerahku Berbasis Augmented Reality 3D)
              Sebagai Solusi Untuk Meningkatkan Krisis Kearifan Lokal Yang
              Terjadi Di Provinsi Aceh. Program Ini Merupakan Program <br />{" "}
              PKM-PM Yang Dilaksanakan Oleh Mahasiswa Universitas Malikussaleh,
              Aceh. Program Candu Diksi Merupakan Program Penerapan Ilmu
              Pengetahuan, Teknologi dan Seni Yang Akan Membantu Meningkatkan
              Eksistensi Cerita Rakyat Daerah.
            </p>
            <button
              onClick={handleScroll}
              className="btn bg-biru text-putih sm:btn-sm md:btn-md text-white px-6 border-none hover:bg-ungu hover:text-hitam transform hover:scale-105 transition duration-300 cursor-pointer"
            >
              Tim Pengembang
            </button>
          </div>
        </div>
      </div>
      {/*Card */}
      <div>
        <Card />
        <div id="aplikasi-section" class="flex px-4 justify-center ">
          <div class="w-96 mr-4 mt-4">
            <div class="card shadow-2xl bg-hitam text-primary-content">
              <div class="card-body text-white">
                <h2 class="card-title">Aplikasi</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button
                    class="btn bg-biru sm:btn-sm md:btn-md text-white px-6 border-none hover:bg-ungu hover:text-hitam transform hover:scale-105 transition duration-300 "
                    onClick={openModal}
                  >
                    Open
                  </button>
                  <dialog id="my_modal_1" ref={modalRef} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <a
                          href="public/vite.jpg"
                          download="vite.jpg"
                          className="btn"
                          onClick={() => modalRef.current.close()}
                        >
                          Download
                        </a>
                        <button
                          className="btn"
                          onClick={() => modalRef.current.close()}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Batas Card*/}
      <div>
        <Berita />
      </div>

      {/*Carousel*/}
      <div className="flex justify-center mt-12">
        <div className="card w-64  bg-transparent ">
          <figure>
            <img src={pakarnawan} alt="Pak Arnawan" className="rounded-lg" />
          </figure>
          <div className="items-center text-black text-center">
            <p className="text-lg  font-bold">Dosen Pembimbing</p>
            <p>Arnawan Hasibuan </p>
          </div>
        </div>
      </div>
      <Carousel />
      {/* Batas Carousel*/}
      <Footer />
    </div>
  );
};

export default Beranda;
