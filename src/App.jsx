import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <main className="flex-1 min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
