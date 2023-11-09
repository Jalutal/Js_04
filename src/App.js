import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Story from './Story';

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