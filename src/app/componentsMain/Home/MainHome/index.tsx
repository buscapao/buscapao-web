import React from 'react';
import Image from 'next/image';
import '@/app/style/globals.css';
import { Button } from '@/components/ui/button';

export default function MainHome() {
  return (
    <main className="bg-primary overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <div className="max-w-xl text-center md:text-left">
            {/* Título */}
            <h1 className="h1 text-primary-foreground sm:h2 md:h4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h1>

            {/* Parágrafo */}
            <p className="mt-3 sm:mt-4 md:mt-6 p  text-card opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            {/* Botão */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <Button size="lg" variant="secondary" className="text-primary">
                Lorem ipsum
              </Button>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <Image
          src="/img/bg-main.png"
          alt="hero"
          width={500}
          height={500}
          className="hidden md:block w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
