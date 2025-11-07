
import { Text, View,ActivityIndicator } from "react-native"
import StyleLoading from "../Styles/StyleLoading"
export default function Loading({mensagem}){
    return(
        <View style={StyleLoading.container}>
                <ActivityIndicator size="large" color="#1eff00ff" style={StyleLoading.loading} />
                <Text>{mensagem}</Text>
        </View>
    )
}