export const Button = ({
  color = "primary",
  variant="",
  disabled = "",
  icon='',
  size = ''
}) => {

  return (
    <div>
      <button type="button" className={`btn btn${variant}-${color}  ${disabled} btn-${size} `}>
        <span className="material-icons">{icon}</span>
            Default
      </button>
    </div>
  );
};
