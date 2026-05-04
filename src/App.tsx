import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import MenuGrid from './components/MenuGrid';
import InfoSection from './components/InfoSection';
import SocialSection from './components/SocialSection';
import WhatsAppButton from './components/WhatsAppButton';
import SearchBar from './components/SearchBar';
import { useTheme } from './hooks/useTheme';
import { TierProvider } from './context/TierContext';
import { categories, menuItems } from './data/menuData';
import type { FlatMenuItem } from './types/menu';

const categoryNotes: Record<string, string> = {
  comida: 'Disponibles de 3:00 PM en adelante',
  pupusas: 'Disponibles de 3:00 PM en adelante',
  antojitos: 'Disponibles de 3:00 PM en adelante',
  'bebidas-calientes': 'Disponibles de 3:00 PM en adelante',
  sopas: 'Miércoles y Domingos',
};

const menuCategories = categories.filter(
  (c) => !['info', 'siguenos'].includes(c.id)
);

function flattenItems(categoryId: string): FlatMenuItem[] {
  return menuItems
    .filter((item) => item.category === categoryId)
    .flatMap((item) => {
      if (item.prices) {
        return item.prices.map((p) => ({
          id: `${item.id}-${p.size}`,
          name: `${item.name} ${p.size}`,
          description: `${item.description} - ${p.slices} porciones`,
          price: p.price,
          category: item.category,
          note: item.note,
          sizeLabel: p.size,
          image: item.image,
        }));
      }
      return [{
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price!,
        category: item.category,
        note: item.note,
        image: item.image,
      }];
    });
}

function flattenAllItems(): FlatMenuItem[] {
  return menuCategories.flatMap((cat) => flattenItems(cat.id));
}

function AppContent() {
  const { isDark, toggle } = useTheme();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = flattenItems(activeCategory);
  const activeCat = categories.find((c) => c.id === activeCategory)!;

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return flattenAllItems().filter((item) => item.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const isSearching = searchResults !== null;

  return (
    <div className="min-h-screen pb-8 bg-brand-cream dark:bg-brand-dark transition-colors">
      <Header isDark={isDark} onToggleTheme={toggle} />
      <Hero />
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelect={(id) => { setSearchQuery(''); setActiveCategory(id); }}
      />
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      {isSearching ? (
        <MenuGrid
          items={searchResults}
          categoryName={`Resultados para "${searchQuery}"`}
        />
      ) : activeCategory === 'info' ? (
        <InfoSection />
      ) : activeCategory === 'siguenos' ? (
        <SocialSection />
      ) : (
        <MenuGrid
          items={filteredItems}
          categoryName={`${activeCat.icon} ${activeCat.name}`}
          categoryNote={categoryNotes[activeCategory]}
        />
      )}
      <WhatsAppButton />
      <footer className="border-t border-brand-cream-dark dark:border-neutral-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="font-heading italic text-sm text-gray-900 dark:text-brand-cream/60">
            Casa Grande Pizzeria y Comedor
          </p>
          <p className="text-xs text-gray-700 dark:text-neutral-600 mt-1">
            Corinto, Morazán, El Salvador
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <TierProvider>
      <AppContent />
    </TierProvider>
  );
}
