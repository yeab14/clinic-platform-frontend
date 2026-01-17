import './index.css';

import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import {
  AuthProvider,
  useAuth,
} from './context/AuthContext';
import About from './pages/AboutUs/AboutUs';
import AppointmentPage from './pages/Appointment/AppointmentPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import BlogPage from './pages/Blogs/Blog';
import BlogDetailPage from './pages/Blogs/BlogDetailPage';
import ContactPage from './pages/Contact/ContactPage';
import PatientDashboard from './pages/Dashboard/PatientDashboard';
import DoctorsPage from './pages/Doctors/DoctorsPage';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import Privacy from './pages/Privacy/privacy';
import Terms from './pages/Terms/terms';

const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}


const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }
  
  return user ? children : <Navigate to="/login" />
}

const AppContent = () => {
  const { user } = useAuth()
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-4">
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/doctors" element={<DoctorsPage />} />
  <Route path="/blog" element={<BlogPage />} />
  <Route path="/blog/:slug" element={<BlogDetailPage />} />
  <Route path="/appointment" element={<AppointmentPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
  <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/terms" element={<Terms />} />
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <PatientDashboard />
      </ProtectedRoute>
    } 
  />
</Routes>

      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App
