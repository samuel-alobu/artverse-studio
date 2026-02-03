"use client";

import { ReactNode, useEffect, useState } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // schedule state update (avoids the warning about sync setState in effect)
    const id = requestAnimationFrame(() => setHydrated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!hydrated) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-4xl font-bold">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
