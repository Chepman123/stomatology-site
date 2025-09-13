import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import Services from './components/Main/Services/Services';

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     </Routes>
    </BrowserRouter>
  );

}

