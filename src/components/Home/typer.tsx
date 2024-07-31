'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Typer({ phrases }: { phrases: string[] }) {
  return (
    <Typewriter
      options={{
        autoStart: true,
        strings: phrases,
      }}
    />
  );
}
