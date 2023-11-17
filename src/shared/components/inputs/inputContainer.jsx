import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputContainer = (props) => {
  const { required, register } = props;
  return (
    <>
      <div className="input-container">
        <div className="input-group">
          <span className="input-group-text">
            {" "}
            {props.icon ? (
              <FontAwesomeIcon
                icon={props.icon}
                size={props.iconSize}
                className="input-group-text__icon"
              />
            ) : (
              ""
            )}
            {props.groupText}
          </span>

          <input
            type={props.type}
            name={props.name}
            placeholder={props?.placeholder}
            {...(required ? register(props?.name, { required: true }) : "")}
            className={`form-control ${
              props.errors && props?.errors[props.name] ? "is-invalid" : ""
            }`}
          />
        </div>

        {props.errors && props.errors[props.name] && (
          <span className="error-msg">*field is required*</span>
        )}
      </div>
    </>
  );
};

export default InputContainer;
