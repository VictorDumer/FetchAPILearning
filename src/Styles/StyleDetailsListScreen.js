import { StyleSheet } from 'react-native';
import {Dimensions}  from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StyleDetailsList = StyleSheet.create({
   
    Container: {
        marginTop:20,
        height: '500',
        backgroundColor: '#0ca565ff', 
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 10,
        borderColor: '#d49b00ff', 
        elevation: 5,
        borderWidth: 1,
        borderRadius:15,
    },
    imagem: {
        width: 300,
        height: 300,
        borderRadius: 45, 
        borderWidth: 3,
        borderColor: '#64FFDA', 
        marginLeft: 20,
    },
    nome: {
        fontSize: 18,
        fontWeight: '900',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    localizacaoContainer: {
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#a3e698ff', 
    },
    statusText:{
        color: '#4355dbff',
    },
    localizacaoText: {
        fontWeight: 'bold',
        color: '#87ff24ff', 
        marginBottom: 4,
    },
    localizacaoItem: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    LocalizacaoOrigem: {
        fontWeight: '600',
        color: '#FFEA00',
        marginRight: 5,
    },
    defaultText: {
        color: '#ffefefff', 
    },

});
export default StyleDetailsList;