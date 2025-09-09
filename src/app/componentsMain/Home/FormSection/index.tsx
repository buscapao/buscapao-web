'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface FormProps {
  id: string;
}

export default function FormSection(props: FormProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const dadosForm = {
      nome,
      email,
      estado,
      cidade,
    };

    console.log(dadosForm);
  };

  return (
    <section
      id={props.id}
      className="bg-primary py-16 sm:py-20 md:py-24 sm:px-4 md:px-6"
    >
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {/* Coluna Imagem */}
        <div className="hidden md:block h-full">
          <Image
            src="/img/bg-main.png"
            width={500}
            height={500}
            alt="Cadastro de mercado"
            className="w-full h-full object-cover shadow-md rounded-xl"
          />
        </div>

        {/* Coluna Formulário */}
        <div className="p-6 sm:p-8 rounded-xl shadow-md w-full bg-card h-full flex flex-col justify-between">
          <h2 className="h2 mb-8">Cadastro de Mercado</h2>

          <div className="grid grid-cols-1 gap-6 w-full">
            {/* Nome do mercado */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Nome do varejo</Label>
              <Input
                className="bg-white"
                id="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                placeholder="Mercado A"
              />
            </div>

            {/* Email do mercado */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email do varejo</Label>
              <Input
                className="bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email@example.com"
              />
            </div>

            {/* Cidade  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cidade do mercado */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  className="bg-white"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  type="text"
                  placeholder="Belo Horizonte"
                />
              </div>

              {/* Estado */}

              {/* Cidade do mercado */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="estado">Estado</Label>
                <Input
                  className="bg-white"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  type="text"
                  placeholder="Ex: Minas Gerais"
                />
              </div>
            </div>

            {/* Botão */}
            <Button size="lg" variant="default" onClick={handleSubmit}>
              Cadastrar Mercado
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}
