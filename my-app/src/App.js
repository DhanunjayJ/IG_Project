import './App.css';
import Login from './componets/Login&sigup/loginpage';
import Signup from './componets/Login&sigup/signuppage';
import Home from './componets/Login&sigup/home';
import ForgotPassword from './componets/Login&sigup/fppage';
import HomePage from './componets/Home/Dashboard';
import InstagramPost from './componets/Home/post';
import Header from './componets/Home/header';
import NotFound from './componets/Home/NotFound';
import Profile from './componets/Home/profile';
import IGMessage from './componets/Home/msgpage';
import Explore from './componets/Home/Explore';
import Message from './componets/Home/notepage';
import PasswordUpdate from './componets/Login&sigup/passup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>

      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element ={<Signup />} />
      <Route path='/Dashboard' element ={<HomePage />} />
      <Route path='/header' element ={<Header />} />
      <Route path='/post' element ={<InstagramPost />} />
      <Route path='/profile' element ={<Profile />} />
      <Route path='/Igmsg' element ={<IGMessage />} />
      <Route path='/passup' element ={<PasswordUpdate />} />
      <Route path='/explore' element ={<Explore />} />
      <Route path='/msg' element ={<Message />} />


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
