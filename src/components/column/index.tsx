import { IReactProps } from '@/settings/type';
import { twMerge } from 'tailwind-merge';
import { memo } from 'react';

const Column = memo(({ children, className = '' }: IReactProps & { className?: string }) => {
  return <div className={twMerge('w-full px-8', className)}>{children}</div>;
});
export default Column;
