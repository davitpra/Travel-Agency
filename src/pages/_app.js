import '@/styles/tailwind.css'
// importamos el font desde next
import { Montserrat } from '@next/font/google'

// creamos una variable con los parametros que deseamos descargar para hacerlo mas liviano.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400'
})

export default function App ({ Component, pageProps }) {
  return (
  // envolvemos la aplicacion dentro de un main con la clase del font.
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
