// ------------------------------------------------------------------------------------------

import { ThemeContext } from './ThemeContext';
import { useTheme } from './useTheme';

import type { ThemeProviderProps } from './ThemeContext.types';

// ------------------------------------------------------------------------------------------

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const theme = useTheme();
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// ------------------------------------------------------------------------------------------

export default ThemeProvider;

// ------------------------------------------------------------------------------------------
