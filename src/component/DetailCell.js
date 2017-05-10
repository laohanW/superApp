/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heading1, Heading2, Paragraph } from './Text'
import Separator from './Separator'
import { screen, system, tool } from '../core'

// create a component
class DetailCell extends Component {
    render() {
        let icon = this.props.image && <Image style={styles.icon} source={this.props.image} />
        let cell_arrow=this.props.cellArrow && <Image style={styles.arrow} source={this.props.cellArrow} />
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={[styles.content, this.props.style]}>
                        {icon}
                        <Heading2>{this.props.title}</Heading2>
                        <View style={{ flex: 1, backgroundColor: 'blue' }} />
                        <Paragraph style={{ color: '#999999' }}>{this.props.subtitle}</Paragraph>
						{cell_arrow}
                    </View>

                    <Separator />
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});

//make this component available to the app
export default DetailCell;
