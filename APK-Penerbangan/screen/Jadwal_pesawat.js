import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Jadwal = [
  {
    id: '1',
    asal: 'Bengkulu',
    tujuan: 'Jakarta',
    maskapai: 'Sriwijaya Air',
    waktu : '17 Maret 2023, 23:00',
  },
  {
    id: '2',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Garuda Air',
    waktu : '19 Maret 2023, 16:00',
  },
  {
    id: '3',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'Tapis Air',
    waktu : '21 Maret 2023, 13:00',
  },
  {
    id: '4',
    asal: 'Bengkulu',
    tujuan: 'Lampung',
    maskapai: 'Lion Air',
    waktu : '23 Maret 2023, 09:00',
  },
  {
    id: '5',
    asal: 'Bandung',
    tujuan: 'Lampung',
    maskapai: 'Majapahit Air',
    waktu : '25 Maret 2023, 05:00',
  }

];


const Jadwal_pesawat = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <MaterialIcons name="flight" size={24} color="#5CA454" />
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.tanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <FontAwesome5 name="user" size={24} color="white" />
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={Jadwal}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright M Alfahmi Irfan - 120140206</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  header:{
    width:'100%',
    backgroundColor: '#5CA454',
    padding:20,
    
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  heading2: {
    color: '#ffff',
    textAlign: 'center',
    top : 20,
  },
  top: {
    top : 25,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:20,
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    fontSize:20,
    fontWeight: "bold",
  },
  tanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 20,
    padding:20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Jadwal_pesawat;