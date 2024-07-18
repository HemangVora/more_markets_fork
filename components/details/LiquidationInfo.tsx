import React from 'react';
import InfoDetailGrey from './InfoDetailGrey';
import InfoDetail from './InfoDetail';
import TotalVolumeToken from '../token/TotalVolumeToken';

const LiquidationInfo = () => {
  return (
    <div className='flex w-full flex-col'>
        <h1 className="text-2xl mt-16 mb-8">Liquidations</h1>
        <div className="flex  w-full">
            <InfoDetailGrey title='Unrealized Bad Dept' className="flex-1 m-2"><span className='text-[#888888] font-[600] ' >$</span><span className='text-white'>9,46K</span> </InfoDetailGrey>
            <InfoDetailGrey title='Realized Bad Dept' className="flex-1 m-2"><span className='text-[#888888] font-[600] ' >$</span><span className='text-white'>194.7k</span> </InfoDetailGrey>
            <InfoDetailGrey title='Outstanding Debt Tokens' className="flex-1 m-2"><div className="flex "> <span className='text-white' >171,554.01</span><div className='text-[18px] flex items-center' ><TotalVolumeToken>1.66M</TotalVolumeToken></div></div></InfoDetailGrey>
            <InfoDetailGrey title='Premium/Discount' className="flex-1 m-2"><span className='text-white' >+4</span><span className='text-[#888888] font-[600] '>%</span><span className='text-secondary text-[14px] ml-4'>1,04$</span></InfoDetailGrey>
        </div>
    </div>
    
  );
};

export default LiquidationInfo;