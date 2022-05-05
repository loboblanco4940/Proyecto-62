import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends Component{
  render(){
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>
        Word :{" "}
      </Text>
      <Text style={{fontSize:18}}>
        {this.state.word}
      </Text>
    </View>
    
    return(
      <View style={{flex:1}}>
        <Header
        backgroundColor = {"#1E90FF"}
        centerComponent = {{
          text: "Pocket Dictionary",
          style: {color:"#FF1493",fontSize:20,}
        }}
      />
        <TextInput 
          style={styles.inputBox}
          onChangeText={text =>{
            this.setState({
            text: text,
            isSearchPressed: false,
            word : "Loading...",
            lexicalCategory :'',
            examples : [],
            defination : ""
            });
          }}
          value={this.state.text}
        />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={ () => {
              this.setState({ idSearchPressed: true });
              this.getWord(this.state.text)
            }}>
          </TouchableOpacity>


        <HomeScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#FF1493',
   },
   inputBoxContainer:{
    flex:0.3,
    alignItems:'center',
    justifyContent:'center' 
   },
   inputBox:{
     marginTop:200,
     width:"80%",
     alignSelf:"center",
     height:40,
     textAlign:"center",
     borderWidth:4,
     outline: "none",
   }
 });