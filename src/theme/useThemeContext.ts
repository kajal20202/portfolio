// ------------------------------------------------------------------------------------------

import { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

import type { ThemeType } from './ThemeContext.types';

// ------------------------------------------------------------------------------------------

export const useThemeContext = (): ThemeType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};

// ------------------------------------------------------------------------------------------
