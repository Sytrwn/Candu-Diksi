import React, { useRef } from "react";

function Card({ title, content, buttonText }) {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };
  return (
    <div
      id="card-section"
      className="flex flex-col sm:flex-row px-4  mt-20 items-center justify-center"
    >
      <div className="w-96 mb-4 sm:mb-0 sm:mr-4">
        <div className="card shadow-2xl h-80 bg-hitam text-primary-content">
          <div className="card-body text-white">
            <h2 className="card-title">Buku Cerita</h2>
            <p>
              Buku cerita yang mengisahkan legenda rakyat Aceh yang kaya budaya,
              dilengkapi dengan teknologi Augmented Reality (AR) untuk
              pengalaman membaca yang interaktif dan mendalam.
            </p>
            <div className="card-actions justify-center sm:justify-end">
              <div>
                <button
                  className="btn text-white bg-biru text-putih sm:btn-sm md:btn-md px-6 border-none hover:bg-ungu hover:text-black transform hover:scale-105 transition duration-300"
                  onClick={openModal}
                >
                  Open
                </button>
                {/*Modal Pop Up*/}
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
                {/*Batas Modal*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 sm:ml-4">
        <div className="card shadow-2xl bg-hitam text-primary-content">
          <div className="card-body text-white">
            <h2 className="card-title">Buku Pedoman Mitra</h2>
            <p>
              Buku pedoman mitra dirancang oleh tim PKM candu diksi sebagai
              acuan dalam pelaksanaan program candu diksi kepada mitra, buku ini
              berisi tahapan-tahapan pembuatan AR (Augmented Reality 3D) dan
              juga berisi tahapan-tahapan implementasi program kepada mitra.
            </p>
            <div className="card-actions justify-center sm:justify-end">
              <button
                className="btn bg-biru text-white sm:btn-sm md:btn-md text-putih px-6 border-none hover:bg-ungu hover:text-black transform hover:scale-105 transition duration-300"
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
  );
}

export default Card;
