import TopicItem from './Topic_itens';
import '@/app/style/globals.css';

interface TopicItensProps {
  id: string;
}

export default function AboutSection(props: TopicItensProps) {
  return (
    <article
      id={props.id}
      className="py-10 sm:py-20 md:py-24 sm:px-4 md:px-6 bg-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título */}
        <h2 className="h2 text-primary-black mb-4 sm:mb-6">Sobre o Projeto</h2>

        {/* Parágrafo */}
        <p className="p opacity-75 mb-8 sm:mb-10 md:mb-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          odit fugit atque rerum consequatur, expedita soluta voluptatum
          doloribus cum quidem amet enim natus tenetur unde quod, quasi et rem
          eius?
        </p>

        {/* Itens */}
        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
          <TopicItem
            title="🛒 Comparador de Preços"
            description="Veja o preço de um produto em todos os mercados da cidade e escolha a melhor opção."
          />
          <TopicItem
            title="🏬 Cadastro de Mercados"
            description="Cadastre seu comércio gratuitamente e ganhe visibilidade no app."
          />
          <TopicItem
            title="📦 Entrega ou Retirada"
            description="O cliente pode comprar e receber em casa ou retirar direto no mercado."
          />
          <TopicItem
            title="📊 Destaque suas Promoções"
            description="Pague um valor semanal e apareça com destaque na tela inicial do app."
          />
        </div>
      </div>
    </article>
  );
}
