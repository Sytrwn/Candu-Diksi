import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import mylogo from "../assets/logo.jpeg";
import File from "../components/File";
import Mockup from "../assets/mockup.png";
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
      <div className="hero min-h-screen shadow-md rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse px-4 sm:px-6 md:px-10 lg:px-20 mt-10">
          <img
            src={Mockup}
            className="w-full sm:max-w-xs md:max-w-sm rounded-lg"
          />
          <div className="mt-10 lg:mt-0 lg:ml-10">
            <h1 className="mb-8 text-4xl sm:text-5xl font-bold text-center lg:text-left text-black">
              Selamat Datang di <br /> Candu Diksi
            </h1>
            <p className="mb-8 text-lg text-center lg:text-left text-black">
              Candu Diksi (Cerita Daerahku Berbasis Augmented Reality 3D)
              Sebagai Solusi Untuk Meningkatkan Krisis Kearifan Lokal Yang
              Terjadi Di Provinsi Aceh. Program Ini Merupakan Program <br />{" "}
              PKM-PM Yang Dilaksanakan Oleh Mahasiswa Universitas Malikussaleh,
              Aceh. Program Candu Diksi Merupakan Program Penerapan Ilmu
              Pengetahuan, Teknologi dan Seni Yang Akan Membantu Meningkatkan
              Eksistensi Cerita Rakyat Daerah.
            </p>
            <div className="flex justify-center lg:justify-center">
              <button
                className="btn bg-biru px-6 border-none text-white hover:bg-ungu hover:text-black transform hover:scale-105 transition duration-300"
                onClick={handleScroll}
              >
                Tim Pengembang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}

      <Card />
      <div id="aplikasi-section" className="flex justify-center px-4">
        <div className="w-full sm:w-96 md:w-96  xl:w-96 mr-1 mt-4">
          <div className="card shadow-2xl bg-hitam text-primary-content">
            <div className="card-body text-white">
              <h2 className="card-title">Aplikasi</h2>
              <p>
                Aplikasi ini dirancang khusus untuk memindai dan mengaktifkan
                konten Augmented Reality (AR) yang terdapat dalam buku cerita,
                menghadirkan pengalaman membaca yang interaktif dan memukau
                dengan animasi, suara, dan informasi tambahan yang memperkaya
                setiap halaman.
              </p>
              <div className="card-actions justify-center sm:justify-end">
                <button
                  className="btn bg-biru px-6 border-none text-white hover:bg-ungu hover:text-black transform hover:scale-105 transition duration-300"
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
      {/* Batas Card */}

      <div className="container mx-auto">
        <Berita />

        {/* Carousel */}
        <div className="flex justify-center mt-12">
          <div className="card w-32 sm:w-64 bg-transparent">
            <figure>
              <img src={pakarnawan} alt="Pak Arnawan" className="rounded-lg" />
            </figure>
            <div className="items-center text-black text-center">
              <p className="text-lg font-bold">Dosen Pembimbing</p>
              <p>Arnawan Hasibuan </p>
            </div>
          </div>
        </div>
        <Carousel />
        {/* Batas Carousel */}

        <Footer />
      </div>
    </div>
  );
};

export default Beranda;
