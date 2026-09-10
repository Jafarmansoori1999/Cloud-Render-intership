import UserForm from './components/UserForm'
import UserList from './components/UserList'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 Full-Stack User Management App</h1>
        <p>Frontend: React + Vite | Backend: Node.js + Express | Database: MongoDB</p>
      </header>
      
      <main className="app-main">
        <div className="form-section">
          <h2>➕ Create New User</h2>
          <UserForm />
        </div>
        
        <div className="list-section">
          <h2>👥 User List</h2>
          <UserList />
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Built with ❤️ | Cloud Render Internship</p>
      </footer>
    </div>
  )
}

export default App
