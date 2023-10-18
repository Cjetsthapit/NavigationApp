import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, View, ScrollView } from 'react-native';

export default function DealDetails({route,navigation}) { 
    const [deal, setdeal] = useState({});
    const { id } = route.params;
    
  useEffect(() => { 
      const fetchDealDetail = async () => {
        await fetch(`https://bakesaleforgood.com/api/deals/${id}`)// promis 
        .then(response => response.json())// string -> json object
        .then(data => {
          console.log("*****************",data)
          setdeal(data)
        }
          ) // array of deals 
        .catch(error => console.log(error))
      };
      fetchDealDetail();
  }, []);
   
  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>{deal.title}</Text>
        {deal.media?.map((item) => <Image source={{ uri: item }} style={styles.image} />)}
   
        <Text style={styles.description}>{deal.description}</Text>
        <Text style={styles.description}>${deal.price}</Text>
        <Text style={styles.description}>Posted By:</Text>
        <View style={styles.authorContainer}>
          <Image source={{uri:deal?.user?.avatar}} style={styles.authorImage} ></Image>
          <Text>{deal?.user?.name}</Text>
        </View>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 22,
    fontWeight:'500'
  },
  container: {
    alignSelf:'stretch',
    marginLeft:20,
    marginRight: 10,
    marginTop:10,
    paddingTop: 20,
    paddingHorizontal:15,
    paddingVertical:20,
    backgroundColor: '#fff',
    borderRadius: 15,
    },
    description: {
        fontSize: 16,
        marginVertical:10
    }, 
    image: {
        width: '100%',
        height: 300,
        marginVertical:20
    },
    authorContainer:{
      flexDirection:'row',
      height:100,
      alignItems:'center',
      gap:20
    },
    authorImage:{
      width:100,
      height:100
    },
    authorName:{
    }
});
