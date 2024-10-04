import React, { useContext } from 'react';
import { BiayaKuliahContext } from '../Context/BiayaKuliahProvider';
import { Link } from 'react-router-dom';

const Calculator = () => {
    const {
        universitas,
        setUniversitas,
        jurusan,
        setJurusan,
        kota,
        setKota,
        lamaKuliah,
        setLamaKuliah,
        estimasiBiaya,
        hitungEstimasi,
        biayaPerBulan,
    } = useContext(BiayaKuliahContext);

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Kalkulator Estimasi Biaya Kuliah</h2>
            <form className="space-y-4">
                <label className="block">
                    Universitas:
                    <select value={universitas} onChange={(e) => setUniversitas(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value="">Pilih Universitas</option>
                        <option value="Universitas Indonesia">Universitas Indonesia</option>
                        <option value="Universitas Gadjah Mada">Universitas Gadjah Mada</option>
                        <option value="Universitas Airlangga">Universitas Airlangga</option>
                    </select>
                </label>

                <label className="block">
                    Jurusan:
                    <select value={jurusan} onChange={(e) => setJurusan(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value="">Pilih Jurusan</option>
                        <option value="Kedokteran">Kedokteran</option>
                        <option value="TeknikElektro">Teknik Elektro</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Matematika">Matematika</option>
                        <option value="IlmuHukum">Ilmu Hukum</option>
                    </select>
                </label>

                <label className="block">
                    Biaya Hidup:
                    <select value={kota} onChange={(e) => setKota(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value="">Pilih Kota</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Jogjakarta">Jogjakarta</option>
                        <option value="Surabaya">Surabaya</option>
                    </select>
                </label>

                <label className="block">
                    Rencana Lama Kuliah (Semester):
                    <input
                        type="number"
                        value={lamaKuliah}
                        onChange={(e) => setLamaKuliah(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </label>

                <button
                    type="button"
                    onClick={hitungEstimasi}
                    className="w-full py-2 bg-orange-400 text-white font-semibold rounded-md hover:bg-black hover:text-orange-400"
                >
                    Hitung Estimasi
                </button>
            </form>

            {estimasiBiaya > 0 && (
                <h3 className="mt-4 text-lg font-semibold text-center"> <strong className="text-orange-600">Estimasi Biaya Kuliah</strong>  <br /> Rp {estimasiBiaya.toLocaleString()}</h3>
            )}
            {biayaPerBulan > 0 && (
                <h3 className="mt-4 text-lg font-semibold text-center">
                    <strong className="text-orange-600">Biaya Per Bulan</strong> <br />  Rp {biayaPerBulan.toLocaleString()}
                </h3>
            )}

            {biayaPerBulan > 0 && (
                <div className="mt-4">
                    {hitungEstimasi && (
                        <>
                            <p className='text-center mx-4 mb-5'>Eitss tunggu dulu kamu nggak perlu khawatir , meskipun terkesan mahal kamu masih bisa tetep kuliah loh ! coba deh apply beasiswa.
                                <br /> Eh tapi... beasiswa aja mana cukup? kamu pasti perlu kebutuhan lain maka dari itu kamu bisa cobain juga kerja part-time selain dapet uang saku, kamu juga bisa nambah pengalaman yang keren.
                                <br /> WEduCost udah sediain untuk kamu info terlengkap seputar beasiswa dan keja part time. Bersama WEduCost, kamu bisa merencanakan keuangan dengan lebih baik dan fokus pada impian akademismu tanpa khawatir!

                            </p>
                            <button
                                type="button"
                                onClick={() => console.log("Button clicked!")}
                                className="w-full py-2 bg-orange-400 text-white font-semibold rounded-md hover:bg-black hover:text-orange-400"
                            >
                                <Link to="/dana">Temukan Dana</Link>
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Calculator;
