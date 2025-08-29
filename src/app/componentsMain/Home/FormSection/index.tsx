'use client';
import Image from 'next/image';
import CustomForm from '@/app/components/Form/index';
import MainButton from '@/app/components/Buttons/MainButton/index';
import { useState } from 'react';

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
        <div className="p-6 sm:p-8 rounded-xl shadow-md w-full bg-white h-full flex flex-col justify-between">
          <h2 className="h2 mb-8">Cadastro de Mercado</h2>

          <div className="grid grid-cols-1 gap-6 w-full">
            {/* Nome do mercado */}
            <CustomForm
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              label="Nome do varejo"
              type="text"
              placeholder="Mercado A"
            />

            {/* Email */}
            <CustomForm
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email de contato"
              type="email"
              placeholder="email@example.com"
            />

            {/* Cidade  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomForm
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                label="Cidade"
                type="text"
                placeholder="Belo Horizonte"
              />

              {/* Estado */}
              <CustomForm
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                label="Estado"
                type="text"
                placeholder="Ex: Minas Gerais"
              />
            </div>

            {/* Botão */}
            <MainButton
              size="lg"
              variant="default"
              styleType="primary"
              responsive={false}
              onClick={handleSubmit}
            >
              Cadastrar Mercado
            </MainButton>
          </div>
        </div>
      </form>
    </section>
  );
}
