import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);

  const token = localStorage.getItem("token");

  const fetchProjects = async () => {
    const res = await axios.get("http://127.0.0.1:8000/projects");
    setProjects(res.data);
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/projects/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-2xl mb-4">Projects</h2>

      {projects.map((p) => (
        <div key={p.id} className="p-4 bg-white/10 mb-3 rounded">
          <h3>{p.title}</h3>

          <button onClick={() => deleteProject(p.id)}>Delete</button>
        </div>
      ))}
    </AdminLayout>
  );
}