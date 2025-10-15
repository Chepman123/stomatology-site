import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Main/Home/Home';
import Services from './components/Main/Services/Services';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToTop/ScrollToHashElement";
import BookPage from './components/Main/Book/BookPage';
import Registration from './components/Main/RegLog/Registration';
import Login from './components/Main/RegLog/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header/>
    <ScrollToHashElement />
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/book' element={<BookPage/>}/> 
     <Route path='/registration' element={<Registration/>}/>
     <Route path='/login' element={<Login/>}/> 
     </Routes>
     <Footer/>
    </BrowserRouter>
  );

}

