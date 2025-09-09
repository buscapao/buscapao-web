'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiPost } from '@/services/api';
import { RetailerPost } from '@/types/retailer';
import { Button } from '@/components/ui/button';
import { FaSave } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function NewRetail() {
  const router = useRouter();

  // Armazena os dados do formulário
  const [formData, setFormData] = useState<RetailerPost>({
    name: '',
    legalName: '',
    Document: '',
    email: '',
    phone: '',
    stateRegistration: '',
  });

  // Atualiza os dados do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Envia o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Chamada à API para criar um novo varejo
      await apiPost('/v1/backoffice/retails', formData);

      // Alerta de sucesso
      toast.success('Varejo criado com sucesso!', {
        className: 'bg-green-100 text-green-900 border-green-200',
        classNames: {
            actionButton: 'bg-green-700 hover:bg-green-800 text-white'
        }
      });

      // Redirecionamento para a lista de varejos
      router.push('/Dashboard/RetailList');
    } catch (error) {
      // Tratamento de erro
      console.error('Erro ao criar varejo:', error);

      // Alerta de erro com estilo e botão personalizados
      toast.error('Erro ao criar varejo!', {
        description: 'Não foi possível salvar os dados. Tente novamente.',
        className: 'bg-red-100 text-red-900 border-red-200',
        action: {
          label: 'Fechar',
          onClick: () => {},
        },
        classNames: {
          error: 'bg-red-100 text-red-900 border-red-200',
          actionButton:
            'bg-red-700 text-red-100 hover:bg-red-800 hover:text-white',
        },
      });
    }
  };

  // Renderização do componente
  return (
    <div className="p-4 m-4 border rounded-xl bg-card">
      <form onSubmit={handleSubmit}>
        {/* Título e descrição do formulário */}
        <h4 className="h4">Novo Varejo</h4>
        <p className="p mb-2">
          Preencha os dados abaixo para cadastrar um novo varejo.
        </p>

        {/* Container para os campos do formulário */}
        <div className="p-2 bg-white border rounded-xl">
          {/* Grupo de campos: Nome e Nome Fantasia */}
          <div className="flex flex-col gap-2 md:flex-row">
            {/* Campo de nome */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Digite o nome do varejo"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Campo de nome fantasia */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="legalName">Nome fantasia</Label>
              <Input
                id="legalName"
                placeholder="Digite o nome fantasia"
                type="text"
                name="legalName"
                value={formData.legalName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Grupo de campos: Documento e Inscrição Estadual */}
          <div className="flex flex-col gap-2 pt-2 md:flex-row">
            {/* Campo de Documento */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="Document">Documento</Label>
              <Input
                id="Document"
                placeholder="Digite o CNPJ do varejo"
                type="text"
                name="Document"
                value={formData.Document}
                onChange={handleChange}
              />
            </div>
            {/* Campo de Inscrição Estadual */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="stateRegistration">Inscrição estadual</Label>
              <Input
                id="stateRegistration"
                placeholder="ex: 123456789"
                type="text"
                name="stateRegistration"
                value={formData.stateRegistration || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Grupo de campos: Email e Telefone */}
          <div className="flex flex-col gap-2 pt-2 md:flex-row">
            {/* Campo de Email */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Digite o email do varejo"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* Campo de Telefone */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                placeholder="Digite o telefone do varejo"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Botão de submissão do formulário */}
        <Button type="submit" className="mt-4">
          <FaSave className="mr-2" />
          Salvar
        </Button>
      </form>
    </div>
  );
}
