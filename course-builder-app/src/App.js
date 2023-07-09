import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Layout/header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/Layout/footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Contact from './components/contact/Contact';
import RequestCourse from './components/requestCourse/RequestCourse';
import About from './components/about/About';
import Subscribe from './components/payments/Subscribe';
import PaymentSuccess from './components/payments/PaymentSuccess';
import PaymentFail from './components/payments/PaymentFail';
import NotFound from './components/Layout/notfound/NotFound';
import CourseDetail from './components/coursedetail/CourseDetail';
import Profile from './components/profile/Profile';
import ChangePassword from './components/profile/ChangePassword';
import UpdateProfile from './components/profile/UpdateProfile';
import Dashboard from './components/admin/dashboard/Dashboard';
import CreateCourse from './components/admin/createcourse/CreateCourse';
import AdminCourses from './components/admin/admincourses/AdminCourses';
import Users from './components/admin/users/Users';
import { useSelector } from 'react-redux';

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user } = useSelector(state => state.user);
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<RequestCourse />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="*" element={<NotFound />} />
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
