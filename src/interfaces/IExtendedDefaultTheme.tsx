type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {

  export interface Colors {
    background: string;
    backgroundSecondary: string;
    border: string;
    text: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
  }
}