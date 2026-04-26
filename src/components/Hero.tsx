export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4">
      <img
        src={import.meta.env.BASE_URL + "logo_casa_grande.webp"}
        alt="Casa Grande Pizzeria y Comedor"
        className="animate-float animate-pulse-glow w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-brand-cream dark:border-neutral-800"
      />
      <h1 className="animate-shimmer mt-5 text-4xl sm:text-5xl font-heading font-bold italic tracking-tight text-brand-brown dark:text-brand-cream">
        Casa Grande
      </h1>
      <p className="mt-1 text-sm sm:text-base italic text-brand-brown-light dark:text-brand-cream-dark">
        Pizzeria y Comedor &middot; Corinto
      </p>
      <p className="mt-3 text-xs text-brand-gold dark:text-brand-gold-light tracking-widest uppercase">
        Comida a la Vista &middot; Todos los dias de 8:00 AM a 2:00 PM
      </p>
    </section>
  );
}
