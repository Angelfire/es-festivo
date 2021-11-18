import styles from './ToggleTheme.module.scss';

const ToogleTheme = ({ onChangeToogle }) => {
  return (
    <div className={styles.toggleTheme}>
      <input
        className={styles.toggleThemeInput}
        type="checkbox"
        onChange={onChangeToogle}
        id="toggle"
      />
      <label
        className={styles.toggleThemeLabel}
        htmlFor="toggle"
      ></label>
    </div>
  )
}

export default ToogleTheme;