import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
