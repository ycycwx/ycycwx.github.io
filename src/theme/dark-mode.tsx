'use client';

import {useCallback, useSyncExternalStore} from 'react';

export const DarkMode = () => {
    const isClient = typeof window === 'undefined';
    const subscribe = useCallback<Parameters<typeof useSyncExternalStore>[0]>(
        cb => {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', cb);
            return () => mediaQuery.removeEventListener('change', cb);
        },
        []
    );
    const isDarkMode = useSyncExternalStore(
        subscribe,
        isClient ? () => window.matchMedia('(prefers-color-scheme: dark)').matches : () => false,
        () => false
    );
    return isDarkMode ? 'dark' : 'light';
};
