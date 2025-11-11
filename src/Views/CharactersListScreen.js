import { FlatList, Image, View, Text, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react"
import axios from "axios";
import Loading from "../Components/Loading";
import StyleCharactersList from "../Styles/StyleCharactersListScreen";


export default function CharactersListScreen ({navigation}){
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [texto, setTexto] = useState('');

    
    const buscarPorNome = async(nome) =>{
        try {
            setLoading(true);
            const dados = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nome}`);
            setPersonagens(dados.data.results);
        } catch (error) {
            alert('Personagem não encontrado!');
            setPersonagens([]);
        } finally{
            setLoading(false);
        }
    }


    const getPersonagens= async () => {
        try {
            const dados = await axios.get('https://rickandmortyapi.com/api/character/');
            setPersonagens(dados.data.results);
        } catch (err) {
            alert('Erro ao buscar pesonagens:', err);
        }finally{
            setLoading(false);
        }
        
    }

    const Personagem = ({navigation, item}) =>{

    
    const Navegacao = () =>{
        navigation.navigate("Detalhes", {item});
    }
    return(
     
        <TouchableOpacity style={StyleCharactersList.Container} onPress={Navegacao}>
        <SafeAreaProvider>
            <SafeAreaView >
            <ImageBackground source={require('../Assets/fundo.png')} style={StyleCharactersList.fundo}>
                    <Image
                            source={{ uri: item.image }}
                            style={StyleCharactersList.imagem}
                            />
                <View style={StyleCharactersList.textContainer}>
                    <Text style={StyleCharactersList.nome}>{item.name}</Text>
                    <Text style={StyleCharactersList.statusText}>Status: {item.status} ({item.species})</Text>
                </View>
            </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
       

        </TouchableOpacity>
    )}

    useEffect(()=>{
        
        getPersonagens();
        
    }, [])

            if(loading){
                return <Loading />
            }

    return(
        <View>
            <View>

            </View>
            <TextInput
            placeholder="Digite seu texto aqui"
            value={texto}
            onChangeText={setTexto}
            style={StyleCharactersList.TextInput}
            returnKeyType={'send'}
            onSubmitEditing={()=>{buscarPorNome(texto)}}
            />

            <FlatList
            data={personagens}
            onEndReached={() => console.log("Desenvolverei a rolagem infinita")}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Personagem item={item} navigation={navigation}/>}
            // ListFooterComponent={Loading}
            />
        </View>
    )
}
