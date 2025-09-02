import MainButton from '@/app/components/Buttons/MainButton';
import CustomInput from '@/app/components/Form';

export default function NewRetail() {
  return (
    <div className="p-4 bg-card border rounded-xl m-4">
      <div>
        <h4 className="h4">Novo Atacado</h4>
        <p className="p mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quam
          facilis unde?
        </p>

        <div className="bg-white border rounded-xl p-2">
          {/* Grupo 01 de campos*/}
          <div className="flex flex-col md:flex-row gap-2">
            {/* campo de nome */}
            <CustomInput
              label="Nome"
              placeholder="Digite o nome do varejo"
              type="text"
              className="flex-1"
            />
            {/* campo de nome fantasia */}
            <CustomInput
              label="Nome fantasia"
              placeholder="Digite o nome fantasia do varejo"
              type="text"
              className="flex-1"
            />
          </div>

          {/* Grupo 02 de campos*/}
          <div className="flex flex-col md:flex-row gap-2 pt-2">
            {/* campo de documento */}
            <CustomInput
              label="Documento"
              placeholder="Digite o CNPJ do varejo"
              type="number"
              //colocar formatação de cnpj
              className="flex-1"
            />
            {/* campo de nome Inscrição estadual */}
            <CustomInput
              label="Inscrição estadual"
              placeholder="ex: 123456789"
              type="number"
              className="flex-1"
            />
          </div>

          {/* Grupo 03 de campos*/}
          <div className="flex flex-col md:flex-row gap-2 pt-2">
            {/* campo de nome */}
            <CustomInput
              label="Email"
              placeholder="Digite o email do varejo"
              type="email"
              className="flex-1"
            />
            {/* campo de nome fantasia */}
            <CustomInput
              label="Telefone"
              placeholder="Digite o telefone do varejo"
              type="phone"
              className="flex-1"
            />
          </div>
          {/* fim*/}
        </div>

        <MainButton className="mt-4">Salvar</MainButton>
      </div>
    </div>
  );
}
