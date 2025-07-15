import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Progress } from '../ui/progress'
import { projects } from '../../data/mockData'
import { getPriorityColor, getStatusColor } from '../../utils/helpers'

export function ProjectsPage() {
  return (
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
  )
}