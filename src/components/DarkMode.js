import { useTheme } from 'next-themes'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'

const SIZE = '20px'

export const DarkMode = () => {
  // extraemos estas propiedades del tema:
  // systemTheme es para saber el tema del navegador
  // theme es para obtener el tema
  // setTheme es para anadir un tema

  const { systemTheme, theme, setTheme } = useTheme()

  // theme va a tomar el valor del navegador x defecto a no ser que le hayamos asignado un valor.
  const currentTheme = theme === 'systhem' ? systemTheme : theme

  // si currentTheme es dark vamos a renderizar un icono de sol que tenga el evento click que cambie el theme a light y si no un icono de luna que lo cambie a dark
  if (currentTheme === 'dark') {
    return (
      <button
        onClick={() => setTheme('light')}
      >
        <BsSunFill size={SIZE} color='gray' />
      </button>
    )
  } else {
    return (
      <button
        onClick={() => setTheme('dark')}
      >
        <BsFillMoonFill size={SIZE} color='gray' />
      </button>
    )
  }
}
