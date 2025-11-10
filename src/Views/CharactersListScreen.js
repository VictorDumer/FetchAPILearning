import { FlatList, Image, View, Text,TouchableOpacity } from "react-native";
import { useState, useEffect } from "react"
import axios from "axios";
import Loading from "../Components/Loading";
import Erro from "../Components/Erro";
import StyleCharactersList from "../Styles/StyleCharactersListScreen";



const Personagem = ({navigation, item}) =>{

    
    const Navegacao = () =>{
        navigation.navigate("Detalhes", {item});
    }
    return(

        <TouchableOpacity style={StyleCharactersList.Container} onPress={Navegacao}>
        <View>
        <View>
            <Image
                    source={{ uri: item.image }}
                    style={StyleCharactersList.imagem}
                    />
            </View>
            <View style={StyleCharactersList.textContainer}>
                <Text style={StyleCharactersList.nome}>{item.name}</Text>
                <Text style={StyleCharactersList.statusText}>Status: {item.status} ({item.species})</Text>
            </View>
    </View>
    </TouchableOpacity>
)
}

export default function CharactersListScreen ({navigation}){
    const [personagens, setPersonagens] = useState([]);
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(true);
        
    
    
    const getPersonagens= async () => {
        try {
            const dados = axios.get('https://rickandmortyapi.com/api/character');
            setPersonagens((await dados).data.results);
        } catch (err) {
            alert('Erro ao buscar pesonagens:', err);
            setErro('Falha ao carregar os personagens. Tente novamente mais tarde.');
        }finally{
            setLoading(false);
        }


        
        if(erro){
        return(
            <Erro alerta={erro} />
        )
    }
    }

    useEffect(()=>{
        
        getPersonagens();
        
    }, [])

            if(loading){
                return <Loading />
            }

    return(
        <View>
            <FlatList
            data={personagens}
            onEndReached={() => console.log("Desenvolverei a rolagem infinita")}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Personagem item={item} navigation={navigation}/>}
            ListFooterComponent={Loading}
            />
        </View>
    )
}
