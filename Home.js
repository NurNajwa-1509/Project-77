import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground,Image
 } from 'react-native';

 export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar App</Text>
                </View>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                   this.props.navigation.navigate("SpaceCraft")
                }>
                    <Text style={styles.routeText}>Space Craft</Text>
                    <Image source={require('../assets/space_crafts.png')} 
                    style={{ width: 80, height:80}}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                   this.props.navigation.navigate("StarMap")
                }>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Image source={require('../assets/star_map.png')} 
                    style={{ width: 80, height:80}}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                   this.props.navigation.navigate("DailyPic")
                }>
                    <Text style={styles.routeText}>Daily Pic</Text>
                    <Image source={require('../assets/daily_pictures.png')} 
                    style={{ width: 80, height:80}}>
                    </Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
 }

 const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode: "cover"
    },
    routeCard:{
        flex:0.2,
        justifyContent: "center",
        marginLeft:10,
        marginRight:10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: "white"
    },
    titleBar:{
        flex:1,
        justifyContent:"center",
        alignContent:'center',
    },
    titleText:{
        fontSize: 40,
        fontWeight:"bold",
        color:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80
    }
})
