import {  Image, View, Text } from "react-native";
import StyleDetailsList from "../Styles/StyleDetailsListScreen";

export default function CharactersDatailScreen({navigation, route}){

    const item = route.params.item
    return (
        <View style={StyleDetailsList.Container}>
        <View>
            <Image
                    source={{ uri: item.image }}
                    style={StyleDetailsList.imagem}
                    />
            </View>
            <View style={StyleDetailsList.textContainer}>
                <Text style={StyleDetailsList.nome}>{item.name}</Text>
                <Text style={StyleDetailsList.statusText}>Status: {item.status} ({item.species}) {item.gender}</Text>
                <View style={StyleDetailsList.localizacaoContainer}>
                    <Text style={StyleDetailsList.localizacaoText}>Localização:</Text>

                    <View style={StyleDetailsList.localizacaoItem}>
                        <Text style={StyleDetailsList.LocalizacaoOrigem}>Origem:</Text>
                        <Text style={StyleDetailsList.defaultText}>{item.origin.name}</Text>
                    </View>

                    <View style={StyleDetailsList.localizacaoItem}>
                        <Text style={StyleDetailsList.LocalizacaoOrigem}>Local Atual:</Text>
                        <Text style={StyleDetailsList.defaultText}>{item.location.name}</Text>
                    </View>
                </View>
            </View>
    </View>
    )
}