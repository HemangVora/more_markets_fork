"use client"

import { InvestmentData } from '@/types';
import React from 'react';
import Icon from '../FontAwesomeIcon';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import TableHeaderCell from './MoreTableHeader';
import ButtonDialog from '../buttonDialog/buttonDialog';
import VaultDeposit from '../modal/VaultDeposit';
import TotalVolumeToken from '../token/TotalVolumeToken';
import IconToken from '../token/IconToken';
import ListIconToken from '../token/ListIconToken';
import { useRouter } from 'next/navigation';
import { DetailEarnData } from '@/types/detailEarnData';
import VaultBorrow from '../modal/VaultBorrow';

interface Props {
  
}

const PositionMoreTable: React.FC<Props> = () => {


    const tableData: DetailEarnData[] = [
        {
          allocation: "16.8",
          supplyAmount: "3,288.62",
          supplyCurrency: "USDC",
          supplyValue: "$1.96M",
          collateral: ["usdc", "btc", "add", "ada"],
          liquidationLTV: "90% / 125%",
          credoraRating: "CCC+ / BBB",
          unsecuredBorrowAmount: "7,890.12",
          unsecuredBorrowValue: "$4.98M",
          unsecuredAPY: "16.8"
        },
      ];

     
      return (
<div className="overflow-x-auto relative rounded-[15px] mb-16"  style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <h1 className="text-2xl mt-16 mb-8">Open a position</h1>
        <table className="w-full text-sm text-left  text-gray-400 border border-gray-800 " >
                <thead className="bg-[#212121] h-20 text-gray-400 text-xs text-white"     style={{ boxShadow: 'inset 0 2px 10px 2px rgba(0, 0, 0, 0.2)' }}>
                <tr className="rounded-t-lg">
                    <th style={{ width: '200px' }} className="rounded-tl-lg"><TableHeaderCell title="Collateral" /></th>
                    <th style={{ width: '200px' }}><div className='flex justify-center'><TableHeaderCell title="Loan" /></div></th>
                    <th style={{ width: '200px' }}> <div className='flex justify-center'><TableHeaderCell title="Liquidation LTV" /> </div></th>
                    <th style={{ width: '200px' }}> <div className='flex justify-center'><TableHeaderCell title="1D Interest" /> </div></th>
                    <th style={{ width: '200px' }}><div className='flex justify-center'><TableHeaderCell title="Vault Listing" /></div></th>
                    <th style={{ width: '100px' }} ></th>
                </tr>
                </thead>
                <tbody className="bg-transparent ">
                {tableData.map((item, index, arr) => (
                    <tr key={index} 
                        style={index === arr.length - 1 ? { borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' } : undefined} 
                        className={`last:border-b-0 text-[12px]  cursor-pointer ${index % 2 === 0 ? 'bg-transparent' : 'dark:bg-[#191919]'}`}>
                       
                       <td className="py-4  items-center h-full ">
                          <div className='flex gap-1 justify-center items-center gap-2' >
                            <div className='mr-2 w-8 h-8'><IconToken tokenName='usdt' ></IconToken></div>
                            <div className='text-[white] ' >{item.supplyAmount}</div> 
                            <div>{item.supplyCurrency}</div> 
                            <TotalVolumeToken>{item.supplyValue}</TotalVolumeToken>
                          </div>
                        </td>  

                        <td className="py-4  items-center h-full ">
                          <div className='flex gap-1 justify-center items-center gap-2' >
                            <div className='mr-2 w-8 h-8'><IconToken tokenName='usdt' ></IconToken></div>
                            <div className='text-[white] ' >{item.supplyAmount}</div> 
                            <div>{item.supplyCurrency}</div> 
                            <TotalVolumeToken>{item.supplyValue}</TotalVolumeToken>
                          </div>
                        </td>                        
                        
                        <td className="py-4 px-6 items-center flex  "><div className=' flex justify-center w-full py-4 ' >{item.liquidationLTV}</div></td>
                        

                        <td className="py-4 px-6  items-center justify-end h-full ">
                            <div className='flex gap-1 justify-center' ><div className='text-[white] ' >{item.unsecuredAPY}</div> % </div>
                        </td>
                        
                        <td className="py-4 px-6  items-center  h-full flex justify-center">
                            <div className='mr-2 w-8 h-8 py-2'><IconToken tokenName='usdt' ></IconToken></div>
                        </td>
                        


                        <td className="py-4 px-6  items-center justify-end h-full">
                            <div onClick={(event) => event.stopPropagation()}>
                            <ButtonDialog color='secondary' buttonText='Borrow' > 
                                    {(closeModal) => (
                                        <>
                                        <div className=" w-full h-full">
                                        <VaultBorrow title='USDMax' token={item.supplyCurrency} apy={14.1} balanceToken={473.18} balanceFlow={785.45} ltv="90% / 125%" totalDeposit={3289.62} totalTokenAmount={1.96} curator='Flowverse' credora='AAA' closeModal={closeModal} ></VaultBorrow>
                                        </div>
                                        </>
                                        )}                            
                                </ButtonDialog>
                            </div>
                          </td>
                          
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      );
    };
export default PositionMoreTable;