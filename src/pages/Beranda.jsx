import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import mylogo from "../assets/logo.jpeg";
import File from "../components/File";
import Hero from "../assets/hero.png";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <div className="beranda">
      <Navbar />
      <div
        className="hero min-h-screen rounded-b-lg shadow-2xl"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className=" text-center mt-20">
          <div className="max-w-md border border-red-500">
            <h1 className="mb-8 text-5xl bg-hitam rounded-lg bg-opacity-0 text-blue-500 font-bold">
              Selamat Datang di <br /> Candu Diksi
            </h1>
            <p className="mb-8 font-lg bg-hitam rounded-lg bg-opacity-0 text-putih">
              Candu Diksi (Cerita Daerahku Berbasis Augmented Reality 3D)
              Sebagai Solusi Untuk Meningkatkan Krisis Kearifan Lokal Yang
              Terjadi Di Provinsi Aceh. Program Ini Merupakan Program <br />{" "}
              PKM-PM Yang Dilaksanakan Oleh Mahasiswa Universitas Malikussaleh,
              Aceh. Program Candu Diksi Merupakan Program Penerapan Ilmu
              Pengetahuan, Teknologi dan Seni Yang Akan Membantu Meningkatkan
              Eksistensi Cerita Rakyat Daerah.
            </p>
            <button className="btn bg-biru  text-putih sm:btn-sm md:btn-md  text-white px-6 border-none hover:bg-ungu hover:text-hitam transform hover:scale-105 transition duration-300 ">
              Buku Pedoman
            </button>
          </div>
        </div>
      </div>
      <div>
        <Card />
        <div class="flex px-4 justify-center ">
          <div class="w-96 mr-4 mt-4">
            <div class="card shadow-2xl bg-hitam text-primary-content">
              <div class="card-body text-putih">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn bg-biru sm:btn-sm md:btn-md text-white px-6 border-none hover:bg-ungu hover:text-hitam transform hover:scale-105 transition duration-300 text-putih">
                    Aplikasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Beranda;
