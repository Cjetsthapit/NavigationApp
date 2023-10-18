import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BagDetails({ route, navigation }) { 
    const { bagcolor, bagprice } = route.params;
 
  return (
      <View >
          <Text style={styles.text}>{ bagcolor }</Text>  
          <Text style={styles.text}> { bagprice }</Text>  
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
