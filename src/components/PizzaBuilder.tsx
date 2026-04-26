import { useState } from 'react';

const sizes = [
  { label: 'Pequeña', price: 7.50 },
  { label: 'Mediana', price: 10.00 },
  { label: 'Grande', price: 12.00 },
];

const toppings = [
  'Pepperoni', 'Jamón', 'Salchicha', 'Champiñones',
  'Cebolla', 'Chile', 'Piña', 'Aceitunas',
  'Carne', 'Loroco', 'Jalapeño', 'Queso extra',
];

const TOPPING_PRICE = 0.75;

export default function PizzaBuilder() {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  const toggleTopping = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
    );
  };

  const total = sizes[selectedSize].price + selectedToppings.length * TOPPING_PRICE;

  const handleAdd = () => {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-heading font-bold italic text-brand-brown dark:text-brand-cream mb-4">
        🍕 Arma tu Pizza
      </h2>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-brand-cream-dark dark:border-neutral-800 p-5 space-y-6">
        {/* Size selection */}
        <div>
          <h3 className="font-semibold text-brand-brown dark:text-brand-cream mb-3">Tamaño</h3>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size, i) => (
              <label
                key={size.label}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-all ${
                  selectedSize === i
                    ? 'border-brand-red bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-brand-red-light font-semibold'
                    : 'border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:border-brand-red/40'
                }`}
              >
                <input
                  type="radio"
                  name="pizza-size"
                  checked={selectedSize === i}
                  onChange={() => setSelectedSize(i)}
                  className="sr-only"
                />
                <span>{size.label}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">${size.price.toFixed(2)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Toppings */}
        <div>
          <h3 className="font-semibold text-brand-brown dark:text-brand-cream mb-1">Toppings extras</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">${TOPPING_PRICE.toFixed(2)} c/u</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {toppings.map((topping) => {
              const selected = selectedToppings.includes(topping);
              return (
                <label
                  key={topping}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all text-sm ${
                    selected
                      ? 'border-brand-red bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-brand-red-light font-medium'
                      : 'border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:border-brand-red/40'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleTopping(topping)}
                    className="sr-only"
                  />
                  <span className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${
                    selected
                      ? 'bg-brand-red border-brand-red text-white'
                      : 'border-gray-300 dark:border-neutral-600'
                  }`}>
                    {selected && '✓'}
                  </span>
                  {topping}
                </label>
              );
            })}
          </div>
        </div>

        {/* Total + button */}
        <div className="flex items-center justify-between pt-4 border-t border-brand-cream-dark dark:border-neutral-800">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Total: </span>
            <span className="text-2xl font-bold text-brand-red dark:text-brand-gold-light">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-2.5 bg-brand-red text-white rounded-lg font-semibold hover:bg-brand-red/90 active:scale-95 transition-all"
          >
            Agregar al pedido
          </button>
        </div>

        {confirmed && (
          <div className="text-center py-2 text-brand-green dark:text-brand-green-light font-medium animate-pulse">
            Pizza agregada al pedido (demo)
          </div>
        )}
      </div>
    </section>
  );
}
