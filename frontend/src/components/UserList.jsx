import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';
import './UserList.css';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsers();
      setUsers(response.data.data || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user._id !== id));
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

  if (loading) {
    return (
      <div className="list-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <p style={{ textAlign: 'center', color: '#999' }}>Loading users...</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Users List</h2>
        <button onClick={fetchUsers} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>

      {error && (
        <div className="alert alert-error">
          ❌ {error}
        </div>
      )}

      {users.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>📭</p>
          <p>No users found. Create one to get started!</p>
        </div>
      ) : (
        <>
          <div className="users-grid">
            {users.map((user) => (
              <div key={user._id} className="user-card">
                <div className="user-name">{user.name}</div>
                
                <div
                  className={`user-status ${
                    user.isActive ? 'status-active' : 'status-inactive'
                  }`}
                >
                  {user.isActive ? '✓ Active' : '✕ Inactive'}
                </div>

                <div className="user-field">
                  <span className="user-field-label">📧 Email:</span>
                  <span className="user-field-value">{user.email}</span>
                </div>

                {user.phone && (
                  <div className="user-field">
                    <span className="user-field-label">📞 Phone:</span>
                    <span className="user-field-value">{user.phone}</span>
                  </div>
                )}

                {user.bio && (
                  <div className="user-field">
                    <span className="user-field-label">📝 Bio:</span>
                    <div className="user-field-value">{user.bio}</div>
                  </div>
                )}

                <div className="user-field" style={{ fontSize: '0.85rem', color: '#999', marginTop: '1rem' }}>
                  Created: {new Date(user.createdAt).toLocaleDateString()}
                </div>

                <button
                  onClick={() => handleDelete(user._id)}
                  className="delete-btn"
                >
                  🗑️ Delete User
                </button>
              </div>
            ))}
          </div>

          <div className="user-count">
            👥 Total Users: {users.length}
          </div>
        </>
      )}
    </div>
  );
}
