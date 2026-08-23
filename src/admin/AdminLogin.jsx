import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin/dashboard";
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="text-2xl mb-4">Admin Login</h2>

        <input
          placeholder="Email"
          className="block mb-3 p-2 w-full bg-transparent border"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="block mb-3 p-2 w-full bg-transparent border"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} className="bg-blue-500 px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}