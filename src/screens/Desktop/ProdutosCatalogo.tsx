import React from "react";
import { Input } from "../../components/ui/input";
import { SearchIcon } from "lucide-react";
import ProdutoDetalhe from "./ProdutoDetalhe";

const categorias = [
  { nome: "CAMARÕES", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { nome: "POLVO", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
  { nome: "PEIXES", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { nome: "OUTROS", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
  { nome: "FRUTOS DO MAR", img: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80" },
  { nome: "CONGELADOS", img: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80" },
];

const descricoes = {
  "CAMARÕES": "Camarões frescos, selecionados e de alta qualidade, ideais para diversas receitas de frutos do mar.",
  "POLVO": "Polvo macio e saboroso, perfeito para pratos mediterrâneos e receitas sofisticadas.",
  "PEIXES": "Peixes variados, frescos e congelados, para garantir sabor e saúde em sua mesa.",
  "OUTROS": "Outros frutos do mar e pescados especiais para completar seu cardápio.",
  "FRUTOS DO MAR": "Seleção especial de frutos do mar para pratos incríveis e sofisticados.",
  "CONGELADOS": "Produtos congelados para praticidade e qualidade no seu dia a dia.",
};

const ProdutosCatalogo = ({ onEmpresa }: { onEmpresa?: () => void }) => {
  const [detalhe, setDetalhe] = React.useState<null | typeof categorias[0]>(null);
  if (detalhe) {
    return (
      <ProdutoDetalhe
        nome={detalhe.nome}
        img={detalhe.img}
        descricao={descricoes[detalhe.nome as keyof typeof descricoes]}
        onVoltar={() => setDetalhe(null)}
        onEmpresa={() => {
          setDetalhe(null);
          if (onEmpresa) onEmpresa();
        }}
      />
    );
  }
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{backgroundImage: 'url(/mask-group.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'blur(6px)', opacity: 0.5}}></div>
      <div className="relative z-10">
      {/* Cabeçalho igual ao da Home */}
      <div className="relative w-full h-[180px]">
        <img
          className="absolute w-[316px] h-32 top-[10px] left-[64px] object-cover"
          alt="Logo Vilas do Mar"
          src="/logo-vilas-do-mar-1.png"
        />
        <nav className="absolute top-[60px] left-[400px] flex space-x-[95px]">
          <span className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer">Empresa</span>
          <span className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer">Produto</span>
          <span className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer">Localização</span>
        </nav>
        <div className="absolute top-[63px] right-[64px]">
          <div className="relative">
            <Input
              className="w-[175px] h-7 bg-[#ececec] rounded-[20px] border-none"
              placeholder="Pesquisar..."
            />
            <SearchIcon className="absolute w-[18px] h-[18px] top-1.5 right-3 text-gray-500" />
          </div>
        </div>
      </div>
      {/* Seção de destaque com imagem e título */}
      <div className="relative flex items-center bg-white overflow-hidden mx-auto" style={{width: '1760.83px', height: '793.62px', backgroundImage: 'url(/linhas-textura.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="flex-1 flex items-center pl-24 z-10 h-full">
          <h1 className="text-6xl font-julius text-black" style={{lineHeight: 1.1}}>
            NOSSOS<br />PRODUTOS
          </h1>
        </div>
        <div className="flex-[1.5] flex justify-end h-full z-0 relative">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-l from-white/10 via-white/0 to-transparent" style={{zIndex:2}}></div>
          <img
            src="/Mask group.png"
            alt="Frutos do mar"
            className="h-full object-cover relative"
            style={{maxWidth:'100%', minWidth:'600px', zIndex:1, objectPosition: '55% 50%'}}
          />
        </div>
      </div>
      {/* Blocos de categorias de produtos */}
      <main className="container mx-auto py-16 flex flex-wrap justify-center gap-12">
        {categorias.map((cat, i) => (
          <div
            key={cat.nome}
            className={
              "w-72 h-72 rounded-3xl flex flex-col items-center justify-center bg-white text-[#222] text-2xl font-bold cursor-pointer transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border border-gray-100 group"
            }
            style={{boxShadow: '0 8px 32px 0 rgba(237,50,55,0.10)'}}
            onClick={() => setDetalhe(cat)}
          >
            <div className="w-28 h-28 rounded-2xl overflow-hidden mb-4 flex items-center justify-center bg-gray-100 group-hover:scale-110 transition-transform duration-300">
              <img src={cat.img} alt={cat.nome} className="w-full h-full object-cover" />
            </div>
            <div className="text-center text-lg font-semibold text-[#222] group-hover:text-[#ed3237] transition-colors duration-200">{cat.nome}</div>
          </div>
        ))}
      </main>
      <footer className="bg-red-500 h-8 mt-8 rounded-t-lg relative overflow-hidden" style={{backgroundImage: 'url(/mask-group.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'blur(2px)', opacity: 0.7}}></footer>
      </div>
    </div>
  );
};

export default ProdutosCatalogo; 