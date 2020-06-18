import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Button,
    View,
    Text, Image, FlatList
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {horizontalFlatListData} from './horizontalFlatListData';
import horizontalStatus from './horizontalFlatListData'



class HorizontalFlatListItem extends Component{
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 90,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'grey',
                    margin: 4,
                }}>
                <TouchableOpacity onPress={() => {
                    alert(`You cliked on: ${this.props.item.hour}`);
                }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right:  0
                    }}>

                </TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.item.hour}</Text>

                {/* <Icon name={(Platform.OS == 'ios' ) ? this.props.item.status.ios : this.props.item.status.android}/> */}
                {/* <Image 
                    style={{
                        width: 30,
                        height: 30
                    }}
                    source={require('../images/sun.png')} /> */}
                <View>{this.props.item.img}</View>
                <Text style={{
                    fontSize: 16,
                    margin: 10,
                    marginTop: 20,
                    color: 'white',
                }}>{this.props.item.degrees}</Text>
            </View>
        );
    }
}

export default class HourScreen extends Component {
    render() {
        return(
            <View 
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: Platform.OS === 'ios' ? 34 : 0
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}>
                        <Image style={{
                            flex: 1,
                            flexDirection: 'column',
                            width: null,
                            height: null,
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}
                            source={require('../images/backgroung_03.jpg')}>

                        </Image>

                    </View>
                    {/* <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                        backgroundColor: 'transparent',
                        margin: 10
                    }}>Weather forecast</Text> */}
                    <View style={{height: 150}}>
                        <FlatList 
                            style={{
                                backgroundColor: 'black',
                                opacity: 0.5,
                            }}
                            horizontal={true}
                            data={horizontalFlatListData}
                            renderItem={({item, index}) =>{
                                return (
                                    <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                                    </HorizontalFlatListItem>
                                );
                            }}
                            keyExtractor={(item, index) => item.hour}>

                        </FlatList>
                    </View>
            </View>
        );
    }
}
