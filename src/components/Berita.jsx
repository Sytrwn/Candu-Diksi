import React from "react";
import Berita1 from "../assets/berita1.jpeg";
import Berita2 from "../assets/berita2.jpeg";
import Berita3 from "../assets/berita3.jpg";
import Berita4 from "../assets/berita4.jpeg";

function Berita() {
  return (
    <div className="container mx-auto">
      <div className="py-12 mx-4">
        <h2 className="text-bold text-2xl text-hitam text-center my-16">
          Berita
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Berita 1 */}
          <a
            href="https://news.unimal.ac.id/index/single/5843/mahasiswa-unimal-luncurkan-program-candu-diksi"
            target="_blank"
            className="flex justify-center"
          >
            <div className="card w-full md:w-64 rounded-lg shadow-xl border flex transition-transform duration-300 hover:scale-105">
              <figure className="flex-shrink-0">
                <img
                  src={Berita1}
                  alt="Berita"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </figure>
              <div className="flex-grow p-4">
                <p className="text-base text-base-200 py-6 text-center font-semibold underline hover:text-sky-700">
                  Mahasiswa Unimal Luncurkan Program Candu Diksi
                </p>
              </div>
            </div>
          </a>

          {/* Berita 2 */}
          <a
            href="https://indonesiakini.id/2024/05/28/13298/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <div className="card w-full md:w-64 rounded-lg shadow-xl border flex transition-transform duration-300 hover:scale-105">
              <figure className="flex-shrink-0">
                <img
                  src={Berita2}
                  alt="Berita"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </figure>
              <div className="flex-grow p-4">
                <p className="text-base text-base-200 py-1 text-center font-semibold underline hover:text-sky-700">
                  Tim PKM-PM Unimal Luncurkan Program Candu Diksi Untuk
                  Kembalikan Eksistensi Cerita Rakyat
                </p>
              </div>
            </div>
          </a>

          {/* Berita 3 */}
          <a
            href="https://indonesiakini.id/2024/05/28/13287/"
            target="_blank"
            className="flex justify-center"
          >
            <div className="card w-full md:w-64 rounded-lg shadow-xl border flex transition-transform duration-300 hover:scale-105">
              <figure className="flex-shrink-0">
                <img
                  src={Berita4}
                  alt="Berita"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </figure>
              <div className="flex-grow p-4">
                <p className="text-base text-base-200 py-6 text-center font-semibold underline hover:text-sky-700">
                  Mahasiswa Unimal Lakukan Pengabdian Masyarakat di MTS Nisam
                </p>
              </div>
            </div>
          </a>

          {/* Berita 4 */}
          <a
            href="https://indonesiakini.id/2024/05/28/13291/"
            target="_blank"
            className="flex justify-center"
          >
            <div className="card w-full md:w-64 rounded-lg shadow-xl border flex transition-transform duration-300 hover:scale-105">
              <figure className="flex-shrink-0">
                <img
                  src={Berita3}
                  alt="Berita"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </figure>
              <div className="flex-grow p-4">
                <p className="text-base text-base-200 py-6 text-center font-semibold underline hover:text-sky-700">
                  MTS Nisam Terima Kunjungan PKM-PM Unimal dalam Upaya
                  Lestarikan Cerita Rakyat
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Berita;
