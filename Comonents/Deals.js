import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function Deals({navigation}) { 
    const [deals, setdeals] = useState([]);
    
  useEffect(() => { 
      const fetchDeals = async () => {
          await fetch('https://bakesaleforgood.com/api/deals')// promis 
              .then(response => response.json())// string -> json object
              .then(data => setdeals(data)) // array of deals 
              .catch(error => console.log(error))
      };
      fetchDeals();
  }, []);
    renderItem = (data) => {
      console.log(data)
        return (
          <TouchableOpacity onPress={()=>navigation.navigate('DealDetails',{
            id:data.item.key
          })}>
            <View style={styles.card}>

                <Image source={{ uri: data.item.media[0] }}
                    style={styles.image} />
                <Text style={styles.title}>{data.item.title}</Text>
                <Text style={styles.price}>{data.item.price}</Text>
            </View>
            </TouchableOpacity>
        );
    }
  return (
    <View style={styles.container}>
         <FlatList
            data= {deals} 
            renderItem= {item=> this.renderItem(item)} 
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',
    marginLeft:20,
    marginRight: 20,
    // paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    }, 
    price:{
      fontSize:24,
      fontWeight:'300'
    },
    image: {
        width: '100%',
        height: 300 
    },
    card:{
      backgroundColor:'#fff',
      borderColor:'#ccc',
      borderWidth:1,
      padding:20,
      marginVertical:10,
      borderRadius: 15,
      shadowColor:'#222',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    }
});
