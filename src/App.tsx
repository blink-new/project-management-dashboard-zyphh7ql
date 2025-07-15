import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { DashboardPage } from './components/pages/DashboardPage'
import { ProjectsPage } from './components/pages/ProjectsPage'
import { TasksPage } from './components/pages/TasksPage'
import { TeamPage } from './components/pages/TeamPage'
import { ReportsPage } from './components/pages/ReportsPage'
import { CalendarPage } from './components/pages/CalendarPage'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />
      case 'projects':
        return <ProjectsPage />
      case 'tasks':
        return <TasksPage />
      case 'team':
        return <TeamPage />
      case 'reports':
        return <ReportsPage />
      case 'calendar':
        return <CalendarPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="pl-64">
        <Header 
          activeTab={activeTab} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        
        <main className="p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App