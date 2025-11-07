import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const StyleHomeScreen = StyleSheet.create({
   background:{
      display:'flex',
      backgroundColor:'#648adbff',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
   },
   container:{
      display:'flex',
      marginTop:height*0.25
   },
   imagem:{
      width:width*0.6,
      height:height*0.36
   },
   title:{
      height:height*0.1,
      width:width*0.7
   }

});
export default StyleHomeScreen;