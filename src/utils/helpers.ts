export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-red-100 text-red-800 border-red-200'
    case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Low': return 'bg-green-100 text-green-800 border-green-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'Done': return 'bg-green-100 text-green-800 border-green-200'
    case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'Review': return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'Todo': return 'bg-gray-100 text-gray-800 border-gray-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export const getTimelineColor = (timeline: string) => {
  switch (timeline) {
    case 'Ahead': return 'bg-green-100 text-green-800 border-green-200'
    case 'Delayed': return 'bg-red-100 text-red-800 border-red-200'
    default: return 'bg-blue-100 text-blue-800 border-blue-200'
  }
}