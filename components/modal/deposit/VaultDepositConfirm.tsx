"use client";
import React, { useState } from 'react';
import InputTokenMax from '../../input/InputTokenMax';
import TotalVolumeToken from '../../token/TotalVolumeToken';
import MoreButton from '../../moreButton/MoreButton';
import TokenAmount from '@/components/token/TokenAmount';
import IconToken from '@/components/token/IconToken';

interface Props {
  title: string;
  token: string;
  curator: string;
  balance: number;
  apy: number;
  ltv: string;
  totalDeposit: number;
  totalTokenAmount: number;
  amount: number;
  validDeposit: () => void;
  closeModal: () => void;
}

const VaultDepositConfirm: React.FC<Props> = ({ title, token, balance, apy, ltv, totalDeposit, totalTokenAmount, curator, amount, validDeposit, closeModal }) => {

  const [deposit, setDeposit] = useState<number>(0);


  const handleDeposit = () => {    
    validDeposit();
  };

  const handleCancel = () => {
    console.log("CANCEL")
  };



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log('Submitting deposit:', deposit);
      // Simulate an API call
      // const response = await fetch('/api/deposit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ token, deposit }),
      // });
      // const data = await response.json();
      // console.log('Deposit response:', data);
    } catch (error) {
      console.error('Error submitting deposit:', error);
    }
  };

  const balanceString = balance.toString();

  return (
    <div className='more-bg-secondary rounded-[20px] h-full w-full'>
      <form onSubmit={handleSubmit}>
        <div className="mb-10 px-4 pt-8  text-2xl">Review Transaction</div>
        <div className='flex items-center mb-10 px-4 gap-2' >
          <IconToken  className='w-8 h-8' tokenName={token} ></IconToken>
          <div className="text-2xl   flex items-center'"> {token} Vault</div>
        </div>
        <div className="text-l mb-1 px-5 pt-5 ">{title}</div>
        <div className="flex flex-row justify-between items-center px-2">
          <div className="text-l mb-5 px-4"><span className="more-text-gray">Curator:</span><span className=" ml-3">{curator}</span></div>
          <div className="text-l mb-5 px-4"><span className="more-text-gray">Liquidation LTV:</span> {ltv}</div>
        </div>
        <div className='more-bg-primary rounded-[5px] mx-5 px-4 '>
          <TokenAmount title="Deposit" token={token} amount={amount} ltv={ltv} totalTokenAmount={totalTokenAmount} />
        </div>        
        <div className="py-5 px-5">By confirming this transaction, you agree to the <a className='underline' href="#goto">Terms of Use</a> and the services provisions relating to the MORE Protocol Vault.</div>
        <div className="flex justify-end py-5 more-bg-primary rounded-b-[20px] px-4">
          <div className='mr-5'><MoreButton text="Cancel" onClick={closeModal} color="gray" /></div>
          <MoreButton text="Deposit" onClick={() => handleDeposit()} color="primary" />
        </div>              
      </form>
    </div>
  );
};

export default VaultDepositConfirm;
