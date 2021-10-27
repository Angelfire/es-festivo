import './ToggleTheme.scss';

const ToogleTheme = ({ onChangeToogle }) => {
  return (
    <div className="toggleTheme">
      <input
        type="checkbox"
        id="toggle"
        onChange={onChangeToogle}
      />
      <label htmlFor="toggle"></label>
    </div>
  )
}

export default ToogleTheme;
