import React from 'react'
import axios from 'axios'
// [Providers]
import { ThemesProvider } from 'components/providers'

type Props = {
  children?: any
}

const AppProvider: React.FC<Props> = ({ children }) => {
  axios.defaults.baseURL = `http://localhost:3001/api/admin/`
  axios.defaults.withCredentials = true

  return <ThemesProvider>{children}</ThemesProvider>
}

export default AppProvider
