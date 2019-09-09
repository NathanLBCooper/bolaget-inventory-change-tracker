import React from 'react';
import { Image } from 'react-native';

export const MainNavigatorTabIcon: ({ name }: { name: string; }) => JSX.Element = ({ name }) => {
  const width: number = 25;
  const height: number  = 25;

  switch (name) {
    case "bell":
      return <Image source={require("../../images/icons/bell.png")} style={{ width, height }} />;
    case "calculator":
      return <Image source={require("../../images/icons/calculator.png")} style={{ width, height }} />;
    case "tag":
      return <Image source={require("../../images/icons/tag.png")} style={{ width, height }} />;
    default:
      throw new Error(`no icon name: ${name}`);
  }
};
