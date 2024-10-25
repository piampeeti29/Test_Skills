import React, { useState } from 'react';

const mockUsers = [
  { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
  { name: "Alice Johnson", email: "alice@example.com", phone: "555-555-5555" },
];

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = mockUsers.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">User Table</h5>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
