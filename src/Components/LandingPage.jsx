import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { DanaContext } from "../Context/DanaProvider";
import LogoText from "../assets/logo-text.png";

function LandingPage() {
    const { items1, items2 } = useContext(DanaContext);

    return (
        <>
            <div className="flex flex-col items-center bg-white min-h-screen px-4">
                <img className="w-32 sm:w-64" src={LogoText} />
                {/* Header */}
                <div className="flex justify-center shadow-md rounded-lg p-4 mb-6 w-full max-w-2xl">
                    <img src="https://npr.brightspotcdn.com/dims4/default/cd06fe5/2147483647/strip/true/crop/1392x926+0+0/resize/1760x1170!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F15%2F70%2Fbafd99fa4cb6a51248cde7070bf7%2Fgraduate.jpeg" alt="header" className="w-full rounded-lg" />
                </div>

                {/* Description */}
                <div className="flex flex-col justify-center items-center mb-6">
                    <div className="p-4 w-full max-w-2xl font-serif text-black text-center font-extrabold text-2xl">
                        Women Education Cost
                    </div>
                    <p className="text-center font-thin text-wrap w-full max-w-2xl mb-6">
                        WEduCost akan membantu kamu memahami dan mengelola biaya kuliah dengan cara yang mudah dan menyenangkan.
                        Dengan <strong>Kalkulator Estimasi Biaya Kuliah</strong>, kamu bisa menghitung perkiraan total biaya kuliah, termasuk UKT, biaya hidup, dan pengeluaran lainnya.
                    </p>

                    <button className="bg-white border border-orange-400 text-orange-400 hover:bg-black py-2 px-4 text-sm rounded mb-4">
                        <Link to="/calc" className="text-black hover:text-orange-400">Hitung Sekarang</Link>
                    </button>
                </div>

                {/* Card Desc */}
                <div className="flex flex-col justify-center items-center mb-6">
                    <div className="p-4 w-full max-w-2xl font-serif text-black text-center font-extrabold text-2xl">
                        Butuh Dana Kuliah?
                    </div>
                    <p className="text-center font-thin text-wrap w-full max-w-3xl mb-4">
                        Kami juga menyediakan informasi lengkap tentang beasiswa dan kesempatan kerja paruh waktu yang bisa membantu kamu memenuhi kebutuhan finansial selama masa studi.
                    </p>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-full max-w-6xl">
                    {items1.slice(0, 2).map(item => (
                        <div key={item.id} className="bg-white w-full h-72 shadow-md border mb-2 rounded-lg overflow-hidden flex flex-col">
                            <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
                            <div className="p-2 text-center font-semibold text-sm">{item.title}</div>
                            <div className="text-gray-500 text-center font-light text-xs">{item.desc}</div>
                            <div className="mt-auto text-end text-xs font-medium flex justify-end items-end pt-2 pr-2 hover:text-orange-500 hover:font-bold cursor-pointer mx-2 my-2">
                                DETAIL
                            </div>
                        </div>
                    ))}

                    {items2.slice(0, 2).map(item => (
                        <div key={item.id} className="bg-white w-full h-72 shadow-md border mb-2 rounded-lg overflow-hidden">
                            <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
                            <div className="p-2 text-center font-semibold text-sm">{item.title}</div>
                            <div className="text-gray-500 text-center font-light text-xs">{item.desc}</div>
                            <div className=" text-end text-xs font-medium flex justify-end items-end pt-5 pr-2 hover:text-orange-500 hover:font-bold cursor-pointer mb-2">
                                DETAIL
                            </div>
                        </div>
                    ))}
                </div>

                {/* Card Button */}
                <button className="bg-white border border-orange-400 text-orange-400 hover:bg-black py-2 px-4 text-sm rounded mb-4">
                    <Link to="/dana">Selengkapnya →</Link>
                </button>
            </div >
        </>
    );
}

export default LandingPage;
