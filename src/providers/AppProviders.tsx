import  { ReactNode } from 'react'
import {NextIntlClientProvider} from 'next-intl'
import ThemesProvider from './ThemeProvider'
export default function AppProviders({children}:{children:ReactNode}) {
  return (
    <ThemesProvider>

        <NextIntlClientProvider >

        {children}
        </NextIntlClientProvider>
    </ThemesProvider>


  )
}
