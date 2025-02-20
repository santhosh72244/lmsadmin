import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from './Components/Adminpanel/AdminLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;