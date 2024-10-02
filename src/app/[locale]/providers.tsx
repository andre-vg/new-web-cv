'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export const inViewContext = React.createContext(
  {} as { inView: any; setInView: React.Dispatch<any> },
);

export function Providers({ children, themeProps }: ProvidersProps) {
  const [inView, setInView] = React.useState<string>('home');

  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <inViewContext.Provider value={{ inView, setInView }}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </inViewContext.Provider>
    </NextUIProvider>
  );
}
