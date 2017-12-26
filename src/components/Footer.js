import React from 'react';
import { Text, View } from 'react-native';

const Footer = () => {
    const {textStyle} = styles;
    return (
        <Text style={textStyle}>
            This is Footer section
        </Text>
    );
}

const styles = {
    textStyle: {
        backgroundColor: '#bac3cc',
        color: 'red',
        justifyContent: 'flex-end'
    }
};

export default Footer;