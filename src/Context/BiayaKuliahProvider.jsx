import React, { createContext, useState } from 'react';

export const BiayaKuliahContext = createContext();

export const BiayaKuliahProvider = ({ children }) => {
    const [universitas, setUniversitas] = useState('');
    const [jurusan, setJurusan] = useState('');
    const [kota, setKota] = useState('');
    const [lamaKuliah, setLamaKuliah] = useState(1);
    const [estimasiBiaya, setEstimasiBiaya] = useState(0);
    const [biayaPerBulan, setBiayaPerBulan] = useState(0);

    const biayaKuliahData = {
        'Universitas Indonesia': {
            'Kedokteran': 20000000,
            'TeknikElektro': 19908000,
            'Akuntansi': 14650000,
            'Matematika': 13360000,
            'IlmuHukum': 14000000,
        },
        'Universitas Gadjah Mada': {
            'Kedokteran': 24700000,
            'TeknikElektro': 12300000,
            'Akuntansi': 9200000,
            'Matematika': 10000000,
            'IlmuHukum': 9200000,
        },
        'Universitas Airlangga': {
            'Kedokteran': 2500000,
            'TeknikElektro': 12500000,
            'Akuntansi': 1000000,
            'Matematika': 10000000,
            'IlmuHukum': 1000000,
        }
    };

    const biayaHidupData = {
        'Jakarta': 21000000,
        'Jogjakarta': 12000000,
        'Surabaya': 12000000,
    };

    const hitungEstimasi = () => {
        if (universitas && jurusan && kota) {
            const biayaKuliah = biayaKuliahData[universitas][jurusan];
            const biayaHidup = biayaHidupData[kota];
            const totalBiaya = ((biayaKuliah + biayaHidup) * lamaKuliah);
            setEstimasiBiaya(totalBiaya);
            setBiayaPerBulan(totalBiaya / lamaKuliah / 6);
        }
    };

    return (
        <BiayaKuliahContext.Provider value={{
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
            setBiayaPerBulan,
        }}>
            {children}
        </BiayaKuliahContext.Provider>
    );
};
