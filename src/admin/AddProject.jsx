import { useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function AddProject() {
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");

  const submit = async () => {
    await axios.post("http://127.0.0.1:8000/projects", form, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("Added");
  };

  return (
    <AdminLayout>
      <input placeholder="Title" onChange={(e)=>setForm({...form, title:e.target.value})}/>
      <button onClick={submit}>Add</button>
    </AdminLayout>
  );
}