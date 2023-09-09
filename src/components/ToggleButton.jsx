function ToggleButton({ isOn, onChange }) {
  const handleClick = () => {
    onChange(!isOn);
  };


  return (
    <button
      type="button"
      onClick={handleClick}
      className={isOn ? "toggle-button-on" : "toggle-button-off"}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
};

export default ToggleButton