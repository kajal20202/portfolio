// ------------------------------------------------------------------------------------------

import { useEffect, useState } from 'react';

import { ClassName, Color, Storage, Theme } from './ThemeContext.types';

// ------------------------------------------------------------------------------------------
const applyTheme = (theme: Theme, htmlElement: HTMLHtmlElement, metaElement: HTMLMetaElement) => {
    switch (theme) {
        case Theme.Light:
            htmlElement.classList.remove(ClassName.Dark);
            htmlElement.classList.add(ClassName.Light);
            metaElement.setAttribute('content', Color.Light);
            localStorage.setItem(Storage.Keyword, Theme.Light);
            break;

        case Theme.Dark:
            htmlElement.classList.remove(ClassName.Light);
            htmlElement.classList.add(ClassName.Dark);
            metaElement.setAttribute('content', Color.Dark);
            localStorage.setItem(Storage.Keyword, Theme.Dark);
            break;

        case Theme.Default: {
            const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? Theme.Dark
                : Theme.Light;
            applyTheme(defaultTheme, htmlElement, metaElement);
            break;
        }
    }
};

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem(Storage.Keyword);
        return storedTheme ? (storedTheme as Theme) : Theme.Default;
    });

    useEffect(() => {
        const htmlElement = document.documentElement as HTMLHtmlElement;
        const metaElement = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
        applyTheme(theme, htmlElement, metaElement);
    }, [theme]);

    useEffect(() => {
        document.body.style.display = 'block';
    }, []);

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
