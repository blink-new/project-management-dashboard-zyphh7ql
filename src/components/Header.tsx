import { Search, Filter, Plus, Bell, Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface HeaderProps {
  activeTab: string
  darkMode: boolean
  toggleDarkMode: () => void
}

export function Header({ activeTab, darkMode, toggleDarkMode }: HeaderProps) {
  return (
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
  )
}