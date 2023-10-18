import React from 'react';
import { Text, View, FlatList, StyleSheet , Image } from 'react-native';

export default class Userslists extends React.Component{
    state = {
      data :[]
    };
    componentDidMount(){
      this.fetchData();
    }
    fetchData = async() => {
      await fetch("https://randomuser.me/api?results=20").
      then(response => response.json()).
      then((responseJson) => {this.setState({data: responseJson.results})}).
      catch(error => console.log(error))
    }
    render(){
      return(
       <View style={styles.container}>
          <FlatList 
          data={this.state.data}
          keyExtractor = {(x,i) =>i}
          renderItem ={({item}) => 
            <View>
                  <Text> {`${item.name.first}  ${item.name.last}`}</Text>
                  <Text> {`${item.email}  ${item.name.last}`}</Text>
            </View>
          }/>
        </View>
      );
    } 
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height:300,
    marginLeft:20,
    marginRight: 10,
    marginTop: 50
  },

});

