import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Button,
    View,
    Text, ScrollView, StyleSheet, Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


// class StockButton extends Component {

    
//       render() {

//         return (
//             <View style={{flex: 1}}>
//                 <TouchableOpacity>
//                     <View style={{
                        
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         height: 90
//                     }}>
//                     <Text style={{
//                         marginRight: 20,
//                         color: 'white'
//                     }}>{this.props.name}</Text>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Image style={styles.img}  source={require('../images/rain.png')} />
//                         <Text style={{color: 'white'}}>29°C</Text>
//                     </View>
//                 <Text style={{color: 'white'}}>Mưa giông</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>
//             </View>
            
//         );
//     }
// }


export default class DayScreen extends Component {
    
    render() {
     
        return (
            <ScrollView>
            <View>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}>
                        <Image style={{
                            flex: 1,
                            resizeMode: 'cover',
                            //flexDirection: 'column',
                            width: null,
                            height: null,
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}
                            source={require('../images/background_02.jpg')}>

                        </Image>
                    </View>

                    {/* <StockButton name="Monday" /> */}
                    <TouchableOpacity>
                        <View style={{
                            
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90
                        }}>
                        <Text style={{
                            marginRight: 20,
                            fontSize: 20,
                            color: 'white'
                        }}>Saturday</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img}  source={require('../images/09d.png')} />
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>31°C`</Text>
                        </View>
                    <Text style={{color: 'white', fontSize: 20,}}>Light rain</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>

                    {/* <StockButton name="Tuesday" /> */}
                    <TouchableOpacity>
                        <View style={{
                            
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90
                        }}>
                        <Text style={{
                            marginRight: 20,
                            fontSize: 20,
                            color: 'white'
                        }}>Sunday          </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img}  source={require('../images/10d.png')} />
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>32°C</Text>
                        </View>
                            <Text   Text style={{color: 'white', fontSize: 20,}}>Moderate rain</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>

                    {/* <StockButton name="Wednesday" /> */}
                    <TouchableOpacity>
                        <View style={{
                            
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90
                        }}>
                        <Text style={{
                            marginRight: 20,
                            fontSize: 20,
                            color: 'white'
                        }}>Monday</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img}  source={require('../images/09d.png')} />
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>31°C</Text>
                        </View>
                            <Text style={{color: 'white', fontSize: 20,}}>Light rain</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>

                    {/* <StockButton name="Thursday" /> */}
                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90
                        }}>
                        <Text style={{
                            marginRight: 20,
                            fontSize: 20,
                            color: 'white'
                        }}>Tuesday</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img}  source={require('../images/09d.png')} />
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>33°C</Text>
                        </View>
                             <Text style={{color: 'white', fontSize: 20,}}>Light rain</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>

                    {/* <StockButton name="Friday" /> */}
                    <TouchableOpacity>
                        <View style={{
                            
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90
                        }}>
                        <Text style={{
                            marginRight: 20,
                            fontSize: 20,
                            color: 'white'
                        }}>Wednesday  </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img}  source={require('../images/10d.png')} />
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>32°C</Text>
                        </View>
                            <Text style={{color: 'white', fontSize: 20,}}>Moderate rain</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>

                    {/* <StockButton name="Saturday" /> */}
                    <TouchableOpacity>
                        <View style={{
                            
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90
                        }}>
                        <Text style={{
                            marginRight: 20,
                            fontSize: 20,
                            color: 'white'
                        }}>Thursday      </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img}  source={require('../images/10d.png')} />
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>33°C</Text>
                        </View>
                            <Text style={{color: 'white',fontSize: 20,}}>Moderate rain</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>

                    {/* <StockButton name="Sunday" /> */}
                    <TouchableOpacity>
                        <View style={{
                            
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90
                        }}>
                        <Text style={{
                            marginRight: 20,
                            fontSize: 20,
                            color: 'white'
                        }}>Friday            </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img}  source={require('../images/10d.png')} />
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>32°C</Text>
                        </View>
                            <Text style={{color: 'white',fontSize: 20,}}>Moderate rain</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View>
                
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    part1: {
        //backgroundColor: 'pink',
        flex: 4
    },
    part2: {
        //backgroundColor: 'yellow',
        flex: 3,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    part3: {
        //backgroundColor: 'green',
        flex: 3,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'flex-end'
    },
    img: {
        width: 50,
        height: 50,
        //alignSelf: 'center',
        marginTop: 10
    },
    city: {
        fontSize: 24,
        textAlign: 'center',
        color: '#666',
        marginTop: 20
    },
    temp_text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#666',
        marginTop: 10
    },
    container_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20
    }
})