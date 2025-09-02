'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainButton from '@/app/components/Buttons/MainButton';
import CustomInput from '@/app/components/Form';
import { apiPost } from '@/services/api';
import { RetailerPost } from '@/types/retailer';

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

  // Não envia
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Log para depuração dos dados que estão sendo enviados
      console.log('Enviando dados:', formData);
      // Chamada à API para criar um novo varejo
      const response = await apiPost('/v1/backoffice/retails', formData);
      // Log para depuração da resposta da API
      console.log('Varejo criado com sucesso:', response);
      console.log(response);

      // Alerta de sucesso e redirecionamento para a lista de varejos
      alert('Varejo cadastrado com sucesso!');
      router.push('/Dashboard/RetailList');
    } catch (error) {
      // Tratamento de erro em caso de falha na chamada da API
      console.error('Erro ao criar varejo:', error);
      alert('Erro ao cadastrar varejo. Verifique o console.');
    }
  };

  // Renderização do componente
  return (
    <div className="p-4 bg-card border rounded-xl m-4">
      <form onSubmit={handleSubmit}>
        {/* Título e descrição do formulário */}
        <h4 className="h4">Novo Varejo</h4>
        <p className="p mb-2">
          Preencha os dados abaixo para cadastrar um novo varejo.
        </p>

        {/* Container para os campos do formulário */}
        <div className="bg-white border rounded-xl p-2">
          {/* Grupo de campos: Nome e Nome Fantasia */}
          <div className="flex flex-col md:flex-row gap-2">
            <CustomInput
              label="Nome"
              placeholder="Digite o nome do varejo"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1"
            />
            <CustomInput
              label="Nome fantasia"
              placeholder="Digite o nome fantasia do varejo"
              type="text"
              name="legalName"
              value={formData.legalName}
              onChange={handleChange}
              className="flex-1"
            />
          </div>

          {/* Grupo de campos: Documento e Inscrição Estadual */}
          <div className="flex flex-col md:flex-row gap-2 pt-2">
            <CustomInput
              label="Documento"
              placeholder="Digite o CNPJ do varejo"
              type="text"
              name="Document"
              value={formData.Document}
              onChange={handleChange}
              className="flex-1"
            />
            <CustomInput
              label="Inscrição estadual"
              placeholder="ex: 123456789"
              type="text"
              name="stateRegistration"
              value={formData.stateRegistration || ''}
              onChange={handleChange}
              className="flex-1"
            />
          </div>

          {/* Grupo de campos: Email e Telefone */}
          <div className="flex flex-col md:flex-row gap-2 pt-2">
            <CustomInput
              label="Email"
              placeholder="Digite o email do varejo"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1"
            />
            <CustomInput
              label="Telefone"
              placeholder="Digite o telefone do varejo"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1"
            />
          </div>
        </div>

        {/* Botão de submissão do formulário */}
        <MainButton type="submit" className="mt-4">
          Salvar
        </MainButton>
      </form>
    </div>
  );
}
