
import { Text, View,ActivityIndicator } from "react-native"
export default function Loading(){
    return(
        <View>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Carregando personagens...</Text>
        </View>
    )
}