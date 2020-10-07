import React from 'react'

export const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}
