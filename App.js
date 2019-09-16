//import liraries
import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, Button } from 'react-native';
var net = require('react-native-tcp');

// create a component
export default class TCPconnectionScreen extends Component {
    constructor(props) {
        super(props);
    this.connect = this.connect.bind(this);
    
    this.state = { 
            HOST: '',
            PORT: 0,
            STATUS: 'DISCONNECTED',
            DATA: 'N'
    
          }
    }

connect(){
  let PORT = this.state.PORT
  let HOST = this.state.HOST 
  

  var client = new net.Socket();
  client.connect(PORT,HOST, function() {
      this.setState({STATUS:'CONNECTED'})
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
 
  client.write('rotate');

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
  this.setState({ DATA: data})
  // Close the client socket completely
  //client.destroy();
});

  

// Add a 'close' event handler for the client socket



//C:\Users\M51763\AppData\Local\Programs\Python\Python37
   
   
    // your event handling logic
  }

    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.container}>
              
                <Text>Connect to server: </Text>
              
            </View>

            <View style= {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        style={{height: 60}}
                        placeholder="IP"
                        onChangeText={(host) => this.setState({HOST: host})}
                        value={this.state.HOST}
                    />

                    <TextInput
                        style={{height: 60}}
                        placeholder="PORT"
                        onChangeText={(port) => this.setState({ PORT: port})}
                        value={String(this.state.PORT)}
                    />

                    <Button
                    title='Connect'
                    onPress={this.connect}
          
                    />
                    <Text>HOST: {this.state.HOST}</Text>
                    <Text>PORT: {this.state.PORT}</Text>
                    <Text>STATUS: {this.state.STATUS}</Text>
                    <Text>DATA: {this.state.DATA}</Text>
                    
            </View>
                   
            </View>
            );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
        
    },
});


