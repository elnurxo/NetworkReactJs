import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddSupplier from './pages/AddSupplier';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Box sx={{ pt: "58px" }}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addsupplier" element={<AddSupplier />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
