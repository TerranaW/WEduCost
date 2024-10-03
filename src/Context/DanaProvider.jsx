import { createContext, useState, useEffect } from "react"
export const DanaContext = createContext()

function DanaProvider({ children }) {
    const [items1, setItems1] = useState([]);
    const [items2, setItems2] = useState([])

    useEffect(() => {
        getItem1();
        getItem2();
    }, []);

    async function getItem1() {
        try {
            let URL = "https://66f9088f2a683ce97310b3fe.mockapi.io/api/data/Loker";
            const response = await fetch(URL);
            const data1 = await response.json();

            setItems1(data1);
        } catch (e) {
            console.log(e);
        }
    }

    async function getItem2() {
        try {
            let URL = "https://66f9088f2a683ce97310b3fe.mockapi.io/api/data/Beasiswa";
            const response = await fetch(URL);
            const data2 = await response.json();

            setItems2(data2)
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <DanaContext.Provider value={{ items1, items2, setItems1, setItems2 }}>
            {children}
        </DanaContext.Provider>
    )
}

export default DanaProvider
