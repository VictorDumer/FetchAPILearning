import { StyleSheet } from 'react-native';
import {Dimensions}  from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StyleDetailsList = StyleSheet.create({
    background:{
      backgroundColor:'#8371ef',
      flex:1
   },
    Container: {
        backgroundColor:'#ffffffff',
        marginTop:height*0.1,
        height: height*0.89,
        elevation: 5,
        marginHorizontal:width*0.02,
        borderRadius:20
    },
    imagem: {
        height: height*0.5,
        resizeMode:'cover',
        margin:width*0.04,
        borderRadius:8
    },
    textContainer: {
        marginHorizontal:width*0.04,

    },
    nome: {
        fontSize: 18,
        fontWeight: '900',
        color: '#0000',
        marginBottom: 4,
    },
    statusText:{
        color: '#888a96ff',
        marginBottom:height*0.05
    },
    localizacaoContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    localizacaoItem: {
        width:width*0.43,
        height:height*0.09,
        backgroundColor:'#dbdadaff',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:16
    },
    LocalizacaoOrigem: {
        fontWeight: '600',
        color: '#888a96ff',
        marginRight: 5,
    },
    defaultText: {
        color: '#020101ff', 
    },
    gosteiButton:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#020101ff',
        height:height*0.08,
        marginTop:height*0.04,
        borderRadius:10
    },
    gosteiText:{
        color:'#dbdadaff'
    }

});
export default StyleDetailsList;