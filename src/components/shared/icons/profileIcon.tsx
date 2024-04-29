import React from 'react'
import { IconType } from '../../../core/type/icon.type'

export const ProfileIcon: React.FC<IconType> = ({
  size = 32,
  color,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M16.4115 14C18.7217 14 20.5945 12.2091 20.5945 9.99986C20.5945 7.79066 18.7217 5.99976 16.4115 5.99976C14.1013 5.99976 12.2285 7.79066 12.2285 9.99986C12.2285 12.2091 14.1013 14 16.4115 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M25.8236 25.9998C25.8236 21.0291 21.6097 16.9995 16.4118 16.9995C11.2138 16.9995 7 21.0291 7 25.9998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
