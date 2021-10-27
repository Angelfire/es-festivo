import React, { useState } from 'react';
import Confetti from './components/Confetti/Confetti';
import ToogleTheme from './components/ToggleTheme/ToggleTheme';
import {
  daysCountNextHoliday,
  fullHoliday,
  holidayName,
  isHolidayToday
} from './lib/dateUtils';

import styles from './App.module.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const pluralizeFalta = daysCountNextHoliday > 1 ? 'faltan' : 'falta';
  const darkTheme = darkMode ? 'dark' : 'light';

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <div className={styles.container} data-theme={darkTheme}>
      <ToogleTheme onChangeToogle={toggleDarkMode} />
      <main className={styles.main}>
        {isHolidayToday
          ? <Confetti />
          : null
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
