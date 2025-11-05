import { StyleSheet } from 'react-native';

const StyleCharactersList = StyleSheet.create({
    
    Container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#0ca565ff', 
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 8,
        borderRadius: 15,
        borderColor: '#d49b00ff', 
        borderWidth: 1,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 45, 
        borderWidth: 3,
        borderColor: '#64FFDA', 
        marginLeft: 125,
    },
    textContainer: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        width:'100%',
    },
    nome: {
        fontSize: 18,
        fontWeight: '900',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    localizacaoContainer: {
        borderTopColor: '#a3e698ff', 
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        width:'100%',
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
        marginBottom: 2,
        flexDirection: 'row',
    },
    LocalizacaoOrigem: {
        fontWeight: 'bold',
        color: '#FFEA00',
        marginRight: 5,
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