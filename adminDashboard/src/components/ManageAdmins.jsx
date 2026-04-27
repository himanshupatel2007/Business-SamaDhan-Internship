import React, { useState } from "react";

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Himanshu", role: "Super Admin" },
    { id: 2, name: "Rahul", role: "Manager" },
    { id: 3, name: "Amit", role: "Viewer" },
  ]);

  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Viewer");

  // Add Admin
  const handleAdd = () => {
    if (!newName) return;

    const newAdmin = {
      id: Date.now(),
      name: newName,
      role: newRole,
    };

    setAdmins([...admins, newAdmin]);
    setNewName("");
    setNewRole("Viewer");
  };

  // Remove Admin
  const handleRemove = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  // Change Role
  const handleRoleChange = (id, role) => {
    setAdmins(
      admins.map((admin) =>
        admin.id === id ? { ...admin, role } : admin
      )
    );
  };

  return (
    <div className="p-6 text-white">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-4">Manage Admins</h1>

      {/* Add Admin Form */}
      <div className="bg-[#3a3c44] p-4 rounded-xl mb-6 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Enter admin name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="px-3 py-2 rounded bg-[#2b3140] outline-none"
        />

        <select
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="px-3 py-2 rounded bg-[#2b3140] outline-none"
        >
          <option>Super Admin</option>
          <option>Manager</option>
          <option>Viewer</option>
        </select>

        <button
          onClick={handleAdd}
          className="bg-[#44a83e] px-4 py-2 rounded font-semibold hover:opacity-90"
        >
          Add Admin
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#3a3c44] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          {/* Header */}
          <thead className="bg-[#2b3140] text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Access Type</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {admins.map((admin, index) => (
              <tr
                key={admin.id}
                className={`border-b border-white/10 ${
                  index % 2 === 0 ? "bg-[#3a3c44]" : "bg-[#353741]"
                }`}
              >
                <td className="px-4 py-3">{admin.name}</td>

                <td className="px-4 py-3">
                  <select
                    value={admin.role}
                    onChange={(e) =>
                      handleRoleChange(admin.id, e.target.value)
                    }
                    className="bg-[#2b3140] px-2 py-1 rounded"
                  >
                    <option>Super Admin</option>
                    <option>Manager</option>
                    <option>Viewer</option>
                  </select>
                </td>

                <td className="px-4 py-3">
                  <button
                    onClick={() => handleRemove(admin.id)}
                    className="bg-red-500 px-3 py-1 rounded hover:opacity-90"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAdmins;