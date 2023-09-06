import {string} from 'prop-types';

function Button({type, className, text, ...restProps}) {
  return (
    <button type={type} className={className} {...restProps}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: string,
  className: string,
  text: string,
};

export default Button;
