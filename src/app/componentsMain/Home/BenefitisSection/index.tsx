import '@/app/style/globals.css';
import BenefitsItem from './Section_benefits_item';

interface BenefitsItemProps {
  id: string;
}

export default function BenefitisSection(props: BenefitsItemProps) {
  return (
    <section
      id={props.id}
      className="bg-primary py-16 sm:py-20 md:py-24 sm:px-4 md:px-6"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título */}
        <h2 className="h2 text-white sm:text-3xl font-bold mb-4 sm:mb-6">
          Benefícios para o seu mercado
        </h2>

        {/* Parágrafo */}
        <p className="p opacity-75 text-white mb-8 sm:mb-10 md:mb-12">
          Veja como sua loja pode crescer com a nossa plataforma:
        </p>

        {/* Itens */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10 text-left">
          <BenefitsItem
            title="✅ Cadastro gratuito"
            description="Entre na plataforma sem nenhum custo inicial."
          />
          <BenefitsItem
            title="📢 Visibilidade aumentada"
            description="Seja encontrado por mais clientes da sua cidade."
          />
          <BenefitsItem
            title="🛒 Venda online fácil"
            description="Venda direto pelo app, mesmo sem site próprio."
          />
          <BenefitsItem
            title="🔗 Integração com sistema"
            description="Integre com o sistema que você já usa no seu mercado."
          />
          <BenefitsItem
            title="🚚 Entregas por nós"
            description="Se você não entrega, nós entregamos por você."
          />
          <BenefitsItem
            title="🌟 Destaque suas promoções"
            description="Pague semanalmente para aparecer com ofertas na home."
          />
        </div>
      </div>
    </section>
  );
}
