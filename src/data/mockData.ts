export interface Project {
  id: number
  name: string
  description: string
  progress: number
  status: string
  dueDate: string
  team: string[]
  priority: string
}

export interface Task {
  id: number
  title: string
  project: string
  assignee: string
  status: string
  priority: string
  dueDate: string
}

export interface TeamMember {
  name: string
  role: string
  avatar: string
  status: 'online' | 'away' | 'offline'
}

export const projects: Project[] = [
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

export const tasks: Task[] = [
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

export const teamMembers: TeamMember[] = [
  { name: 'John Doe', role: 'Project Manager', avatar: 'JD', status: 'online' },
  { name: 'Sarah Miller', role: 'Frontend Developer', avatar: 'SM', status: 'online' },
  { name: 'Alex Brown', role: 'Backend Developer', avatar: 'AB', status: 'away' },
  { name: 'Rachel Kim', role: 'UI/UX Designer', avatar: 'RK', status: 'offline' },
  { name: 'Tom Wilson', role: 'DevOps Engineer', avatar: 'TW', status: 'online' },
  { name: 'Lisa Martinez', role: 'QA Engineer', avatar: 'LM', status: 'online' },
]