import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
export default function App() { 
return ( 
<BrowserRouter> 
<Routes> 
<Route path="/" element={<Home />}></Route> 
<Route path="/about" element={<About />}></Route> 
</Routes> 
</BrowserRouter> 
); 
} 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />); 