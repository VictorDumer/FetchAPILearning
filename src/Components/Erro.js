import { Text, View } from "react-native"

export default function Erro({alerta}){
    return(
        <View style={[styles.container, styles.center]}>
                <Text style={styles.errorText}>{alerta}</Text>
        </View>
    )
}