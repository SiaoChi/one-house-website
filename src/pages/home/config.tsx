import { createContext, Dispatch, SetStateAction } from 'react';
import t0 from './img/t0.svg';
import t1 from './img/t1.svg';
import t2 from './img/t2.svg';
import t3 from './img/t3.svg';
import t4 from './img/t4.svg';
import t5 from './img/t5.svg';
import t6 from './img/t6.svg';
import t7 from './img/t7.svg';
import t8 from './img/t8.svg';

export enum HomeStepType {
  unset = 0,
  fadeIn = 1,
}
export type THomeState = { step: HomeStepType };
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = { step: HomeStepType.unset };
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);

export const SVGs = [
  { path: t0, offset: { x: -614, y: 192 }, scale: 1 },
  { path: t1, offset: { x: -467, y: 102 }, scale: 1 },
  { path: t2, offset: { x: -318, y: 204 }, scale: 1 },
  { path: t3, offset: { x: -143, y: 175 }, scale: 1 },
  { path: t4, offset: { x: 5, y: 127 }, scale: 1 },
  { path: t5, offset: { x: 164, y: 210 }, scale: 1 },
  { path: t6, offset: { x: 305, y: 137 }, scale: 1 },
  { path: t7, offset: { x: 453, y: 183 }, scale: 1 },
  { path: t8, offset: { x: 615, y: 147 }, scale: 1 },
];
