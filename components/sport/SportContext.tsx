'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export type Sport = 'football' | 'basketball';

interface SportContextType {
  currentSport: Sport;
  setSport: (sport: Sport) => void;
}

const SportContext = createContext<SportContextType | undefined>(undefined);

export function SportProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentSport, setCurrentSport] = useState<Sport>('basketball');

  useEffect(() => {
    const sportParam = searchParams.get('sport');
    if (sportParam === 'football' || sportParam === 'basketball') {
      setCurrentSport(sportParam);
    }
  }, [searchParams]);

  const setSport = (newSport: Sport) => {
    setCurrentSport(newSport);
    router.push(`/?sport=${newSport}`, { scroll: false });
  };

  return (
    <SportContext.Provider value={{ currentSport, setSport }}>
      {children}
    </SportContext.Provider>
  );
}

export function useSport() {
  const context = useContext(SportContext);
  if (context === undefined) {
    throw new Error('useSport must be used within a SportProvider');
  }
  return context;
}
