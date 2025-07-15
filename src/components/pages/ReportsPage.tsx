import { CheckSquare, Calendar, Users, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
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
import { getStatusColor, getTimelineColor } from '../../utils/helpers'

export function ReportsPage() {
  return (
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
                      <Badge className={getTimelineColor(row.timeline)}>
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
  )
}