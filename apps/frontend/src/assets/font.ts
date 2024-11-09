import localFont from 'next/font/local';

export const font = localFont({
  variable: '--font',
  src: [
    {
      path: './fonts/Geist-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Geist-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});
