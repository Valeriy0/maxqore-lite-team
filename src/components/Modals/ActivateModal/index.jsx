import React from "react";
import { WALLETS } from "connectors/wallets";
import { useTryActivation } from "helpers/hooks/useTryActivation";
import { Modal } from "components/Modal";

export const ActivateModal = ({ openedModal, handleCloseModal, onClose, children, className, isDisableOnClose }) => {
  const { tryActivation } = useTryActivation();

  const preventDefaultCallBack = (callback) => (e) => {
    e.preventDefault();

    callback && callback(e);
  };

  const onWalletClick = (wallet) => () => {
    tryActivation(wallet.connector);
    handleCloseModal();
  };

  return (
      <Modal  isOpened={openedModal} onClose={handleCloseModal}>
        <div className="flex flex-col items-center justify-center bg-main-bg border border-[1px] border-white-100 w-[480px] rounded-[30px] py-[40px] space-y-10 px-[40px] sm:w-full sm:rounded-[0px] sm:rounded-t-[30px] sm:mt-[10px]">
          <span className="font-poppins text-2xl  text-white font-medium sm:uppercase sm:text-xl">Connect your wallet</span>
            <div className="flex w-full flex-col overflow-auto mt-5 space-y-3.5">
              {WALLETS?.map((wallet) => {
                return (
                  <div
                    className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full p-2 cursor-pointer hover:bg-white-50"
                    onClick={onWalletClick(wallet)}
                    key={wallet.title}
                  >
                   <img src={wallet.icon} />
                    <div className="flex flex-col ml-5">
                      <span className="font-poppins text-lg text-white font-semibold">
                        {wallet.title}
                      </span>
                      <span className="text-sm text-white-700 font-light">
                        {wallet.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={preventDefaultCallBack()} className=" sm:flex items-center justify-center border border-[1px] border-white-100 hover:bg-white-50 rounded-full w-full py-4">
              <span className="font-poppins text-sm text-white">
                Cancel
              </span>
            </button>

      </div>
      </Modal>  
  );
};
