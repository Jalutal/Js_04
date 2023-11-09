import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Contact from './page/Contact';
import Story from './page/Story';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;