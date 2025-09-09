// ------------------------------------------------------------------------------------------

import { createContext } from 'react';

import type { ThemeType } from './ThemeContext.types';

// ------------------------------------------------------------------------------------------

export const ThemeContext = createContext<ThemeType | undefined>(undefined);

// ------------------------------------------------------------------------------------------
