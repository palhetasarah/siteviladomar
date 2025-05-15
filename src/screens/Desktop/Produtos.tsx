import React from "react";
import { Input } from "../../components/ui/input";
import { SearchIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";

const descricao = "Camarões frescos, selecionados e de alta qualidade, ideais para diversas receitas de frutos do mar. Trabalhamos com diferentes tamanhos e cortes para atender todos os gostos.";
const img = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";

const produtos = [
  { nome: "Camarão Rosa", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { nome: "Camarão Cinza", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
  { nome: "Camarão Sete Barbas", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { nome: "Camarão Descascado", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
  { nome: "Camarão Congelado", img: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80" },
];

const Produtos = ({ setPagina }: { setPagina?: (pagina: "home" | "produtos-catalogo" | "produtos-detalhe") => void }) => (
  <div className="bg-white min-h-screen relative overflow-hidden">
    <div className="absolute inset-0 z-0" style={{backgroundImage: 'url(/mask-group.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'blur(6px)', opacity: 0.8}}></div>
    <div className="relative z-10">
    {/* Cabeçalho igual ao da Home */}
    <div className="relative w-full h-[180px]">
      <img
        className="absolute w-[316px] h-32 top-[10px] left-[64px] object-cover"
        alt="Logo Vilas do Mar"
        src="/logo-vilas-do-mar-1.png"
      />
      <nav className="absolute top-[60px] left-[400px] flex space-x-[95px]">
        <span className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer" onClick={() => setPagina && setPagina("produtos-catalogo")}>Produtos</span>
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
    {/* Seção visual de destaque para Camarões */}
    <div className="relative flex items-center bg-white overflow-hidden mx-auto mb-12" style={{width: '100%', maxWidth: '1400px', height: '340px', backgroundImage: 'url(/linhas-textura.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="flex-1 flex flex-col items-center justify-center pl-24 z-10 h-full">
        <h1 className="text-6xl font-julius text-[#ed3237] drop-shadow-lg mb-8" style={{lineHeight: 1.1}}>
          CAMARÕES
        </h1>
        <div className="w-full flex justify-center gap-24">
          {/* Botão Pessoa Física */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-[#ed3237] flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
                  alt="Pessoa Física"
                  className="w-40 h-40 object-cover rounded-2xl z-10 shadow-lg"
                  style={{ position: 'relative' }}
                />
                {/* Círculos decorativos */}
                <div className="absolute w-8 h-8 bg-[#ed3237] rounded-full top-6 right-0 z-0 opacity-80"></div>
                <div className="absolute w-4 h-4 bg-[#ed3237] rounded-full bottom-6 left-6 z-0 opacity-80"></div>
              </div>
              <span className="mt-4 text-xl font-julius text-black text-center">PESSOA<br/>FÍSICA</span>
            </div>
          </motion.div>
          {/* Botão Pessoa Jurídica */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-[#ed3237] flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
                  alt="Pessoa Jurídica"
                  className="w-40 h-40 object-cover rounded-2xl z-10 shadow-lg"
                  style={{ position: 'relative' }}
                />
                {/* Círculos decorativos */}
                <div className="absolute w-8 h-8 bg-[#ed3237] rounded-full top-6 left-0 z-0 opacity-80"></div>
                <div className="absolute w-4 h-4 bg-[#ed3237] rounded-full bottom-6 right-6 z-0 opacity-80"></div>
              </div>
              <span className="mt-4 text-xl font-julius text-black text-center">PESSOA<br/>JURÍDICA</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex-[1.5] flex justify-end h-full z-0 relative">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-l from-white/10 via-white/0 to-transparent" style={{zIndex:2}}></div>
        <img
          src={img}
          alt="Camarões"
          className="h-full object-cover relative rounded-bl-[120px] rounded-tl-[80px] shadow-xl"
          style={{maxWidth:'100%', minWidth:'340px', zIndex:1, objectPosition: '60% 50%'}}
        />
      </div>
    </div>
    {/* Descrição centralizada */}
    <div className="w-full flex justify-center mb-12">
      <p className="text-lg text-gray-700 text-center max-w-2xl">{descricao}</p>
    </div>
    {/* Grid de produtos */}
    <main className="container mx-auto pb-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {produtos.map((prod) => (
          <div key={prod.nome} className="rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col items-center p-6 border border-gray-100">
            <div className="w-32 h-32 rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-gray-100">
              <img src={prod.img} alt={prod.nome} className="w-full h-full object-cover" />
            </div>
            <div className="text-lg font-semibold text-[#222] text-center">{prod.nome}</div>
          </div>
        ))}
      </div>
    </main>
    <footer className="bg-red-500 h-8 mt-8 rounded-t-lg"></footer>
    </div>
  </div>
);

export default Produtos; 