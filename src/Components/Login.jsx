import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoLogin from "../assets/weducost-pot.png";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        try {
            let URL = "https://66ff5de12b9aac9c997f0fd6.mockapi.io/data/Login";
            const response = await fetch(URL);
            const data = await response.json();

            setUsers(data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleInput = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const login = (event) => {
        event.preventDefault();
        const { email, password } = user;

        const userFound = users.find((u) => u.email === email && u.password === password);

        if (userFound) {
            console.log("Login berhasil!");
            navigate('/home', { replace: true });
        } else {
            setError("Username atau password salah.");
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
                <img className="h-full" src="https://i0.wp.com/arbiteronline.com/wp-content/uploads/2022/12/graduation-Albert-Vincent-Wu-min-scaled.jpg?fit=2560%2C2049&ssl=1" />
            </div>
            <div className="w-1/2 bg-white px-16">
                <img className="w-1/2 flex justify-center ml-24" src={LogoLogin} />
                <form onSubmit={login}>
                    <div className="mb-4 sm:mb-2">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="masukkan email anda"
                            value={user.email}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="masukkan"
                            value={user.password}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 mb-4">{error}</div>
                    )}
                    <button
                        className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-black hover:text-orange-600"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;