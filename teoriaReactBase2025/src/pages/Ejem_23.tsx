import { ThemeProvider } from '../contexts/ThemeProvider';
import { useTheme } from '../hooks/useTheme';

function A() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div>{theme}</div>
      <button onClick={() => setTheme('dark')}>Cambia a negro</button>
      <button onClick={() => setTheme('light')}>Cambia a blanco</button>
    </>
  );
}

function B() {
  const { theme } = useTheme();
  return (
    <>
      <div> {theme} </div>
    </>
  );
}

export default function Ejem_21() {
  return (
    <div>
      <ThemeProvider>
        <A />
        <B />
      </ThemeProvider>
    </div>
  );
}