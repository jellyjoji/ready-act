import {string} from 'prop-types';

function Button({type, className, ...restProps}) {
  return <button type={type} className={className} {...restProps}></button>;
}

Button.propTypes = {
  type: string,
  className: string,
};

export default Button;