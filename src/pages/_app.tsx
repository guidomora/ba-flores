import { mainTheme } from '@/components/theme/theme'
import NavProvider from '@/context/Nav/NavProvider'
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import DbProvider from '@/context/db/DbProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DbProvider>
      <NavProvider>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </NavProvider>
    </DbProvider>

  )
}
