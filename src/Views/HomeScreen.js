import { Image, View, Text } from "react-native";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import StyleHomeScreen from "../Styles/StyleHomeScreen";

export default function HomeScreen({navigation}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const espera = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(espera)
  }, []);

  useEffect(()=>{
  if(!loading){
        navigation.navigate("Personagens");
      }
  }, [loading]);

 return(

      <View style={StyleHomeScreen.background}>
        <View style={StyleHomeScreen.container}>
          <Image
            source={require("../Assets/Logo.png")}
            style={StyleHomeScreen.imagem}
            />
          <Image
            source={require("../Assets/Title.png")}
            style={StyleHomeScreen.title}
            />

          <Loading mensagem={"Carregando site.."} />
        </View>
      </View>
  )

  }

