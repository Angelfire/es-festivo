import Confetti from './components/Confetti/Confetti';
import Rain from './components/Rain/Rain';
import {
  daysCountNextHoliday,
  fullHoliday,
  holidayName,
  isHolidayToday
} from './lib/dateUtils';

import styles from './App.module.css';

function App() {
  const pluralizeFalta = daysCountNextHoliday > 1 ? 'faltan' : 'falta'

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isHolidayToday
          ? <Confetti />
          : <Rain />
        }

        <h1 className={styles.title}>
          ¿Es festivo en Colombia?
        </h1>

        <div className={styles.description}>
          {isHolidayToday
            ? (
              <>
                <h2>¡Sí!</h2>
                <h3>¡Hoy es festivo y celebramos {holidayName}!</h3>
              </>
            ) : (
              <>
                <h2>¡No!</h2>
                <h3>Aún {pluralizeFalta} {daysCountNextHoliday} días</h3>
                <h3>El próximo festivo es el día {fullHoliday} y celebramos {holidayName}</h3>
              </>
            )
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <a href="https://srhart.co/" rel="noopener noreferrer" target="_blank">SrHart</a> - Hecho con amor en 🇨🇴
        </p>
      </footer>
    </div>
  )
}

export default App;
