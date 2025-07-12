import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Skill Swap Platform</h1>
        <nav>
          <a href="/" className="mr-4">Home</a>
          <a href="/login" className="mr-4">Login</a>
          <a href="/profile" className="mr-4">Profile</a>
          <a href="/swap-requests">Swap Requests</a>
        </nav>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
