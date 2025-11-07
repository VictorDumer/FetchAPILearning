import { Text, View } from "react-native"

export default function Erro({mensagem}){
    return(
        <View style={[styles.container, styles.center]}>
                <Text style={styles.errorText}>{mensagem}</Text>
        </View>
    )
}