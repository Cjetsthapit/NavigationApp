import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BagList(props) { 
    console.log(props.navigation);
    
const [bags, setbags] = useState([]);
  useEffect(() => { 
    fetch('https://raw.githubusercontent.com/RaniaArbash/myBagsRepo/main/mybags.json')
      .then(response => response.json())// string -> json object
      .then(data => setbags(data.bags)) // array of bags 
      .catch(error => console.log(error))
  }, []);
  renderItem = (data) => 
      <TouchableOpacity onPress={() => props.navigation.navigate('BagDetails', {
          bagcolor: data.item.colour,
          bagprice: data.item.price
    })}>
      <Text style={styles.text}>{ data.item.size}</Text>
    </TouchableOpacity>
  return (
    <View style={styles.container}>
         <FlatList
            data= {bags} 
            renderItem= {item=> this.renderItem(item)} 
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',
    marginLeft:20,
    marginRight: 10,
    marginTop: 50
    },
    text: {
        fontSize: 20
    }
});
