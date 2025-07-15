import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { tasks } from '../../data/mockData'
import { getPriorityColor, getStatusColor } from '../../utils/helpers'

export function TasksPage() {
  return (
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
  )
}