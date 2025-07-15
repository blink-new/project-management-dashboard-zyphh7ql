import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { teamMembers } from '../../data/mockData'

export function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
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
  )
}