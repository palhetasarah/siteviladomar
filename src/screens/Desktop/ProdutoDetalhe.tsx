import React from "react";
import { Input } from "../../components/ui/input";
import { SearchIcon } from "lucide-react";

interface ProdutoDetalheProps {
  nome: string;
  img: string;
  descricao: string;
  onVoltar?: () => void;
  onEmpresa?: () => void;
}

const ProdutoDetalhe = ({ nome, img, descricao, onVoltar, onEmpresa }: ProdutoDetalheProps) => (
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
      <nav className="absolute top-[60px] left-[400px] flex items-center space-x-[40px]">
        <button
          className="bg-[#ed3237] hover:bg-[#b91c1c] text-white font-bold py-2 px-6 rounded-full shadow transition-colors duration-200"
          onClick={onVoltar}
        >
          Início
        </button>
        <button
          className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer bg-transparent border-none outline-none px-2"
          style={{ background: 'none' }}
          onClick={onEmpresa}
        >
          Empresa
        </button>
        <span className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
          PRODUTOS
        </span>
      </nav>
    </div>
    {/* Seção visual moderna com fusão */}
    <div className="relative flex items-stretch bg-white overflow-hidden mx-auto mb-12" style={{width: '100%', maxWidth: '1100px', height: '320px'}}>
      {/* Texto à esquerda */}
      <div className="w-1/2 flex items-center justify-center z-10 h-full">
        <h1 className="text-5xl font-julius text-[#ed3237] drop-shadow-lg text-center" style={{lineHeight: 1.1}}>
          {nome}
        </h1>
      </div>
      {/* Imagem ocupa toda a metade direita */}
      <div className="w-1/2 relative h-full flex-shrink-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          borderTopLeftRadius: '60px',
          borderBottomLeftRadius: '100px',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
          zIndex: 1
        }}></div>
        {/* Gradiente/fusão branco */}
        <div className="absolute left-0 top-0 w-40 h-full pointer-events-none" style={{background: 'linear-gradient(to right, white 80%, transparent 100%)', zIndex: 2}}></div>
      </div>
    </div>
    {/* Descrição centralizada */}
    <div className="w-full flex justify-center mb-12">
      <p className="text-lg text-gray-700 text-center max-w-2xl">{descricao}</p>
    </div>
    {/* Grid de camarões específicos */}
    <div className="w-full flex justify-center mb-10">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {[
          {
            nome: "Camarão Rosa",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
            desc: "CAMARÃO VANNAMEI 100/120 DESC.\n3 X 6 KG\n15 KG"
          },
          {
            nome: "Camarão Cinza",
            img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
            desc: "CAMARÃO CINZA 80/100 DESC. CONG.\n3 X 5 KG\n15 KG"
          },
          {
            nome: "Camarão Sete Barbas",
            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
            desc: "CAMARÃO BELÉM - CVDE 60/70 EVISC. DESC.\n2 X 6 KG\n12 KG"
          },
          {
            nome: "Camarão Descascado",
            img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
            desc: "Produto selecionado e pronto para uso em diversas receitas."
          },
        ].map((prod) => (
          <div key={prod.nome} className="rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-200 flex flex-col items-center p-10 border border-gray-100 transform hover:scale-105 cursor-pointer group">
            <div className="w-40 h-40 rounded-2xl overflow-hidden mb-4 flex items-center justify-center bg-gray-100 group-hover:scale-110 transition-transform duration-300">
              <img src={prod.img} alt={prod.nome} className="w-full h-full object-cover" />
            </div>
            <div className="text-lg font-bold text-[#ed3237] text-center mb-2">{prod.nome}</div>
            <div className="text-sm text-gray-700 text-center whitespace-pre-line">{prod.desc}</div>
          </div>
        ))}
      </div>
    </div>
    {/* Botão WhatsApp e descrição */}
    <div className="w-full flex flex-col items-center mb-12">
      <div className="flex items-center gap-2 mb-4 text-lg text-[#1a237e]">
        <span role="img" aria-label="caixa">📦</span>
        Catálogo completo disponível! Clique para receber no WhatsApp
      </div>
      <a
        href="https://wa.me/SEUNUMEROAQUI"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 px-8 rounded-xl flex items-center gap-3 text-lg shadow-md transition-colors duration-200"
        style={{ boxShadow: '0 4px 24px 0 rgba(37,211,102,0.10)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/><path fill="#fff" fillRule="evenodd" d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.463 3.484 1.34 4.995L2.01 21.988l5.104-1.332a9.96 9.96 0 0 0 4.89 1.247h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.178-2.929-7.067-1.89-1.89-4.398-2.93-7.072-2.93zm-.003 17.995a8.96 8.96 0 0 1-4.563-1.25l-.327-.194-3.028.791.808-2.953-.213-.304a8.96 8.96 0 0 1-1.335-4.7c0-4.963 4.037-9 9-9 2.401 0 4.658.936 6.354 2.633a8.919 8.919 0 0 1 2.646 6.364c-.002 4.963-4.039 9-9.012 9z" clipRule="evenodd"/></svg>
        Fale conosco no WhatsApp
      </a>
    </div>
    <footer className="bg-red-500 h-8 mt-8 rounded-t-lg relative overflow-hidden" style={{backgroundImage: 'url(/mask-group.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'blur(2px)', opacity: 0.7}}></footer>
    </div>
  </div>
);

export default ProdutoDetalhe; 