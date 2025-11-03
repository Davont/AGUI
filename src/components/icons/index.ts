import React from 'react';
import Play from './Play';
// Import other icons here if you add them
// import AnotherIcon from './AnotherIcon';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const iconMap: { [key: string]: React.FC<IconProps> } = {
  play: Play,
  // anotherIcon: AnotherIcon,
};

export type IconName = keyof typeof iconMap;
