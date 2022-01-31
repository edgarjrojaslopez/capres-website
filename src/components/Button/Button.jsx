import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
import { cls } from '../../helpers/cls'

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
      small: 'px-2 py-1 text-sm',
      normal: 'px-4 py-2',
      large: 'px-8 py-3 text-lg'
  },
  variant: {
      primary: 'bg-azulCapres-500 hover:bg-azulCapres-800 focus:ring-2 focus:ring-azulCapres-500 focus:ring-opacity-50 text-white',
      secondary: 'bg-grisCapres-200 hover:bg-grisCapres-800 focus:ring-2 focus:ring-grisCapresy-500 focus:ring-opacity-50 text-grisCapres-900 hover:text-white',
      danger: 'bg-rojoCapres-500 hover:bg-rojoCapres-800 focus:ring-2 focus:ring-rojoCapres-500 focus:ring-opacity-50 text-white',
      outlined: 'border border-grisCapres-200 border-2 hover:border-azulCapres-500 hover:bg-azulCapres-500 focus:border-4 focus:ring-grisCapres-100 focus:ring-opacity-50 text-grisCapres-200 hover:text-white',
  }
}

const Button = forwardRef(
  (
      {
          children,
          type = 'button',
          className,
          variant = 'primary',
          size = 'normal',
          pill,
          disabled = false,
          ...props
      }, ref
  ) => (
      <button
          ref={ref}
          disabled={disabled}
          type={type}
          className={cls(`
              ${classes.base}
              ${classes.size[size]}
              ${classes.variant[variant]}
              ${pill && classes.pill}
              ${disabled && classes.disabled}
              ${className}
          `)}
          {...props}
      >
          {children}
      </button>
  ));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.oneOf(['submit', 'button']),
  className: PropTypes.string,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outlined']),
  size: PropTypes.oneOf(['small', 'normal', 'large'])
}

export default Button