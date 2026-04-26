import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const socials = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://www.facebook.com/profile.php?id=100063698741822',
    handle: 'Casa Grande Pizzeria y Comedor',
    iconColor: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10 hover:bg-blue-500/20',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/50370158609',
    handle: '+503 7015-8609',
    iconColor: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10 hover:bg-green-500/20',
  },
];

export default function SocialSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-heading font-bold italic text-brand-brown dark:text-brand-cream mb-4">
        {'\uD83D\uDCF1'} Siguenos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-5 rounded-xl border border-brand-cream-dark dark:border-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${social.bg}`}
          >
            <social.icon className={`text-3xl ${social.iconColor}`} />
            <div>
              <p className="font-heading font-semibold text-brand-brown dark:text-brand-cream">{social.name}</p>
              <p className="text-xs text-brand-brown-light/70 dark:text-brand-cream-dark/70">{social.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
