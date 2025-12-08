import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check localStorage for saved user on mount
    const savedUser = localStorage.getItem('clinic_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // Mock login - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = {
          id: '1',
          email,
          name: 'John Doe',
          role: 'patient',
          token: 'mock-jwt-token',
          appointments: 3,
          joined: '2024-01-15'
        }
        setUser(mockUser)
        localStorage.setItem('clinic_user', JSON.stringify(mockUser))
        resolve(mockUser)
      }, 1000)
    })
  }

  const register = (userData) => {
    // Mock registration - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = {
          id: '2',
          email: userData.email,
          name: userData.name,
          role: 'patient',
          token: 'mock-jwt-token',
          appointments: 0,
          joined: new Date().toISOString().split('T')[0]
        }
        setUser(mockUser)
        localStorage.setItem('clinic_user', JSON.stringify(mockUser))
        resolve(mockUser)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('clinic_user')
  }

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('clinic_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}