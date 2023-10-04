import React, { useEffect, useState, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useGetContract } from 'helpers/hooks/useGetContract.js';
import { CONTRACT_NAMES } from 'helpers/constants.js';
import { ActivateModal } from "components/Modals/ActivateModal";
import { useModal } from "helpers/hooks/useModal";
import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';
import Countdown from 'react-countdown';
import { isBefore } from 'date-fns';
import { MAXQORE_DATE_START, getMaxQoreDateStartToLevel } from "helpers/constants.js";
import config from 'helpers/config';

const shortenAddress = (address, chars = 4) => {
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
};


export const Main = () => {
  const { openedModal, onOpen, onClose } = useModal()
  const { account } = useWeb3React();
  const { getContract } = useGetContract();
  const [nextLevel, setNextLevel] = useState(1);
  const [lastTrueActive, setLastTrueActive] = useState(0);

  const [isRegisteredFromX3X4, setIsRegisteredFromX3X4] = useState(false);

  const [isCompletedCountdownMaxQore, setIsCompletedCountdownMaxQore] = useState(
    !isBefore(new Date(), new Date(MAXQORE_DATE_START)),
  );
  const [someLevelTimerIsChange, setSomeLevelTimerIsChange] = useState(false);

  const checkLastActiveMaxqore = async () => {
    try {
      const contract = await getContract(CONTRACT_NAMES.MAXQORE);
      const nextLvl = await contract.findNextUserLevel(account);

      if (nextLvl === 0) {
        setLastTrueActive(15);
        setNextLevel(16);
      } else {
        setLastTrueActive(nextLvl - 1);
      }
    } catch (e) {
      // setNextMaxqoreLvl(0);
    }
  };

  const initCheckActive = async () => {
    try {
      const contract = await getContract(CONTRACT_NAMES.MAXQORE);
      const nextLvl = await contract.findNextUserLevel(account);
      
      setNextLevel(nextLvl);
    } catch (e) {
      // setNextMaxqoreLvl(0);
    }
  };

  const checkIsRegistered = async () => {
    try {
      const contract = await getContract(CONTRACT_NAMES.XBASE);
      const exists = await contract.isUserExists(account);

      setIsRegisteredFromX3X4(exists);
    } catch (e) {
      setIsRegisteredFromX3X4(false);
    }
  };


  useEffect(() => {
    if (account) {
      checkIsRegistered();
      initCheckActive();
      checkLastActiveMaxqore();
    }
  }, [account])

  useEffect(() => {
    const interval = setInterval(() => {
      checkLastActiveMaxqore();
    }, 5000);
    return () => clearInterval(interval);
  }, [account]);

  const MAXQORE_PROGRAM_PRICES =
      {
        1: 0.044,
        2: 0.055,
        3: 0.088,
        4: 0.122,
        5: 0.177,
        6: 0.26,
        7: 0.38,
        8: 0.54,
        9: 0.78,
        10: 1.15,
        11: 1.7,
        12: 2.4,
        13: 3.5,
        14: 5.5,
        15: 7.5,
      };

  const toWei = (value) => {
    return parseUnits(String(value), 'ether');
  }

  const increaseByPercent = (number, percent = 30) => {
    const onePercent = number.div(100);
  
    return number.add(onePercent.mul(percent));
  };

  // const registration = async () => {
  //   let result = {};
  //   try {
  //   const contract = await getContract(CONTRACT_NAMES.ROUTER);
  //           const priceWithCommission = (MAXQORE_PROGRAM_PRICES[1] + 0.003).toFixed(3)
      
  //           let gas = null;
  //           try {
  //             gas = await contract.estimateGas.maxQoreRegistration({
  //               value: toWei(priceWithCommission),
  //             });
  //           } catch (e) {
  //             //
  //           }

  //           result = await contract.maxQoreRegistration({
  //             value: toWei(priceWithCommission),
  //             gasLimit: parseInt(gas) ? increaseByPercent(gas) : BigNumber.from(2000000),
  //           });

  //     setNextLevel(2);

  //     return result;
  //   } catch (e) {
  //     console.log(e);
  //     setNextLevel(1);
  //   }
  // }

  const registration = async () => {
    let result = {};
    setNextLevel(2);
    try {
    const contract = await getContract(CONTRACT_NAMES.MAXQORE);
            const priceWithCommission = MAXQORE_PROGRAM_PRICES[1].toFixed(3)
      
            let gas = null;
            try {
              gas = await contract.estimateGas.registrationExt({
                value: toWei(priceWithCommission),
              });
            } catch (e) {
              //
            }

            result = await contract.registrationExt({
              value: toWei(priceWithCommission),
              gasLimit: parseInt(gas) ? increaseByPercent(gas) : BigNumber.from(2000000),
            });

   

      return result;
    } catch (e) {
      console.log(e);
      setNextLevel(1);
    }
  }

  // const upgrade = async (level) => {
  //   const price = (MAXQORE_PROGRAM_PRICES[level] + 0.003).toFixed(3);
  //   let result = {};
  //   try {
  //     const routeContract = await getContract(CONTRACT_NAMES.ROUTER);
  //     const value = toWei(price);

  //     let gas = null;
  //     try {
  //       gas = await routeContract.estimateGas.maxQoreUpgrades([level], {
  //         value,
  //       });
  //     } catch (e) {
  //       //
  //     }

  //     result = await routeContract.maxQoreUpgrades([level], {
  //       value,
  //       gasLimit: parseInt(gas) ? increaseByPercent(gas) : BigNumber.from(2000000),
  //     });

  //     if (nextLevel < 15) {
  //       setNextLevel(prev => prev + 1);
  //     } else {
  //       setNextLevel(16);
  //     }

  //     return result;
  //   } catch (e) {
  //     console.log(e);
      
  //   }
  // }


  const upgrade = async (level) => {
    const price = MAXQORE_PROGRAM_PRICES[level].toFixed(3);
    let result = {};
    if (nextLevel < 15) {
      setNextLevel(prev => prev + 1);
    } else {
      setNextLevel(16);
    }
    try {
      const routeContract = await getContract(CONTRACT_NAMES.MAXQORE);
      const value = toWei(price);

      let gas = null;
      try {
        gas = await routeContract.estimateGas.buyNewLevel([level], {
          value,
        });
      } catch (e) {
        //
      }

      result = await routeContract.buyNewLevel([level], {
        value,
        gasLimit: parseInt(gas) ? increaseByPercent(gas) : BigNumber.from(2000000),
      });

      

      return result;
    } catch (e) {
      console.log(e);
      
    }
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const finalMinutes = minutes < 10 ? '0' + minutes : minutes;
    const finalSeconds = seconds < 10 ? '0' + seconds : seconds;
    if (completed) {
      return null;
    } else if (days > 0) {
      return (
          <span>
          {days} : {hours} : {minutes}
        </span>
      );
    } else if (days === 0 && hours > 1) {
      return (
          <span>
          {hours} : {finalMinutes} : {finalSeconds}
        </span>
      );
    } else if (days === 0 && hours === 0) {
      return (
          <span>
          {finalMinutes} : {finalSeconds}
        </span>
      );
    }
  }

  

  const mainButtonClick = (level = nextLevel) => {
      if (!account) {
        onOpen();
      } else {
        if (level === 1) {
          registration();
        } else {
          upgrade(level);
        }
      }
  }

  const maxQoreLvls = useMemo(() => {
    return (
      <div className="grid grid-cols-5 sm:grid-cols-3 gap-2.5">
        {Object.values(MAXQORE_PROGRAM_PRICES).map((item, itemIndex) => {
          const level = itemIndex + 1;
          const levelTimerIsOver = !isBefore(new Date(), new Date(getMaxQoreDateStartToLevel(level)))
          const isActive = lastTrueActive >= level;
          const isNextActivate = level === nextLevel;

          const isLoadingLvl = lastTrueActive < level && level < nextLevel;

          return (
            <div
              className={`relative w-[100px] h-[75px] flex items-center justify-center ${
                isActive ? 'bg-green-100' : isNextActivate ? 'bg-green-350 cursor-pointer' : 'bg-black-300'
              } rounded`}
            >
              <span className="absolute top-1.5 left-1.5 text-white-500">{level}</span>
              {isLoadingLvl ? <img src='/icons/puff.svg' className='w-10 h-10' /> : isActive ? (
                <img src='/icons/success_check.svg' className="w-10 h-10" />
              ) : (
                <div className="text-center text-white">
                  {isNextActivate && <span className="font-semibold">Upgrade</span>}
                  <div className="flex items-center justify-center space-x-1.5">
                    {' '}
                    <span>{item} </span> <img src='/icons/BNB.svg' className="w-3.5 h-3.5" />{' '}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    )
  }, [nextLevel, lastTrueActive, someLevelTimerIsChange])

  const mainButton = useMemo(() => {
      if (!account ) {
        return <span>Connect wallet</span>
      }
      if (nextLevel === 1) {
        return <span>Register now</span>
      }

      return <span>{nextLevel === 16 ? 'All levels activated' : `buy ${nextLevel} level`}</span>
  }, [isCompletedCountdownMaxQore, account, nextLevel, lastTrueActive, someLevelTimerIsChange])

  return (
    <div className="relative w-full min-h-[100vh] flex flex-col items-center justify-center sm:p-2">
      <img
        className="hidden sm:flex absolute top-4 right-0 w-[35%]   "
        src="/maxQore/invite/main/main-right-mob.svg"
        alt=""
      />
      <img
        className="absolute top-0 right-0 sm:top-1/2 w-[20%] sm:rigth-[-100px] sm:hidden  "
        src="/maxQore/invite/main/main-left.svg"
        alt=""
      />
      <img
        className="hidden sm:flex absolute bottom-0 left-0 w-[45%]   "
        src="/maxQore/invite/main/main-left-mob.svg"
        alt=""
      />
      <img
        className="absolute top-1/3 left-0 w-[20%] sm:top-transparent sm:bottom-0 sm:hidden "
        src="/maxQore/invite/main/main-right.svg"
        alt=""
      />
      <div className="flex flex-col items-center max-w-[1168px] w-full sm:space-y-5 sm:h-full z-10">
        <div className="flex flex-col text-center items-center">
          <div className="flex items-center text-5xl sm:text-4xl sm:items-center ">
            <img className="h-[125px] sm:h-[90px]" src="/maxQore/invite/main/maxQoreLogo.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col text-center items-center space-y-[50px] sm:h-full sm:justify-end sm:w-full pt-[40px]">
          <div className="flex flex-col space-y-2.5">
            {config.matrixMaxqore && <span className='text-white'>Maxqore address <span className='font-bold'>{shortenAddress(config.matrixMaxqore)}</span></span>}
            {account && <span className='text-white'>You wallet <span className='font-bold'>{shortenAddress(account)}</span></span>}
          </div>
          {account && maxQoreLvls}
          <button
            onClick={() => mainButtonClick(nextLevel)}
            className="flex items-center justify-center font-semibold uppercase px-11 py-5 sm:min-h-[60px] maxQore_main_button rounded-small font-semibold maxQore_main_button_shadow text-[#FFFFFF] text-2xl w-[90%]"
          >
           {mainButton}
          </button>
          <span className="text-white-700 font-light">
            MaxQore is an advanced program for effective business growth and partner team
            <br className="sm:hidden" />
            development with a 860% reward in BNB coin from a single cycle.
          </span>
        </div>
      </div>
      <ActivateModal handleCloseModal={onClose} openedModal={openedModal} />
    </div>
  );
};
