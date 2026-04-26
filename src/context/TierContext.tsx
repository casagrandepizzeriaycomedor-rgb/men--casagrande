import { createContext, useContext, type ReactNode } from 'react';

export interface TierConfig {
  showImages: boolean;
  showItemModal: boolean;
  showReservation: boolean;
  showWhatsApp: boolean;
}

const tierConfig: TierConfig = {
  showImages: true,
  showItemModal: true,
  showReservation: true,
  showWhatsApp: true,
};

const TierContext = createContext<{ tierConfig: TierConfig }>({ tierConfig });

export function TierProvider({ children }: { children: ReactNode }) {
  return (
    <TierContext.Provider value={{ tierConfig }}>
      {children}
    </TierContext.Provider>
  );
}

export function useTier() {
  return useContext(TierContext);
}
