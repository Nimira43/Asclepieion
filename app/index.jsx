import { Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

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
      <Text style={styles.logoText}>Native Tasks</Text>
      <Text
        style={{
          ...styles.text,
          fontFamily: 'PoppinsLight'
        }
      }>
        Task Management Application
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'VT323', 
    fontSize: 32,
    color: '#ff4500',
  },
  text: {
    fontSize: 18,
  },
})

export default HomeScreen