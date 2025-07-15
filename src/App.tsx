import { useState } from 'react'
import { 
  LayoutDashboard, 
  FolderKanban, 
  CheckSquare, 
  Users, 
  Calendar, 
  BarChart3,
  Search,
  Bell,
  Settings,
  Plus,
  Filter,
  Moon,
  Sun
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Progress } from './components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie
} from 'recharts'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ]

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      progress: 75,
      status: 'In Progress',
      dueDate: '2024-02-15',
      team: ['JD', 'SM', 'AB'],
      priority: 'High'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'iOS and Android app for customer portal',
      progress: 45,
      status: 'In Progress',
      dueDate: '2024-03-20',
      team: ['RK', 'LM', 'TW'],
      priority: 'Medium'
    },
    {
      id: 3,
      name: 'Database Migration',
      description: 'Migrate legacy database to cloud infrastructure',
      progress: 90,
      status: 'Review',
      dueDate: '2024-01-30',
      team: ['DB', 'KL'],
      priority: 'High'
    }
  ]

  const tasks = [
    {
      id: 1,
      title: 'Design homepage mockups',
      project: 'Website Redesign',
      assignee: 'John Doe',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2024-01-25'
    },
    {
      id: 2,
      title: 'Set up CI/CD pipeline',
      project: 'Mobile App Development',
      assignee: 'Sarah Miller',
      status: 'Todo',
      priority: 'Medium',
      dueDate: '2024-01-28'
    },
    {
      id: 3,
      title: 'Database schema review',
      project: 'Database Migration',
      assignee: 'Alex Brown',
      status: 'Done',
      priority: 'High',
      dueDate: '2024-01-20'
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done': return 'bg-green-100 text-green-800 border-green-200'
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Review': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Todo': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center px-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">ProjectHub</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Settings */}
          <div className="p-4 border-t border-border">
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold capitalize">{activeTab}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects, tasks..."
                  className="pl-10 w-80"
                />
              </div>

              {/* Actions */}
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>

              {/* Dark Mode Toggle */}
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* User Avatar */}
              <Avatar>
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                    <FolderKanban className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                    <CheckSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47</div>
                    <p className="text-xs text-muted-foreground">+12 from last week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">+1 new member</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <p className="text-xs text-muted-foreground">+5% from last month</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Your most active projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium">{project.name}</h3>
                            <Badge className={getPriorityColor(project.priority)}>
                              {project.priority}
                            </Badge>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">Progress:</span>
                              <Progress value={project.progress} className="w-24" />
                              <span className="text-sm font-medium">{project.progress}%</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">Team:</span>
                              <div className="flex -space-x-2">
                                {project.team.map((member, index) => (
                                  <Avatar key={index} className="w-6 h-6 border-2 border-background">
                                    <AvatarFallback className="text-xs">{member}</AvatarFallback>
                                  </Avatar>
                                ))}
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Due: {new Date(project.dueDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Tasks</CardTitle>
                  <CardDescription>Latest task updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            <h4 className="font-medium">{task.title}</h4>
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                            <Badge className={getStatusColor(task.status)}>
                              {task.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{task.project}</span>
                            <span>•</span>
                            <span>Assigned to {task.assignee}</span>
                            <span>•</span>
                            <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge className={getPriorityColor(project.priority)}>
                          {project.priority}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Progress</span>
                            <span className="text-sm font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <div className="flex -space-x-2">
                            {project.team.map((member, index) => (
                              <Avatar key={index} className="w-8 h-8 border-2 border-background">
                                <AvatarFallback className="text-xs">{member}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          Due: {new Date(project.dueDate).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-6">
              <Tabs defaultValue="kanban" className="w-full">
                <TabsList>
                  <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
                
                <TabsContent value="kanban" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Todo', 'In Progress', 'Done'].map((status) => (
                      <Card key={status}>
                        <CardHeader>
                          <CardTitle className="text-lg">{status}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {tasks.filter(task => task.status === status).map((task) => (
                              <div key={task.id} className="p-3 bg-accent/50 rounded-lg border">
                                <h4 className="font-medium mb-2">{task.title}</h4>
                                <div className="flex items-center justify-between mb-2">
                                  <Badge className={getPriorityColor(task.priority)}>
                                    {task.priority}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {task.project}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">{task.assignee}</span>
                                  <span className="text-muted-foreground">
                                    {new Date(task.dueDate).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="list">
                  <Card>
                    <CardContent className="p-0">
                      <div className="space-y-0">
                        {tasks.map((task, index) => (
                          <div key={task.id} className={`p-4 flex items-center justify-between ${index !== tasks.length - 1 ? 'border-b border-border' : ''}`}>
                            <div className="flex-1">
                              <h4 className="font-medium mb-1">{task.title}</h4>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span>{task.project}</span>
                                <span>•</span>
                                <span>{task.assignee}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge className={getPriorityColor(task.priority)}>
                                {task.priority}
                              </Badge>
                              <Badge className={getStatusColor(task.status)}>
                                {task.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {new Date(task.dueDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'John Doe', role: 'Project Manager', avatar: 'JD', status: 'online' },
                  { name: 'Sarah Miller', role: 'Frontend Developer', avatar: 'SM', status: 'online' },
                  { name: 'Alex Brown', role: 'Backend Developer', avatar: 'AB', status: 'away' },
                  { name: 'Rachel Kim', role: 'UI/UX Designer', avatar: 'RK', status: 'offline' },
                  { name: 'Tom Wilson', role: 'DevOps Engineer', avatar: 'TW', status: 'online' },
                  { name: 'Lisa Martinez', role: 'QA Engineer', avatar: 'LM', status: 'online' },
                ].map((member) => (
                  <Card key={member.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback>{member.avatar}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                            member.status === 'online' ? 'bg-green-500' :
                            member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                          <p className="text-xs text-muted-foreground capitalize">{member.status}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6">
              {/* Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projects Completed</CardTitle>
                    <CheckSquare className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <p className="text-xs text-muted-foreground">+18% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Completion Time</CardTitle>
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">14.2</div>
                    <p className="text-xs text-muted-foreground">days (-2.1 from last month)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Productivity</CardTitle>
                    <Users className="h-4 w-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">92%</div>
                    <p className="text-xs text-muted-foreground">+7% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Budget Utilization</CardTitle>
                    <BarChart3 className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">78%</div>
                    <p className="text-xs text-muted-foreground">Within budget range</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Project Progress Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Project Progress Overview</CardTitle>
                    <CardDescription>Current status of all active projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { name: 'Website Redesign', progress: 75, target: 80 },
                          { name: 'Mobile App', progress: 45, target: 50 },
                          { name: 'Database Migration', progress: 90, target: 85 },
                          { name: 'API Development', progress: 60, target: 70 },
                          { name: 'Testing Suite', progress: 30, target: 40 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="progress" fill="#6366f1" name="Current Progress" />
                          <Bar dataKey="target" fill="#f59e0b" name="Target" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Task Completion Trend */}
                <Card>
                  <CardHeader>
                    <CardTitle>Task Completion Trend</CardTitle>
                    <CardDescription>Daily task completion over the last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={[
                          { date: '2024-01-01', completed: 12, created: 15 },
                          { date: '2024-01-02', completed: 18, created: 12 },
                          { date: '2024-01-03', completed: 15, created: 20 },
                          { date: '2024-01-04', completed: 22, created: 18 },
                          { date: '2024-01-05', completed: 19, created: 16 },
                          { date: '2024-01-06', completed: 25, created: 22 },
                          { date: '2024-01-07', completed: 28, created: 25 },
                          { date: '2024-01-08', completed: 24, created: 20 },
                          { date: '2024-01-09', completed: 30, created: 28 },
                          { date: '2024-01-10', completed: 26, created: 24 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} name="Completed" />
                          <Line type="monotone" dataKey="created" stroke="#ef4444" strokeWidth={2} name="Created" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Team Performance */}
                <Card>
                  <CardHeader>
                    <CardTitle>Team Performance</CardTitle>
                    <CardDescription>Tasks completed by team members this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { name: 'John Doe', tasks: 28, efficiency: 92 },
                          { name: 'Sarah Miller', tasks: 24, efficiency: 88 },
                          { name: 'Alex Brown', tasks: 32, efficiency: 95 },
                          { name: 'Rachel Kim', tasks: 20, efficiency: 85 },
                          { name: 'Tom Wilson', tasks: 26, efficiency: 90 },
                          { name: 'Lisa Martinez', tasks: 22, efficiency: 87 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Bar yAxisId="left" dataKey="tasks" fill="#6366f1" name="Tasks Completed" />
                          <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#f59e0b" strokeWidth={2} name="Efficiency %" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Status Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Project Status Distribution</CardTitle>
                    <CardDescription>Current distribution of project statuses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: 'Completed', value: 35, fill: '#22c55e' },
                              { name: 'In Progress', value: 45, fill: '#6366f1' },
                              { name: 'On Hold', value: 12, fill: '#f59e0b' },
                              { name: 'Planning', value: 8, fill: '#8b5cf6' }
                            ]}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Budget vs Actual Spending */}
                <Card>
                  <CardHeader>
                    <CardTitle>Budget vs Actual Spending</CardTitle>
                    <CardDescription>Monthly budget allocation and actual spending</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={[
                          { month: 'Jan', budget: 50000, actual: 45000 },
                          { month: 'Feb', budget: 55000, actual: 52000 },
                          { month: 'Mar', budget: 60000, actual: 48000 },
                          { month: 'Apr', budget: 58000, actual: 55000 },
                          { month: 'May', budget: 62000, actual: 59000 },
                          { month: 'Jun', budget: 65000, actual: 61000 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`${value.toLocaleString()}`, '']} />
                          <Legend />
                          <Area type="monotone" dataKey="budget" stackId="1" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} name="Budget" />
                          <Area type="monotone" dataKey="actual" stackId="2" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} name="Actual" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Priority Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Task Priority Distribution</CardTitle>
                    <CardDescription>Current tasks by priority level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { priority: 'High', open: 15, completed: 28 },
                          { priority: 'Medium', open: 22, completed: 35 },
                          { priority: 'Low', open: 8, completed: 18 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="priority" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="open" fill="#ef4444" name="Open Tasks" />
                          <Bar dataKey="completed" fill="#22c55e" name="Completed Tasks" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Metrics Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Performance Metrics</CardTitle>
                  <CardDescription>Comprehensive project and team performance data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-medium">Project</th>
                          <th className="text-left py-3 px-4 font-medium">Team Lead</th>
                          <th className="text-left py-3 px-4 font-medium">Progress</th>
                          <th className="text-left py-3 px-4 font-medium">Budget Used</th>
                          <th className="text-left py-3 px-4 font-medium">Timeline</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { project: 'Website Redesign', lead: 'John Doe', progress: 75, budget: 68, timeline: 'On Track', status: 'In Progress' },
                          { project: 'Mobile App Development', lead: 'Sarah Miller', progress: 45, budget: 52, timeline: 'Delayed', status: 'In Progress' },
                          { project: 'Database Migration', lead: 'Alex Brown', progress: 90, budget: 85, timeline: 'Ahead', status: 'Review' },
                          { project: 'API Development', lead: 'Rachel Kim', progress: 60, budget: 45, timeline: 'On Track', status: 'In Progress' },
                          { project: 'Testing Suite', lead: 'Tom Wilson', progress: 30, budget: 25, timeline: 'On Track', status: 'Planning' }
                        ].map((row, index) => (
                          <tr key={index} className="border-b border-border hover:bg-accent/50">
                            <td className="py-3 px-4 font-medium">{row.project}</td>
                            <td className="py-3 px-4">{row.lead}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Progress value={row.progress} className="w-16" />
                                <span className="text-sm">{row.progress}%</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">{row.budget}%</td>
                            <td className="py-3 px-4">
                              <Badge className={
                                row.timeline === 'Ahead' ? 'bg-green-100 text-green-800 border-green-200' :
                                row.timeline === 'Delayed' ? 'bg-red-100 text-red-800 border-red-200' :
                                'bg-blue-100 text-blue-800 border-blue-200'
                              }>
                                {row.timeline}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Badge className={getStatusColor(row.status)}>
                                {row.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2 capitalize">{activeTab}</h2>
                <p className="text-muted-foreground">This section is coming soon!</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App