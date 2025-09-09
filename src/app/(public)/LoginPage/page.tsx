'use client';

import CustomInput from '@/app/components/Form';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
    router.push('/Dashboard');
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
          <h2 className="h4 mt-4 text-center leading-tight">
            Acesse sua conta
          </h2>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Input de Email */}
          <div>
            <CustomInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              placeholder="seu@email.com"
            />
          </div>

          {/* Campo de senha */}
          <div>
            <CustomInput
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              placeholder="Sua senha"
              endIcon={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="h-auto w-auto p-0 text-gray-500 hover:bg-transparent hover:text-gray-900"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </Button>
              }
            />
            <div className="mt-2 text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>

          <div>
            {/* Botão */}
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
            Login com google
          </Button>
        </div>
      </div>
    </section>
  );
}
