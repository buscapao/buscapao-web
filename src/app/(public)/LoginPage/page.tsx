'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';

const EyeIcon = ({ closed }: { closed: boolean }) => {
    return closed ? <FaEyeSlash /> : <FaEye />;
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicionar validação básica aqui no futuro
    if (!email || !senha) {
      console.log('Por favor, preencha todos os campos.');
      return;
    }
    console.log('Email:', email);
    console.log('Senha:', senha);
    window.location.href = '/Dashboard';
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-6 text-center">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </Link>
          <h2 className="mt-4 text-center text-2xl font-bold leading-tight text-gray-900">
            Acesse sua conta
          </h2>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Input de Email */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email do varejo</Label>
            <Input
              id="email"
              className="bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          {/* Campo de senha */}
          <div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  className="bg-white"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-card-foreground"
                >
                  <EyeIcon closed={showPassword} />
                </button>
              </div>
            </div>

            <div className="mt-2 text-right">
              <a
                href="/forgot-password"
                className="small text-primary hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" className="block w-full">
              Entrar
            </Button>
          </div>
        </form>

        <div className="relative my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 flex-shrink text-sm font-medium text-gray-500">
            OU
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div>
          <Button className="block w-full" variant="outline">
            Login com Google
          </Button>
        </div>
      </div>
    </section>
  );
}
