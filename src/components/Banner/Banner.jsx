import React from 'react';
import vector1 from '../../assets/vector1.png';


// Receiving counts as props from App.jsx to keep them dynamic
const Banner = ({ inProgressCount, resolvedCount }) => {

    return (

            <section className="bg-[#F3F4F6] border-b border-gray-200 sticky">
            <div className=" container mx-auto navbar py-4 px-4 md:px-8 rounded-tr-xs p-6 lg:p-10 flex flex-col md:flex-row gap-6 items-stretch">
                {/* In-Progress Statistic Card */}
                <div className="flex-1 bg-purple-500 from-[#8833a1] to-[#f39eef] rounded-xl p-8 text-center text-white relative overflow-hidden shadow-lg">
                    {/* Background decorative pattern (Vector) */}
                    <div className="absolute inset-y-0 left-0 w-1/2 opacity-80 pointer-events-none">
                         <img src={vector1} alt="" className="w-fit h-fit object-cover " />
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-xl font-medium opacity-90 mb-4">In-Progress</h3>
                        <p className="text-7xl font-bold tracking-tight">{inProgressCount}</p>
                    </div>
                </div>

                {/* Resolved Statistic Card */}
                <div className="flex-1 bg-green-500 from-[#5E7D2F] to-[#435C1D] rounded-xl p-8 text-center text-white relative overflow-hidden shadow-lg">
                     {/* Background decorative pattern (Vector) */}
                    <div className="absolute inset-0 opacity-80 pointer-events-none">
                         <img src={vector1} alt="" className="w-fit h-fit object-cover" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-xl font-medium opacity-90 mb-4">Resolved</h3>
                        <p className="text-7xl font-bold tracking-tight">{resolvedCount}</p>
                    </div>
                </div>

            </div>
        </section>

        
    );
};

export default Banner;