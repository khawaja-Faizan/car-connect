import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

import { Input, InputGroup, InputGroupText } from "reactstrap";

const InputContainer = (props) => {
  const {
    register,

    formState: { errors },
  } = useForm();
  const { ref, ...registerField } = register(props.register, {
    required: props.required,
  });
  return (
    <InputGroup>
      <InputGroupText>
        {props.icon ? (
          <FontAwesomeIcon
            icon={props.icon}
            size={props.iconSize}
            className="input-group-text__icon"
          />
        ) : (
          ""
        )}
        <span>{props.groupText}</span>
      </InputGroupText>
      <Input
        type={props.type}
        placeholder={props?.placeholder}
        innerRef={ref}
        {...registerField}
      />
    </InputGroup>
  );
};

export default InputContainer;
