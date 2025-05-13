//a simple context component with children

"use client";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({});

  useEffect(() => {
    // Perform side effects here
    console.log("Providers mounted");
    return () => {
      console.log("Providers unmounted");
    };
  }, []);

  const ProvidersContext = createContext({
    state: {},
    setState: (state: any) => {},
  });

  return (
    <ProvidersContext.Provider value={{ state, setState }}>
      {children}
    </ProvidersContext.Provider>
  );
}
