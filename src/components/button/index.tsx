import { IReactProps } from '@/settings/type';
import Regular from './regular';

type TRegularProps = IReactProps & {
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, onClick, className = '' }: TRegularProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.regular = Regular;

export default Button;
