import React from 'react';
interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const closeModal = () => setIsOpen(false);

  return (
    <div
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
      onClick={closeModal}
    >
      <div
        className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-4">
          <div>
            <h5 className="text-xl font-medium text-slate-800">
              Connect Web 3.0 Wallet
            </h5>
            <p className="text-slate-500 text-sm font-light">
              Choose which card you want to connect
            </p>
          </div>
          <button
            onClick={closeModal}
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="relative px-4">
          <div className="mb-6">
            <p className="pt-3 text-xs uppercase text-slate-500">
              Popular
            </p>
            <button className="w-full mt-3 rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <img
                src="https://docs.material-tailwind.com/icons/metamask.svg"
                alt="metamask"
                className="h-5 w-5 mr-2"
              />
              Connect Wallet
            </button>
            <button className="w-full mt-2 rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <img
                src="https://docs.material-tailwind.com/icons/coinbase.svg"
                alt="coinbase"
                className="h-5 w-5 mr-2 rounded-md"
              />
              Connect with Coinbase
            </button>
          </div>
          <div>
            <p className="pt-3 text-xs uppercase text-slate-500">
              Other
            </p>
            <button className="mt-3 w-full rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <img
                src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
                alt="trust-wallet"
                className="h-5 w-5 rounded-md mr-2 border border-slate-300"
              />
              Connect with Trust Wallet
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 p-4 text-blue-gray-500 mt-2">
          <p className="text-sm text-slate-500">
            New to Ethereum wallets?
          </p>
          <button className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;