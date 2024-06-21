import React from "react";

function Card({ title, content, buttonText }) {
  return (
    <div
      id="card-section"
      className="flex flex-col sm:flex-row px-4 mt-20 items-center justify-center"
    >
      <div className="w-96 mb-4 sm:mb-0 sm:mr-4">
        <div className="card shadow-2xl bg-hitam text-primary-content">
          <div className="card-body text-putih">
            <h2 className="card-title">Buku Cerita</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center sm:justify-end">
              <button className="btn bg-biru text-putih sm:btn-sm md:btn-md px-6 border-none hover:bg-ungu hover:text-black transform hover:scale-105 transition duration-300">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 sm:ml-4">
        <div className="card shadow-2xl bg-hitam text-primary-content">
          <div className="card-body text-putih">
            <h2 className="card-title">Buku Panduan</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center sm:justify-end">
              <button className="btn bg-biru sm:btn-sm md:btn-md text-putih px-6 border-none hover:bg-ungu hover:text-black transform hover:scale-105 transition duration-300">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
