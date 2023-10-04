import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import clsx from 'clsx';

export const Modal = ({ isOpened, onClose, children, className, isDisableOnClose }) => {
  const preventDefaultCallBack = (callback) => (e) => {
    e.preventDefault();

    callback && callback(e);
  };

  return (
    <DialogOverlay
      className="header-dialog-overlay "
      isOpen={isOpened}
      as="div"
      onClick={!isDisableOnClose && preventDefaultCallBack(onClose)}
    >
      <DialogContent
        className={clsx(
          className,
          'header-dialog-content sm:header-dialog-content-mob sm:m-0 sm:w-screen sm:max-h-full sm:h-[100vh] sm:max-w-full relative sm:justify-end sm:items-end',
        )}
        as="div"
        aria-label="modal"
      >
        {children}
      </DialogContent>
      {!isDisableOnClose && (
        <div
          className="flex top-9 right-10 bg-[#141517] justify-center cursor-pointer flex items-center w-10 h-10 rounded-full absolute sm:top-2.5 sm:right-5 sm:hidden pointer-events-none"
          onClick={preventDefaultCallBack(onClose)}
          onTouchEnd={preventDefaultCallBack(onClose)}
        >
          <img className="h-6 w-6" src="/maxqore/icons/close.svg"/>
        </div>
      )}
    </DialogOverlay>
  );
};
