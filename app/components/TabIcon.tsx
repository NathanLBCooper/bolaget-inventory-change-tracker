import React from 'react';
import { Image } from 'react-native';

const TabIcon = ({ name }) => {
  const width = 25;
  const height = 25;

  switch (name) {
    case "bell": 
      return <Image source={require("../images/icons/bell.png")} style={{ width: width, height: height }}/>;
    case "calculator": 
      return <Image source={require("../images/icons/calculator.png")} style={{ width: width, height: height }}/>;
    case "tag": 
      return <Image source={require("../images/icons/tag.png")} style={{ width: width, height: height }}/>;
    default:
      throw `no icon name: ${name}`;
  }
};

export default TabIcon;