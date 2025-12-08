import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, FileText, User, Settings, Bell, Activity, CreditCard, Download } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const PatientDashboard = () => {
  const { user } = useAuth()

  const appointments = [
    { id: 1, date: '2024-12-15', time: '10:00 AM', doctor: 'Dr. Sarah Johnson', status: 'confirmed' },
    { id: 2, date: '2024-12-20', time: '2:30 PM', doctor: 'Dr. Michael Chen', status: 'pending' },
    { id: 3, date: '2024-12-22', time: '11:00 AM', doctor: 'Dr. Emily Rodriguez', status: 'cancelled' },
  ]

  const medicalRecords = [
    { id: 1, name: 'Blood Test Results', date: '2024-11-15', type: 'Lab Report' },
    { id: 2, name: 'Prescription #1234', date: '2024-11-10', type: 'Prescription' },
    { id: 3, name: 'X-Ray Report', date: '2024-10-28', type: 'Imaging' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
            <p className="text-gray-600">Here's your health overview</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
                  <p className="text-primary-200">Patient ID: #{user?.id?.padStart(6, '0')}</p>
                  <p className="text-primary-200">Member since {user?.joined}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold">{appointments.length}</div>
                  <div className="text-sm text-primary-200">Appointments</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-primary-200">Prescriptions</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold">{medicalRecords.length}</div>
                  <div className="text-sm text-primary-200">Records</div>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Appointments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Upcoming Appointments</h3>
                <a href="/appointment" className="text-primary-600 hover:text-primary-700 font-medium">
                  Book New
                </a>
              </div>
              
              <div className="space-y-4">
                {appointments.map(appointment => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Appointment with {appointment.doctor}</h4>
                        <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      appointment.status === 'confirmed' 
                        ? 'bg-green-100 text-green-700'
                        : appointment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Medical Records */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Medical Records</h3>
              
              <div className="space-y-4">
                {medicalRecords.map(record => (
                  <div key={record.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{record.name}</h4>
                        <p className="text-gray-600">{record.type} • {record.date}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Download className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: 'Book Appointment', color: 'bg-primary-100 text-primary-600' },
                  { icon: FileText, label: 'View Records', color: 'bg-blue-100 text-blue-600' },
                  { icon: Activity, label: 'Health Stats', color: 'bg-green-100 text-green-600' },
                  { icon: CreditCard, label: 'Billing', color: 'bg-purple-100 text-purple-600' },
                ].map((action, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                  >
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-gray-900 text-center">{action.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Health Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card bg-gradient-to-br from-accent-teal to-accent-blue text-white"
            >
              <h3 className="text-xl font-bold mb-4">Health Tip of the Day</h3>
              <p className="mb-4">
                Stay hydrated! Drink at least 8 glasses of water daily to maintain optimal body function.
              </p>
              <button className="text-sm font-medium hover:opacity-90">
                Learn more →
              </button>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                {[
                  { time: '2 hours ago', action: 'Viewed lab results' },
                  { time: '1 day ago', action: 'Booked dental appointment' },
                  { time: '3 days ago', action: 'Updated profile information' },
                  { time: '1 week ago', action: 'Downloaded prescription' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard