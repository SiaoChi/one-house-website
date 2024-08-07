import { createContext, Dispatch, SetStateAction } from 'react';
import c0 from './clients/img/0.png';
import c1 from './clients/img/1.png';
import c10 from './clients/img/10.png';
import c11 from './clients/img/11.png';
import c2 from './clients/img/2.png';
import c3 from './clients/img/3.png';
import c4 from './clients/img/4.png';
import c5 from './clients/img/5.png';
import c6 from './clients/img/6.png';
import c7 from './clients/img/7.png';
import c8 from './clients/img/8.png';
import c9 from './clients/img/9.png';
import t0 from './img/t0.svg';
import t1 from './img/t1.svg';
import t2 from './img/t2.svg';
import t3 from './img/t3.svg';
import t4 from './img/t4.svg';
import t5 from './img/t5.svg';
import t6 from './img/t6.svg';
import t7 from './img/t7.svg';
import t8 from './img/t8.svg';

import { TClientProps, TSelectedProjectProps } from '@/settings/type';

export type THomeState = { overIndex: number };
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState: THomeState = { overIndex: 0 };
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

export const SelectedProjectData: TSelectedProjectProps = [
  { title: 'KPLUS', body: '2024, Photography & Documentary' },
  { title: 'Gogoro CrossOver', body: '2023, Photography & Documentary' },
  { title: '袁子芸Sonia Yuan-N°1 de CHANEL', body: '2023, Photography & Documentary' },
  { title: 'Irensense Pop up store', body: '2024, Curate Exhibition' },
  { title: '底片叔叔 Film Uncle', body: '2021, Branding & Identity' },
  { title: 'Instil coffee Package', body: '2024, Graphic Design' },
];

export const ClientsData: TClientProps = [
  { image: c0 },
  { image: c1 },
  { image: c2 },
  { image: c3 },
  { image: c4 },
  { image: c5 },
  { image: c6 },
  { image: c7 },
  { image: c8 },
  { image: c9 },
  { image: c10 },
  { image: c11 },
];
