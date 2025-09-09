// ------------------------------------------------------------------------------------------

import { useEffect, useState } from 'react';

import { ClassName, Color, Storage, Theme } from './ThemeContext.types';

// ------------------------------------------------------------------------------------------

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem(Storage.Keyword);
        return storedTheme ? (storedTheme as Theme) : Theme.Default;
    });

    useEffect(() => {
        applyTheme[theme]();
    }, [theme]);

    useEffect(() => {
        document.body.style.display = 'block';
    }, []);

    const htmlElement = document.documentElement as HTMLHtmlElement;
    const metaElement = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

    const applyTheme = {
        [Theme.Light]: () => {
            htmlElement.classList.remove(ClassName.Dark);
            htmlElement.classList.add(ClassName.Light);
            metaElement.setAttribute('content', Color.Light);
            localStorage.setItem(Storage.Keyword, Theme.Light);
        },
        [Theme.Dark]: () => {
            htmlElement.classList.remove(ClassName.Light);
            htmlElement.classList.add(ClassName.Dark);
            metaElement.setAttribute('content', Color.Dark);
            localStorage.setItem(Storage.Keyword, Theme.Dark);
        },
        [Theme.Default]: () => {
            const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? Theme.Dark
                : Theme.Light;

            applyTheme[defaultTheme]();

            const handleThemeChange = (event: MediaQueryListEvent) => {
                if (localStorage.getItem(Storage.Keyword) === Theme.Default) {
                    const newTheme = event.matches ? Theme.Dark : Theme.Light;
                    applyTheme[newTheme]();
                    localStorage.setItem(Storage.Keyword, Theme.Default);
                }
            };

            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', handleThemeChange);
            localStorage.setItem(Storage.Keyword, Theme.Default);
        },
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === Theme.Default) {
                const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? Theme.Dark
                    : Theme.Light;

                return defaultTheme === Theme.Light ? Theme.Dark : Theme.Light;
            }
            return prevTheme === Theme.Light ? Theme.Dark : Theme.Light;
        });
    };

    return { theme, setTheme, toggleTheme };
};

// ------------------------------------------------------------------------------------------
