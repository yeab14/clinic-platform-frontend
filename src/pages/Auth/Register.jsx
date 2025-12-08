import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserPlus, Mail, Lock, User, Phone, Calendar, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // If already authenticated, redirect to home
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await register(formData)
      setSuccess('Registration successful! Redirecting to dashboard...')
      
      setTimeout(() => navigate('/', { replace: true }), 1500)
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-primary-800">ClinicCare+</h1>
              <p className="text-xs text-gray-500">Create Patient Account</p>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <UserPlus className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Create Your Health Profile</h2>
            <p className="text-primary-100 mb-8">
              Join thousands of patients managing their healthcare through our secure platform.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📅', text: 'Book appointments 24/7' },
                { icon: '📱', text: 'Access medical records' },
                { icon: '💊', text: 'Manage prescriptions' },
                { icon: '👨‍⚕️', text: 'Connect with doctors' },
                { icon: '🔒', text: 'Secure & encrypted data' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-xl mr-3">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm">
                <span className="font-bold">Already have an account?</span>{' '}
                <Link to="/login" className="underline hover:text-primary-200">
                  Sign in here
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Right Side - Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
              >
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-green-700">{success}</span>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
              >
                <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                <span className="text-red-700">{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Lock className="w-4 h-4 inline mr-1" />
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-field pr-12"
                    placeholder="At least 6 characters"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Lock className="w-4 h-4 inline mr-1" />
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="input-field pr-12"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-primary-600 hover:text-primary-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-primary-600 hover:text-primary-700">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center space-x-2 mt-4"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By creating an account, you agree to our demo authentication system.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Register