import React from 'react'
import { ConfigProvider } from 'antd'

function ThemeProvider({ children } : { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary : '#111',
          borderRadius: 3,
          controlOutline : 'none',
        },
        components: {
          Button : {
            controlHeight : 45, 
            defaultBorderColor : '#111',
          },
          Select : {
            controlHeight : 45, 
          },
          Input : {
            controlHeight : 45, 
          },
        },
      }}
    >
      { children }
    </ConfigProvider>
  )
}

export default ThemeProvider
