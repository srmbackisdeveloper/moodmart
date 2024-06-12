import React from 'react';
import { IconType } from '../../../core/type/icon.type';

export const VisaIcon: React.FC<IconType> = ({
  size = 24,
  color, // Not used as the colors are fixed in the SVG
  className,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_77_13119)">
        <path d="M23 5.05249H1V19.0276H23V5.05249Z" fill="white" />
        <path d="M22.6341 16.7561H1.36719V18.6628H22.6341V16.7561Z" fill="#FCB315" />
        <path d="M22.6341 5.41772H1.36719V7.32439H22.6341V5.41772Z" fill="#0D357F" />
        <path d="M11.8157 9.42631L10.6947 14.6671H9.33884L10.4599 9.42631H11.8157ZM17.5198 12.8103L18.2336 10.8423L18.6441 12.8103H17.5198ZM19.0333 14.6671H20.2869L19.1916 9.42631H18.0352C17.7744 9.42631 17.5548 9.57746 17.4576 9.81049L15.4231 14.6671H16.8471L17.1297 13.8844H18.8689L19.0333 14.6671ZM15.4937 12.9561C15.4997 11.573 13.5818 11.4963 13.5945 10.8784C13.5987 10.6906 13.7777 10.4906 14.1695 10.4394C14.3636 10.4144 14.8993 10.3942 15.5067 10.674L15.7442 9.56218C15.4179 9.44423 14.9981 9.33057 14.4759 9.33057C13.1356 9.33057 12.1926 10.0425 12.1851 11.0629C12.1765 11.8174 12.8587 12.238 13.3716 12.4893C13.9003 12.7462 14.0775 12.911 14.075 13.1404C14.0713 13.492 13.6532 13.6477 13.2641 13.6536C12.582 13.6642 12.1867 13.4692 11.8716 13.3223L11.6255 14.4712C11.9428 14.6165 12.5275 14.7429 13.1328 14.7494C14.5577 14.7494 15.4896 14.0457 15.4937 12.9561ZM9.87835 9.42631L7.6815 14.6671H6.24844L5.16729 10.4845C5.1018 10.2274 5.04466 10.1329 4.84533 10.0242C4.5193 9.84706 3.98102 9.68145 3.50781 9.57837L3.53979 9.42631H5.84694C6.14079 9.42631 6.40519 9.62186 6.47242 9.96032L7.0435 12.9932L8.45395 9.42631H9.87835Z" fill="#0D357F" />
      </g>
      <defs>
        <clipPath id="clip0_77_13119">
          <rect width="22" height="22" fill="white" transform="translate(1 1)" />
        </clipPath>
      </defs>
    </svg>
  );
};