"use client";
import React, { useState } from 'react';
import InputTokenMax from '../input/InputTokenMax';
import TotalVolumeToken from '../token/TotalVolumeToken';
import MoreButton from '../moreButton/MoreButton';

interface Props {
  title: string;
  token: string;
  balance: number;
  apy: number;
  ltv: string;
  totalDeposit: number;
  totalTokenAmount: number;
}

const VaultDeposit: React.FC<Props> = ({ title, token, balance, apy, ltv, totalDeposit, totalTokenAmount }) => {
  const [deposit, setDeposit] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(parseFloat(event.target.value));
  };

  const handleSetMax = (maxValue: number) => {
    setDeposit(maxValue);
  };


  const handleDeposit = () => {
    console.log("DEPOSIT")
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
    <div className='more-bg-secondary'>
      <form onSubmit={handleSubmit}>
        <div className="text-xl mb-10 px-4 pt-5">{title}</div>
        <div className="text-l mb-5 px-4">Deposit {token}</div>
        <div className='more-bg-primary px-4'>
          <InputTokenMax type="number" value={deposit} onChange={handleInputChange} min="0" max={balanceString}  placeholder={`Deposit ${token}`}  token={token} balance={balance}  setMax={handleSetMax}/>
        </div>
        <div className="text-right more-text-gray">Balance: {balance} {token}</div>        
        <div className="flex justify-end mt-7">
          <div className='mr-5'><MoreButton text="Cancel" onClick={() => handleCancel()} color="gray" /></div>
          <MoreButton text="Deposit" onClick={() => handleDeposit()} color="primary" />
        </div>
        <div className='more-bg-primary px-4'>
          <div className="flex justify-between mt-10">        
            <div>APY:</div>
            <div>{apy}<span className="more-text-gray">%</span></div>
          </div>
          <div className="flex justify-between mt-10">        
            <div>Total Deposits</div>
            <div>{totalDeposit} <span className="more-text-gray">{token}</span> <TotalVolumeToken>{totalTokenAmount}</TotalVolumeToken></div>
          </div>
          <div className="flex justify-between mt-10">        
            <div>Liquidation LTV</div>
            <div className="text-primary">{ltv}</div>
          </div>  
        </div>              
      </form>
    </div>
  );
};

export default VaultDeposit;