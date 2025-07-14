import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'p-6',
  background = 'bg-white',
  shadow = 'shadow-lg',
  rounded = 'rounded-2xl',
  border = '',
  ...props 
}) => {
  const hoverEffect = hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' : ''
  
  return (
    <div 
      className={`${background} ${shadow} ${rounded} ${padding} ${border} ${hoverEffect} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card