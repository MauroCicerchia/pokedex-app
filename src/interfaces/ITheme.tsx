type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface Colors {
  background: string;
  backgroundSecondary: string;
  border: string;
  text: string;
}

export interface Logos {
  pokeball: string;
}

export default interface Theme {
  colors: RecursivePartial<Colors>;
  logos: RecursivePartial<Logos>;
}