import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#111',
        },
        headerTintColor: '#ff4500',
        headerTitleStyle: {
          fontSize: 18,
        }
      }}
    />
  )
}

export default RootLayout
