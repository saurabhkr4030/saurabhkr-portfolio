export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      
      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-xl p-5">
        <h2 className="text-xl mb-6">Admin</h2>

        <a href="/admin/dashboard">Dashboard</a><br />
        <a href="/admin/projects">Projects</a>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}