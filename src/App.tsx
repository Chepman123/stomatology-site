import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Main/Home/Home';
import Services from './components/Main/Services/Services';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToTop/ScrollToHashElement";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <ScrollToHashElement />
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     </Routes>
    </BrowserRouter>
  );

}

