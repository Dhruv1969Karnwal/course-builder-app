import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/home/Home';
import Header from './components/Layout/header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/Layout/footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Contact from './components/contact/Contact'
import RequestCourse from './components/requestCourse/RequestCourse';
import About from './components/about/About';
import Subscribe from './components/payments/Subscribe';
import PaymentSuccess from './components/payments/PaymentSuccess'
import PaymentFail from './components/payments/PaymentFail';
import NotFound from "./components/Layout/notfound/NotFound"
import CourseDetail from './components/coursedetail/CourseDetail';
import Profile from './components/profile/Profile';


function App() {

window.addEventListener("contextmenu",(e) => {
  e.preventDefault()
})


  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/request' element={<RequestCourse />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
