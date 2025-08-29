import '@/app/style/globals.css';

export default function PlansSection() {
  return (
    <section
      id="planos-destaque"
      className="py-16 sm:py-20 md:py-24 sm:px-4 md:px-6 bg-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Coluna Esquerda */}
        <div className="w-full">
          <h2 className="h2 mb-4 sm:mb-5">Planos de Destaque</h2>
          <p className="p opacity-75 mb-5 sm:mb-6">
            Destaque suas promoções e apareça para milhares de clientes logo na
            tela inicial do nosso aplicativo.
          </p>
          <ul className="space-y-3 p">
            <li>✅ De 5 a 10 produtos destacados</li>
            <li>✅ Aparece na tela inicial do app</li>
            <li>✅ Mais visibilidade e vendas</li>
            <li>✅ Pagamento semanal simples</li>
          </ul>
        </div>

        {/* Coluna Direita */}
        <div className="p-6 sm:p-8  rounded-2xl shadow-lg border bg-card w-full">
          <h3 className="h5-bold mb-4 sm:mb-5">Exemplo de Plano</h3>

          <div className="mb-6">
            <p className="p">Plano Básico – R$ XX/semana</p>
            <p className="p">Inclui até 5 produtos em destaque</p>
          </div>

          <hr className="my-6 border-gray-300" />

          <div>
            <p className="p mb-1">Plano Premium – R$ XX/semana</p>
            <p className="p">
              Inclui até 10 produtos em destaque + prioridade no app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
