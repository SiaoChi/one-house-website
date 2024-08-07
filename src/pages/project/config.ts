import { createContext, Dispatch, SetStateAction } from 'react';

export type TProjectState = { swiperIndex: number; active: boolean };
export type TProjectContext = [TProjectState, Dispatch<SetStateAction<TProjectState>>];

export const ProjectState: TProjectState = { swiperIndex: 0, active: true };
export const ProjectContext = createContext<TProjectContext>([ProjectState, () => {}]);
