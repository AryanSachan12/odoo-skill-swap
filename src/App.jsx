import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
