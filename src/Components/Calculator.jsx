import React, { useContext } from 'react';
import { BiayaKuliahContext } from '../Context/BiayaKuliahProvider';

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
                    <select value={universitas} onChange={(e) => setUniversitas(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Pilih Universitas</option>
                        <option value="Universitas Indonesia">Universitas Indonesia</option>
                        <option value="Universitas Gadjah Mada">Universitas Gadjah Mada</option>
                        <option value="Universitas Airlangga">Universitas Airlangga</option>
                    </select>
                </label>

                <label className="block">
                    Jurusan:
                    <select value={jurusan} onChange={(e) => setJurusan(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
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
                    <select value={kota} onChange={(e) => setKota(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
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
                    className="w-full py-2 bg-orange-400 text-white rounded-md hover:bg-white hover:text-orange-400"
                >
                    Hitung Estimasi
                </button>
            </form>

            {estimasiBiaya > 0 && (
                <h3 className="mt-4 text-lg font-semibold">Estimasi Biaya Kuliah: Rp {estimasiBiaya.toLocaleString()}</h3>
            )}
            {biayaPerBulan > 0 && (
                <h3 className="mt-4 text-lg font-semibold">
                    Biaya Per Bulan: Rp {biayaPerBulan.toLocaleString()}
                </h3>
            )}
        </div>
    );
};

export default Calculator;
