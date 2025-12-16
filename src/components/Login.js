import React, { useState } from 'react';
import '../css/loginAndsigin.css'
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${API_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                }
            );

            const json = await response.json();
            console.log(json, "json");

            if (json.success) {
                localStorage.setItem("token", json.token);
                navigate("/");
            } else {
                alert(json.error || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Server error. Please try again later.");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4 fw-bold">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-3 position-relative">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={onChange}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn  w-100 fw-bold" id="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
