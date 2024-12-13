import {
  Poly as FontMono,
  Mulish as FontSans,
  Exo,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontHeading = Exo({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const fontMono = FontMono({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-mono',
});
