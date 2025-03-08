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
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#ade4f9'
        }
      }}
    >
      <Stack.Screen
        name='index'
        options={{ title: 'Home' }}
      />
    </Stack>
  )
}

export default RootLayout
