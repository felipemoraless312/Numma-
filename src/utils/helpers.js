// Utilidades generales
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  }).format(amount)
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^w ]+/g, '')
    .replace(/ +/g, '-')
}

export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export const validateEmail = (email) => {
  const re = /^[^s@]+@[^s@]+.[^s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^[+]?[1-9][d]{0,15}$/
  return re.test(phone.replace(/s/g, ''))
}

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export const getRandomColor = () => {
  const colors = [
    'bg-blue-500', 'bg-purple-500', 'bg-green-500', 
    'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200
  const words = text.split(' ').length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min de lectura`
}

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err)
    return false
  }
}

export const downloadFile = (data, filename, type = 'text/plain') => {
  const file = new Blob([data], { type })
  const a = document.createElement('a')
  const url = URL.createObjectURL(file)
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}