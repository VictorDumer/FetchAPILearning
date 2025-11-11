import { StyleSheet } from 'react-native';
import {Dimensions}  from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const StyleCharactersList = StyleSheet.create({
    
    TextInput:{
        marginTop:100,
        backgroundColor:'red'
    },
    scroll:{
        flex:1
    },
    fundo:{
        width:width*0.97,
        height:height*0.21,
        flexDirection: 'row',
        padding:30,
        borderRadius:23
    },
    Container: {
        margin:10,
        borderRadius:10,
        overflow:'hidden'
    },
    imagem: {
        width: width*0.2,
        height: height*0.1,
        borderRadius: 45,
        marginTop:height*0.05
    },
    textContainer: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        width:'100%',
        marginTop:height*0.05
    },
    nome: {
        fontSize: 30,
        fontWeight: '500',
        color: '#FFFFFF',
        marginBottom: 4,
    },

    statusText:{
        color: '#db5543ff',
        fontSize:20,
        fontWeight: '300',
    },

    defaultText: {
        color: '#ffefefff', 
    },
    
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E', 
    },
});

export default StyleCharactersList;