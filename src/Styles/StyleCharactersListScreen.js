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

    statusText:{
        color: '#4355dbff',
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