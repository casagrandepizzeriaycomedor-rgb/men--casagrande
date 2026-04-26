export default function InfoSection() {
  const schedules = [
    { day: 'Lunes a Sábado', hours: '8:00 AM - 9:00 PM' },
    { day: 'Domingo', hours: '8:00 AM - 9:00 PM' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-heading font-bold italic text-brand-brown dark:text-brand-cream mb-4">
        {'\uD83D\uDCCD'} Información
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Horario */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-brand-cream-dark dark:border-neutral-800 p-6">
          <h3 className="font-heading font-semibold text-brand-brown dark:text-brand-cream text-lg mb-3 flex items-center gap-2">
            {'\uD83D\uDD52'} Horario
          </h3>
          <ul className="space-y-2">
            {schedules.map((s) => (
              <li key={s.day} className="flex justify-between text-sm">
                <span className="text-brand-brown-light dark:text-brand-cream-dark">{s.day}</span>
                <span className="font-medium text-brand-green dark:text-brand-green-light">{s.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-brand-cream-dark dark:border-neutral-800">
            <p className="text-sm text-brand-red dark:text-brand-red-light font-medium">
              {'\uD83C\uDF7D\uFE0F'} Comida a la Vista: Todos los días de 8:00 AM a 2:00 PM
            </p>
            <p className="text-sm text-brand-green dark:text-brand-green-light font-medium mt-1">
              {'\uD83E\uDED3'} Pupusas: De 3:00 PM en adelante
            </p>
            <p className="text-sm text-brand-gold dark:text-brand-gold-light font-medium mt-1">
              {'\uD83C\uDF72'} Sopas: Miércoles y Domingos
            </p>
          </div>
        </div>

        {/* Ubicacion */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-brand-cream-dark dark:border-neutral-800 p-6">
          <h3 className="font-heading font-semibold text-brand-brown dark:text-brand-cream text-lg mb-3 flex items-center gap-2">
            {'\uD83D\uDCCD'} Ubicación
          </h3>
          <p className="text-sm text-brand-brown-light dark:text-brand-cream-dark leading-relaxed">
            Corinto, Departamento de Morazán, El Salvador
          </p>
          <div className="mt-4 pt-3 border-t border-brand-cream-dark dark:border-neutral-800">
            <h4 className="font-medium text-brand-brown dark:text-brand-cream text-sm mb-2">
              {'\uD83D\uDCDE'} Contacto
            </h4>
            <p className="text-sm text-brand-brown-light dark:text-brand-cream-dark">
              Llámanos o visítanos en el restaurante
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
