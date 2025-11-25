import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const title = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await api.post(
                route,
                { username, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.log("Registration/Login Error:", error.response?.data || error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white shadow-md rounded-lg p-8 border border-gray-200"
            >
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    {title}
                </h1>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    autoComplete="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-gray-700 focus:outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-gray-700 focus:outline-none"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-800 text-white py-2 rounded-lg text-lg font-semibold
                     hover:bg-gray-700 transition duration-300 disabled:opacity-50"
                >
                    {loading ? "Processing..." : title}
                </button>
            </form>
        </div>
    );
}

export default Form;
