import { IReactProps } from '@/settings/type';
import Regular from './regular';

type TRegularProps = IReactProps & {
  className?: string;
  onClick?: () => void;
  onMouseOver?: () => void;
};

const Button = ({ children, onClick, onMouseOver, className = '' }: TRegularProps) => {
  return (
    <button onClick={onClick} className={className} onMouseOver={onMouseOver}>
      {children}
    </button>
  );
};

Button.regular = Regular;

export default Button;
