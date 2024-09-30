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
    } = useContext(BiayaKuliahContext);

    return (
        <div>
            <h2>Kalkulator Estimasi Biaya Kuliah</h2>
            <form>
                <label>
                    Universitas:
                    <select value={universitas} onChange={(e) => setUniversitas(e.target.value)}>
                        <option value="">Pilih Universitas</option>
                        <option value="Universitas Indonesia">Universitas Indonesia</option>
                        <option value="Universitas Gadjah Mada">Universitas Gadjah Mada</option>
                        <option value="Universitas Airlangga">Universitas Airlangga</option>
                    </select>
                </label>

                <label>
                    Jurusan:
                    <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
                        <option value="">Pilih Jurusan</option>
                        <option value="Kedokteran">Kedokteran</option>
                        <option value="Teknik Elektro">Teknik Elektro</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Ilmu Hukum">Ilmu Hukum</option>
                    </select>
                </label>

                <label>
                    Biaya Hidup :
                    <select value={kota} onChange={(e) => setKota(e.target.value)}>
                        <option value="">Pilih Kota</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Jogjakarta">Jogjakarta</option>
                        <option value="Surabaya">Surabaya</option>
                    </select>
                </label>

                <label>
                    Rencana Lama Kuliah (Semester):
                    <input
                        type="number"
                        value={lamaKuliah}
                        onChange={(e) => setLamaKuliah(e.target.value)}
                        min="0"
                    />
                </label>

                <button type="button" onClick={hitungEstimasi}>Hitung Estimasi</button>
            </form>

            {estimasiBiaya > 0 && (
                <h3>Estimasi Biaya Kuliah: Rp {estimasiBiaya}</h3>
            )}
        </div>
    );
};

export default Calculator;
