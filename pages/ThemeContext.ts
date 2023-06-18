import { createContext } from 'react';

export type TTheme = 'light' | 'dark' | 'system' | null;

// @ts-ignore
export const ThemeContext = createContext();
