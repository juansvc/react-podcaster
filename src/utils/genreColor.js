export const getGenreColor = (genre) => {
  switch (genre) {
    case 'Design':
      return 'bg-pink-500'
    case 'Business':
      return 'bg-indigo-500'
    case 'History':
      return 'bg-green-500'
    case 'Society & Culture':
      return 'bg-red-500'
    case 'Entrepreneurship':
      return 'bg-blue-500'
    default:
      return 'bg-gray-500'
  }
}

export const getGenreGradientColor = (genre) => {
  switch (genre) {
    case 'Design':
      return 'from-pink-900'
    case 'Business':
      return 'from-indigo-900'
    case 'History':
      return 'from-green-900'
    case 'Society & Culture':
      return 'from-red-900'
    case 'Entrepreneurship':
      return 'from-blue-900'
    default:
      return 'from-blue-500'
  }
}