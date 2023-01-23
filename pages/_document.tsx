import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='overflow-x-hidden' lang='en'>
      <Head />
      <body className='bg-dark-blue relative overflow-x-hidden h-screen text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
