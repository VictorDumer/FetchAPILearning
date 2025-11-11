import {  Image, View, Text, TouchableOpacity } from "react-native";
import StyleDetailsList from "../Styles/StyleDetailsListScreen";

export default function CharactersDatailScreen({ route}){

    const item = route.params.item
    return (
        
        <View style={StyleDetailsList.background}>

        <View style={StyleDetailsList.Container}>
        <View>
            <Image
                    source={{ uri: item.image }}
                    style={StyleDetailsList.imagem}
                    />
            </View>
            <View style={StyleDetailsList.textContainer}>
                <Text style={StyleDetailsList.nome}>{item.name}</Text>
                <Text style={StyleDetailsList.statusText} > ({item.species}) {item.gender} {item.status}</Text>
                <View style={StyleDetailsList.localizacaoContainer}>

                    <View style={StyleDetailsList.localizacaoItem}>
                        <Text style={StyleDetailsList.LocalizacaoOrigem}>Origem:</Text>
                        <Text style={StyleDetailsList.defaultText}>{item.origin.name}</Text>
                    </View>

                    <View style={StyleDetailsList.localizacaoItem}>
                        <Text style={StyleDetailsList.LocalizacaoOrigem}>Local Atual:</Text>
                        <Text style={StyleDetailsList.defaultText}>{item.location.name}</Text>
                    </View>
                </View>
                <TouchableOpacity style={StyleDetailsList.gosteiButton}>
                    <Text style={StyleDetailsList.gosteiText}>Gostei do personagem</Text>
                </TouchableOpacity>
            </View>
    </View>
                    </View>

    )
}