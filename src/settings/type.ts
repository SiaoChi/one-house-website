import { Dispatch, ReactNode } from 'react';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  MenuDraw = 'menuDraw',
}

export enum LoadingProcessType {
  Ball = 'balls',
  Bars = 'bars',
  Bubbles = 'bubbles',
  Cubes = 'cubes',
  Cylon = 'cylon',
  Spin = 'spin',
  SpinningBubbles = 'spinningBubbles',
  Spokes = 'spokes',
}

export enum TransitionType {
  Unset = 0,
  FadeIn = 1,
  FadeOut = 2,
  DidFadeIn = 3,
  DidFadeOut = 4,
  Loop = 5,
  Stop = 6,
}

export type TLoadingProcessState = {
  enabled?: boolean;
  type?: LoadingProcessType;
  body?: '';
};

export type TMenuDrawState = {
  enabled: boolean;
};

export interface IState {
  [ActionType.Page]?: string;
  [ActionType.LoadingProcess]?: TLoadingProcessState;
  [ActionType.MenuDraw]?: TMenuDrawState;
}

export interface IAction {
  state: IState | TLoadingProcessState | TMenuDrawState;
  type: ActionType;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}

export type TSelectedProjectProps = { title: string; body: string }[];
export type TClientProps = { image: string }[];
