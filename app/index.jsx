import { Text, View, StyleSheet, Image } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import LogoImage from '../assets/images/favicon.png'

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    'PoppinsLight': require('../assets/fonts/Poppins-Light.ttf'),
    'VT323': require('../assets/fonts/VT323-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View
      style={ styles.container }
    >
      <Image
        source={LogoImage}
        style={styles.image}
      />
      <Text style={styles.logoText}>Native Tasks</Text>
      <Text style={styles.mainText }>
        Task Management Application
      </Text>
      <Text style={styles.subtitle}>by NimiraTech</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eee'
  },
  logoText: {
    fontFamily: 'VT323', 
    fontSize: 32,
    color: '#ff4500',
  },
  mainText: {
    fontFamily: 'PoppinsLight', 
    fontSize: 18,
    color: '#111'
  },
  subtitle: {
    fontFamily: 'PoppinsLight',
    fontSize: 16,
    color: '#333',
    marginBottom: 20
  },
  image: {
    width: 150,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  }
})

export default HomeScreen