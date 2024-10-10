'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { rememberPallete } from '@/utils/pallete';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export const inViewContext = React.createContext(
  {} as { inView: any; setInView: React.Dispatch<any> },
);

export function Providers({ children, themeProps }: ProvidersProps) {
  const [inView, setInView] = React.useState<string>('hero');
  React.useEffect(() => {
    rememberPallete(localStorage.getItem('themeColor'));
  }, []);

  React.useEffect(() => {
    console.log('inView', inView);
  }, [inView]);
  const queryClient = new QueryClient();

  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <inViewContext.Provider value={{ inView, setInView }}>
        <QueryClientProvider client={queryClient}>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </QueryClientProvider>
      </inViewContext.Provider>
    </NextUIProvider>
  );
}
