import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [form, setForm] = useState({ nombre: '', fecha: '', hora: '', personas: '2' });

  if (!isOpen) return null;

  const buildWhatsAppUrl = () => {
    const mensaje = `Hola, quisiera hacer una reservación:\n- Nombre: ${form.nombre}\n- Fecha: ${form.fecha}\n- Hora: ${form.hora}\n- Personas: ${form.personas}`;
    return `https://wa.me/50370158609?text=${encodeURIComponent(mensaje)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), '_blank');
  };

  const handleClose = () => {
    setForm({ nombre: '', fecha: '', hora: '', personas: '2' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-2xl w-full max-w-md p-6 border border-brand-cream-dark dark:border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl leading-none"
        >
          &times;
        </button>

        <h2 className="text-xl font-heading font-bold italic text-brand-brown dark:text-brand-cream mb-4">
          Reservaciones
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fecha</label>
                <input
                  type="date"
                  required
                  value={form.fecha}
                  onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hora</label>
                <input
                  type="time"
                  required
                  value={form.hora}
                  onChange={(e) => setForm({ ...form, hora: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Personas</label>
              <select
                value={form.personas}
                onChange={(e) => setForm({ ...form, personas: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red outline-none transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
                <option value="Más de 10">Más de 10</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20bd5a] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Reservar por WhatsApp
            </button>
          </form>
      </div>
    </div>
  );
}
