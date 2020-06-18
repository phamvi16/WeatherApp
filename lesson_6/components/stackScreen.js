import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Button,
    View,
    Text, StyleSheet, Image, ScrollView, ImageBackground
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailStackScreen from './DetailStackScreen'
import HourScreen from './HourScreen'
import SearchInput from './SearchInput'
import Card from './Cards'
import {fetchLatLon, fetchWeather} from './getAPI'
import Card_eve from './Card_eve';
import Card_night from './Card_night';
import DayScreen from './DayScreen'



export default class StackScreen extends Component {
    state = {
        loading: false,
        error: false,
        name: '',
        temperature: 0,
        icon: null,
        humidity: '',
        visibility: '',
        wind: '', 
        weather:'',
        pressure: '',
        temp_1: 0,
        temp_2: 0,
        temp_3: 0,
        icon_1: null,
        icon_2: null,
        icon_3: null,
        time_1: '',
        time_2: '',
        time_3: '',
       


  


   
        
    };
      
    componentDidMount() {
        this.handleUpdateLocation('Ho Chi Minh');
    }
    handleUpdateLocation = async city => {
        if (!city) return;
    
        this.setState({ loading: true }, async () => {
          try {
            const {id, lat, lon, name, icon_1, icon_2, icon_3, time_1, time_2, time_3, temp_1, temp_2, temp_3} = await fetchLatLon(city);
            const {icon, temperature, weather, wind, humidity, visibility, pressure} = await fetchWeather(lat,lon);


    
            this.setState({
              loading: false,
              error: false,
              name,
              icon,
              temperature,
              humidity,
              visibility,
              weather,
              wind, 
              pressure,
              temp_1,
              temp_2,
              temp_3,
              icon_1,
              icon_2,
              icon_3,
              time_1,
              time_2,
              time_3,
          
             
            });
          } catch (e) {
            this.setState({
              loading: false,
              error: true,
            });
          }
        });
      };
    render() {
        const { loading, error, name, icon, temperature, weather, humidity, visibility, wind, pressure, icon_1, icon_2, icon_3, temp_3, temp_2, temp_1, time_3, time_2, time_1} = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {!loading && (
                        <View>
                            {error && (
                                alert('Could not load weather, please try a different city !'),
                                <View style={styles.part1}>
                                    <TouchableOpacity 
                                    onPress = {() => {
                                        this.props.navigation.navigate('Detail Weather',{
                                            name: name, 
                                            icon: icon, 
                                            temperature: temperature, 
                                            weather: weather, 
                                            humidity: humidity, 
                                            visibility: visibility,
                                            wind: wind, 
                                            pressure: pressure,
                                            icon_1: icon_1,
                                            icon_2: icon_2,
                                            icon_3: icon_3,
                                            temp_1: temp_1,
                                            temp_2: temp_2,
                                            temp_3: temp_3,
                                            time_1: time_1,
                                            time_2: time_2,
                                            time_3: time_3,
                                            

                                        })
                                    }} >

                                        <Text style={styles.city}>{name}</Text>
                                        <Image source={{uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`}}
                                        style={styles.img_1}>
                                        </Image>
                                        <Text style={[styles.temp_text]}>
                                        {`${Math.round(temperature - 273.15) }°C`}
                                        </Text>
                                        <SearchInput onSubmit={this.handleUpdateLocation} />
                                    </TouchableOpacity>
                                    <View style={{ height: 1, margin: 5}}></View>
                                </View>
                            )}
                            {!error && (
                                <View style={styles.part1}>
                                <TouchableOpacity 
                                onPress = {() => {
                                    this.props.navigation.navigate('Detail Weather',{
                                        name: name, 
                                        icon: icon, 
                                        temperature: temperature, 
                                        weather: weather, 
                                        humidity: humidity, 
                                        visibility: visibility,
                                        wind: wind, 
                                        pressure: pressure,
                                        icon_1: icon_1,
                                        icon_2: icon_2,
                                        icon_3: icon_3,
                                        temp_1: temp_1,
                                        temp_2: temp_2,
                                        temp_3: temp_3,
                                        time_1: time_1,
                                        time_2: time_2,
                                        time_3: time_3,
                                        

                                    })
                                }} >

                                    <Text style={styles.city}>{name}</Text>
                                    <Image source={{uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`}}
                                    style={styles.img_1}>
                                    </Image>
                                    <Text style={[styles.temp_text]}>
                                    {`${Math.round(temperature - 273.15) }°C`}
                                    </Text>
                                    <SearchInput onSubmit={this.handleUpdateLocation} />
                                </TouchableOpacity>
                                <View style={{ height: 1, margin: 5}}></View>
                            </View>
                            )}
                        </View>
                    )}
                
                <View style={styles.part2}>
                    <TouchableOpacity 
                    onPress = {() => {
                        this.props.navigation.navigate('HourScreen')
                    }}>
                        
                        <View 
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                            marginLeft: 20,
                            marginBottom: 10
                        }}>

                            <View style={{alignItems: 'center', 
                                        backgroundColor: 'orange', 
                                        marginTop: 20,
                                        borderRadius: 20,
                                        }}>
                                <View style={
                                    {...styles.bgcard, 
                                        backgroundColor: 'orange', 
                                        justifyContent: 'flex-start', 
                                        backgroundColor: 'orange',
                                        borderTopLeftRadius: 18,
                                        borderTopRightRadius: 18,
                                        
                                        ...this.props.style}}>
                                    <Text style={styles.text}>{time_1.split(' ')[1]}</Text>
                                    <Image source={{uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon_1}.png`}}
                                        style={styles.img_card} />
                                </View>
                                <View style={
                                    {...styles.bgcard, 
                                        backgroundColor: 'pink', 
                                        zIndex: -1, 
                                        elevation: -1,
                                        justifyContent: 'flex-end', 
                                        backgroundColor: '#e34e7a',
                                        borderBottomLeftRadius: 18,
                                        borderBottomRightRadius: 18,
                                        borderTopLeftRadius: 50,
                                        ...this.props.style}}>
                                    <Text style={styles.text}>{`${Math.round(temp_1 - 273.15) }°C`}</Text>
                                </View>
                            </View>
                            {/* <Card_eve img={require('../images/moon.png')} color1="#b56390" color2="#7b5e90" /> */}
                            <View style={{alignItems: 'center', 
                        backgroundColor: this.props.bgcolor, 
                        marginTop: 20,
                        borderRadius: 20}}>
                <View style={
                    {...styles.bgcard, 
                        backgroundColor: 'orange', 
                        justifyContent: 'flex-start', 
                        backgroundColor: '#b56390',
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        ...this.props.style}}>
                    <Text style={styles.text}>{time_2.split(' ')[1]}</Text>
                    <Image source={{uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon_2}.png`}}
                        style={styles.img_card} />
                </View>
                <View style={
                    {...styles.bgcard, 
                        backgroundColor: 'pink', 
                        zIndex: -1, 
                        elevation: -1,
                        justifyContent: 'flex-end', 
                        backgroundColor: '#7b5e90',
                        borderBottomLeftRadius: 18,
                        borderBottomRightRadius: 18,
                        ...this.props.style}}>
                    <Text style={styles.text}>{`${Math.round(temp_2 - 273.15) }°C`}</Text>
                </View>
            </View>

                            {/* <Card_night img={require('../images/moon.png')} bgcolor="#48567b" color1="#2e4759" color2="#48567b" style={{borderBottomRightRadius: 50}} /> */}
                            <View style={{alignItems: 'center', 
                        backgroundColor: '#48567b', 
                        marginTop: 20,
                        borderRadius: 20}}>
                <View style={
                    {...styles.bgcard, 
                        backgroundColor: 'orange', 
                        justifyContent: 'flex-start', 
                        backgroundColor: '#2e4759',
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        borderBottomRightRadius: 50,
                        ...this.props.style}}>
                    <Text style={styles.text}>{time_3.split(' ')[1]}</Text>
                    <Image source={{uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon_3}.png`}}
                        style={styles.img_card} />
                </View>
                <View style={
                                {...styles.bgcard, 
                                    backgroundColor: 'pink', 
                                    zIndex: -1, 
                                    elevation: -1,
                                    justifyContent: 'flex-end', 
                                    backgroundColor: '#48567b',
                                    borderBottomLeftRadius: 18,
                                    borderBottomRightRadius: 18,
                                    
                                    ...this.props.style}}>
                                 <Text style={styles.text}>{`${Math.round(temp_3 - 273.15) }°C`}</Text>
                </View>
            </View>
                            
                        </View>
                        {/* </View> */}
                       
                        
                    </TouchableOpacity>
                    
                </View>
                {/* <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View> */}
                <View style={styles.part3}>
                    <TouchableOpacity 
                    onPress = {() => {
                        this.props.navigation.navigate('DayScreen')
                    }}>
                        <View style={{
                            
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            margin: 20,
                            justifyContent: 'space-between'
                            }}>
                            <Image source={require('../images/sun.png')} style={styles.img} />
                            <Image source={require('../images/snowflake.png')} style={styles.img} />
                            <Image source={require('../images/rain.png')} style={styles.img}/>
                            <Image source={require('../images/moon.png')} style={styles.img}/>
                        </View>
                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between'
                            }}>
                        
                        <Image source={require('../images/cloudy.png')} style={styles.img}/>
                            <Image source={require('../images/thunder.png')} style={styles.img}/>
                            <Image source={require('../images/tornado.png')} style={styles.img}/>
                            <Image source={require('../images/umbrella.png')} style={styles.img}/>
                        </View>
                        <View >
                            <TouchableOpacity >
                                <Text style={{
                                    fontSize: 12,
                                    marginTop: 30,
                                    marginLeft: 150,
                                    backgroundColor: 'mediumturquoise',
                                    width: 220,
                                    borderRadius: 18,
                                    color: 'white',
                                    textAlign: 'center'
                                }}>Click to see the next day's weather </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'powderblue'
    },
    part1: {
        //backgroundColor: 'pink',
        flex: 4,
        backgroundColor: 'powderblue',
        borderBottomRightRadius: 60,
        borderRightWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderTopRightRadius: 60,
        marginRight: 5, 
        height: 235
    },
    part2: {
        //backgroundColor: 'yellow',
        
        flex: 3,
        backgroundColor: 'powderblue',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center'
        borderBottomLeftRadius: 60,
        borderLeftWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderTopLeftRadius: 60,
        marginTop: 5,
        marginLeft: 5,
        height: 235
    },
    part3: {
        //backgroundColor: 'green',
        flex: 3,
        height: 235,
        backgroundColor: 'powderblue',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'flex-end'
        borderBottomRightRadius: 60,
        borderRightWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderTopRightRadius: 60,
        marginTop:5,
        marginRight: 5
    },
    img: {
        width: 45,
        height: 45,
        alignSelf: 'center',
        marginTop: 20
    },
    img_1:{
        width: 65,
        height: 65,
        alignSelf: 'center',
        marginTop: 10
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'firebrick',
        marginTop: 10
    },
    temp_text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'firebrick',
        marginTop: 10
    },
    container_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20
    },
    bgcard:{
        //width: 125,
        ...Platform.select({
            ios: {
                width: 100,
                height: 100,
            },
            android: {
                width: 93,
                height: 92,
            }
        }),
        
        //alignItems: 'center',
        //marginTop: 10
        zIndex: 111111,
    },
    img_card: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                marginTop: 30,
            },
            android: {
                marginTop: 15,
            }

        })
        //zIndex: 99
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10
        
    }
})



// export default class Stack extends Component {
//     render() {
//         return (
//             <NavigationContainer>
//                 <AppNavigatorStackScreen />
//             </NavigationContainer>

//         );
//     }
// }