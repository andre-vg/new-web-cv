import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function TimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://cdn.rybena.com.br/dom/master/latest/rybena.js?player=PlayerTimNegocia"
      ></Script>
      <div>
        AAAA
        {children}
      </div>
    </>
  );
}
