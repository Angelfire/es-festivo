import { useState } from 'react'
import Meta from '@/components/shared/Meta/Meta'
import ToogleTheme from '@/components/ToggleTheme/ToggleTheme'

import styles from './Layout.module.css'

function Layout({ children, description, title }) {
  const [darkMode, setDarkMode] = useState(false)

  const darkTheme = darkMode ? 'dark' : 'light';

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true)

  return (
    <div className={styles.container} data-theme={darkTheme}>
      <Meta
        title={title}
        description={description}
      />

      <ToogleTheme onChangeToogle={toggleDarkMode} />

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>
          <a href="https://srhart.co/" rel="noopener noreferrer" target="_blank">SrHart</a> - Hecho con amor en 🇨🇴
        </p>
      </footer>
    </div>
  )
}

export default Layout
