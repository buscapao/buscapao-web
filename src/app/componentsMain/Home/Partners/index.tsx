import { Marquee } from '@/components/eldoraui/marquee';
import Image from 'next/image';

const companies = [
  {
    name: '5 Estrelas',
    url: '/markets/5estrelas.png',
  },
  {
    name: 'Abc',
    url: '/markets/abc.png',
  },
  {
    name: 'Dada',
    url: '/markets/dada.png',
  },
  {
    name: 'Tonin',
    url: '/markets/tonin.png',
  },
  {
    name: 'JK',
    url: '/markets/jk.png',
  },
];

export function Partners() {
  return (
    <section id="logos" className="bg-white">
      <div className="container mx-auto px-4 py-8 md:px-8">
        <h3 className="text-center large text-sm font-semibold text-gray-500">
          Nossos parceiros já cadastrados
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((company, idx) => (
              <Image
                key={idx}
                width={80}
                height={50}
                src={company.url}
                className="h-10 w-28 opacity-40 grayscale dark:brightness-0 dark:invert"
                alt={company.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
