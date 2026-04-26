import { createContext, useContext, useState, type ReactNode } from 'react';

export type TierLevel = 'basico' | 'profesional' | 'premium';

export interface TierConfig {
  name: string;
  price: number;
  priceLabel: string;
  features: string[];
  showImages: boolean;
  showItemModal: boolean;
  showReservation: boolean;
  showWhatsApp: boolean;
  showAdminBanner: boolean;
  showPizzaBuilder: boolean;
}

export const TIERS: Record<TierLevel, TierConfig> = {
  basico: {
    name: 'Basico',
    price: 60,
    priceLabel: 'pago único',
    features: [
      'Menú con categorías',
      'Buscador',
      'Dark mode',
    ],
    showImages: false,
    showItemModal: false,
    showReservation: false,
    showWhatsApp: false,
    showAdminBanner: false,
    showPizzaBuilder: false,
  },
  profesional: {
    name: 'Profesional',
    price: 110,
    priceLabel: 'pago único',
    features: [
      'Todo en Básico',
      'Imágenes en tarjetas',
      'Modal de detalle',
      'Reservaciones',
      'WhatsApp FAB',
    ],
    showImages: true,
    showItemModal: true,
    showReservation: true,
    showWhatsApp: true,
    showAdminBanner: false,
    showPizzaBuilder: false,
  },
  premium: {
    name: 'Premium',
    price: 250,
    priceLabel: 'pago único + $10/mes mantenimiento',
    features: [
      'Todo en Profesional',
      'Pizza Builder',
      'Panel de Administración',
    ],
    showImages: true,
    showItemModal: true,
    showReservation: true,
    showWhatsApp: true,
    showAdminBanner: true,
    showPizzaBuilder: true,
  },
};

interface TierContextValue {
  tier: TierLevel;
  tierConfig: TierConfig;
  setTier: (tier: TierLevel) => void;
}

const TierContext = createContext<TierContextValue | null>(null);

export function TierProvider({ children }: { children: ReactNode }) {
  const [tier, setTier] = useState<TierLevel>('profesional');

  return (
    <TierContext.Provider value={{ tier, tierConfig: TIERS[tier], setTier }}>
      {children}
    </TierContext.Provider>
  );
}

export function useTier() {
  const ctx = useContext(TierContext);
  if (!ctx) throw new Error('useTier must be used within TierProvider');
  return ctx;
}
