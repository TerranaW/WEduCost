import React, { useContext } from "react";
import { DanaContext } from "../Context/DanaProvider";

function CariDana() {
    const { items1, items2 } = useContext(DanaContext);

    return (
        <>
            <div className="flex flex-col items-center py-4">
                {/* Top Row */}
                <div className="flex flex-col items-center mb-4">
                    <h3 className="text-2xl font-bold mb-2">Part - Time Job</h3>
                    <h4 className="text-sm font-thin text-center text-gray-800 mb-4">
                        Kerja sambil kuliah? Kenapa enggak! Temukan peluang kerja paruh waktu yang fleksibel dan pas banget sama jadwal kuliahmu.
                    </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 w-full max-w-6xl">
                    {items1.map(item => (
                        <div key={item.id} className="bg-white h-64 shadow-md border mb-2 rounded-lg overflow-hidden">
                            <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
                            <div className="p-2 text-center font-semibold text-sm">{item.title}</div>
                            <div className="text-gray-500 text-center font-light text-xs">{item.desc}</div>
                            <div className="text-end text-xs font-medium flex justify-end items-end pt-2 pr-2 hover:text-orange-500 hover:font-bold cursor-pointer">DETAIL</div>
                        </div>
                    ))}
                </div>

                {/* Button Top Row */}
                <button className="bg-white border-orange-400 border-2 text-orange-400 hover:bg-black py-1 px-3 text-sm rounded mb-4">
                    Selengkapnya →
                </button>

                <br />

                {/* Bottom Row */}
                <div className="flex flex-col items-center mb-4">
                    <h3 className="text-2xl font-bold mb-2">Info Beasiswa</h3>
                    <h4 className="text-sm font-thin text-center text-gray-800 mb-4">
                        Dapatkan beasiswamu disini! Dari beasiswa untuk prestasi akademis hingga yang berbasis kebutuhan, semua informasi penting ada di sini untuk membantu meringankan biaya kuliahmu.
                    </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 w-full max-w-6xl">
                    {items2.map(item => (
                        <div key={item.id} className="bg-white h-72 shadow-md border mb-2 rounded-lg overflow-hidden">
                            <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
                            <div className="p-2 text-center font-semibold text-sm">{item.title}</div>
                            <div className="text-gray-500 text-center font-light text-xs text-wrap">{item.desc}</div>
                            <div className="text-end text-xs font-medium flex justify-end items-end pt-2 pr-2 hover:text-orange-500 hover:font-bold cursor-pointer">DETAIL</div>
                        </div>
                    ))}
                </div>

                {/* Button Bottom Row */}
                <button className="bg-white border-orange-400 border-2 text-orange-400 hover:bg-black py-1 px-3 text-sm rounded mb-4">
                    Selengkapnya →
                </button>
            </div>
        </>
    );
}

export default CariDana;
