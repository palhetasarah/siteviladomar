import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { motion } from "framer-motion";
import Produtos from "./Produtos";
import ProdutosCatalogo from "./ProdutosCatalogo";

export const Home = (): JSX.Element => {
  const [pagina, setPagina] = React.useState<"home" | "produtos-catalogo" | "produtos-detalhe">("home");
  const navItems = [
    { label: "Empresa", href: "#empresa" },
    { label: "Produto", href: "#produto" },
    { label: "Localização", href: "#localizacao" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  if (pagina === "produtos-catalogo") {
    return <ProdutosCatalogo onEmpresa={() => setPagina("home")} />;
  }
  if (pagina === "produtos-detalhe") {
    return <Produtos setPagina={setPagina} />;
  }

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[3928px] relative">
        <div className="relative w-[1908px] h-[4169px] -top-[241px] -left-[302px]">
          <img
            className="absolute w-[1440px] h-[2282px] top-[241px] left-[302px]"
            alt="Background pattern"
            src="/mask-group.png"
          />

          <div className="absolute w-[954px] h-[1290px] top-0 left-[954px]">
            <div className="relative h-[1290px]">
              <motion.div 
                className="w-[442px] h-[442px] top-[848px] left-[512px] rounded-[221px] absolute bg-[#ed3237]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="w-[941px] h-[941px] top-0 left-0 rounded-[470.5px] absolute bg-[#ed3237]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>

          <div className="absolute w-[1599px] h-[994px] top-[1881px] left-[309px]">
            <div className="absolute w-[334px] h-[275px] top-[428px] left-[212px]">
              <img
                className="absolute w-[291px] h-[275px] top-0 left-[43px]"
                alt="Decorative object"
                src="/objects.svg"
              />
              <img
                className="absolute w-[43px] h-[49px] top-[73px] left-0"
                alt="Decorative object"
                src="/objects-8.svg"
              />
            </div>

            <img
              className="absolute w-[170px] h-[179px] top-[595px] left-[949px]"
              alt="Decorative object"
              src="/objects-7.svg"
            />

            <div className="absolute w-[166px] h-[161px] top-[831px] left-[145px]">
              <img
                className="absolute w-[154px] h-[161px] top-0 left-0"
                alt="Decorative object"
                src="/objects-15.svg"
              />
              <img
                className="absolute w-[31px] h-[31px] top-[95px] left-[135px]"
                alt="Decorative object"
                src="/objects-2.svg"
              />
            </div>

            <div className="absolute w-[196px] h-[213px] top-[555px] left-[1218px] bg-[url(/objects-22.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[31px] h-[31px] top-[168px] left-[50px]"
                alt="Decorative object"
                src="/objects-2.svg"
              />
            </div>

            <img
              className="absolute w-[222px] h-[361px] top-12 left-[1211px]"
              alt="Decorative object"
              src="/objects-19.svg"
            />

            <img
              className="absolute w-[143px] h-[115px] top-[453px] left-[615px]"
              alt="Decorative object"
              src="/objects-20.svg"
            />

            <img
              className="absolute w-[143px] h-[115px] top-[388px] left-0"
              alt="Decorative object"
              src="/objects-6.svg"
            />

            <img
              className="absolute w-[117px] h-[131px] top-[214px] left-[1015px]"
              alt="Decorative object"
              src="/objects-16.svg"
            />

            <img
              className="absolute w-[117px] h-[131px] top-[631px] left-[747px]"
              alt="Decorative object"
              src="/objects-16.svg"
            />

            {[
              { top: "351px", left: "515px" },
              { top: "0", left: "775px" },
              { top: "373px", left: "1107px" },
              { top: "840px", left: "1219px" },
              { top: "609px", left: "100px" },
            ].map((pos, index) => (
              <img
                key={`obj-3-${index}`}
                className={`absolute w-[83px] h-[74px] top-[${pos.top}] left-[${pos.left}]`}
                alt="Decorative object"
                src="/objects-3.svg"
              />
            ))}

            {[
              { top: "522px", left: "1100px" },
              { top: "659px", left: "546px" },
              { top: "101px", left: "660px" },
              { top: "945px", left: "1357px" },
              { top: "768px", left: "117px" },
            ].map((pos, index) => (
              <img
                key={`obj-8-${index}`}
                className={`absolute w-[43px] h-[49px] top-[${pos.top}] left-[${pos.left}]`}
                alt="Decorative object"
                src="/objects-8.svg"
              />
            ))}

            <img
              className="absolute w-[31px] h-[31px] top-[462px] left-[1369px]"
              alt="Decorative object"
              src="/objects-2.svg"
            />

            <img
              className="absolute w-[31px] h-[31px] top-[170px] left-[806px]"
              alt="Decorative object"
              src="/objects-2.svg"
            />
          </div>

          <motion.img
            className="absolute w-[831px] h-[835px] top-[427px] left-[911px] object-cover"
            alt="Product showcase"
            src="/dddddd-1.png"
            {...fadeIn}
          />

          <div className="absolute w-[1440px] h-[271px] top-[241px] left-[302px] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(240,240,240,0)_100%)]" />

          <motion.img
            className="absolute w-[316px] h-32 top-[250px] left-[364px] object-cover"
            alt="Logo Vilas do Mar"
            src="/logo-vilas-do-mar-1.png"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <nav className="absolute top-[305px] left-[765px] flex space-x-[95px]">
            <span
              className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer"
              onClick={() => setPagina("home")}
            >
              Empresa
            </span>
            <span
              className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer"
              onClick={() => setPagina("produtos-catalogo")}
            >
              Produto
            </span>
            <span
              className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ed3237] transition-colors cursor-pointer"
              onClick={() => setPagina("home")}
            >
              Localização
            </span>
          </nav>

          <motion.div 
            className="absolute top-[308px] left-[1466px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Input
                className="w-[175px] h-7 bg-[#ececec] rounded-[20px] border-none"
                placeholder="Pesquisar..."
              />
              <SearchIcon className="absolute w-[18px] h-[18px] top-1.5 right-3 text-gray-500" />
            </div>
          </motion.div>

          <motion.section 
            className="absolute top-[678px] left-[401px] w-[422px]"
            {...fadeIn}
          >
            <h2 className="[font-family:'Julius_Sans_One',Helvetica] text-[64px] font-normal text-black tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit
            </h2>
            <p className="mt-10 [font-family:'Junge',Helvetica] text-xl font-normal text-black tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.section>

          <motion.section 
            className="absolute top-[1491px] left-[1220px] w-[422px] text-right"
            {...fadeIn}
          >
            <h2 className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-black text-[64px] tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit
            </h2>
            <p className="mt-10 [font-family:'Junge',Helvetica] text-xl font-normal text-black tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.section>

          <div className="absolute w-[1013px] h-[905px] top-[1279px] left-[103px]">
            <div className="relative h-[905px]">
              <motion.div 
                className="w-[861px] h-[868px] top-[37px] left-0 rounded-[430.5px/434px] absolute bg-[#ed3237]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="w-[442px] h-[442px] top-0 left-[571px] rounded-[221px] absolute bg-[#ed3237]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>

          <div className="absolute w-[1258px] h-[1188px] top-[996px] left-0">
            <motion.img
              className="absolute w-[969px] h-[1199px] top-0 left-[302px] object-cover"
              alt="Product showcase"
              src="/prancheta-122-1.png"
              {...fadeIn}
            />
          </div>

          <motion.div
            className="absolute w-[360px] h-[67px] top-[1920px] left-[1282px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Button className="w-full h-full rounded-[31px] border-[3px] border-solid border-[#ed3237] bg-transparent hover:bg-[#ed3237] hover:text-white transition-colors group">
              <span className="absolute left-[30px] [font-family:'Julius_Sans_One',Helvetica] font-normal text-[#ed3237] text-[32px] text-right tracking-[0] leading-[normal] whitespace-nowrap group-hover:text-white transition-colors">
                Lorem ipsum
              </span>
              <div className="absolute w-[54px] h-[54px] top-[3px] right-[22px] flex items-center justify-center">
                <div className="relative w-[45px] h-[45px] rounded-full border-2 border-[#ed3237] flex items-center justify-center group-hover:bg-white transition-colors">
                  <img
                    className="w-[11px] h-[18px]"
                    alt="Arrow"
                    src="/group-2.png"
                  />
                </div>
              </div>
            </Button>
          </motion.div>

          <img
            className="absolute w-[1440px] h-[1324px] top-[2845px] left-[302px]"
            alt="Background pattern"
            src="/mask-group-1.png"
          />

          <motion.section 
            className="absolute top-[2783px] left-[582px] w-[889px] flex flex-col items-center"
            {...fadeIn}
          >
            <h2 className="[font-family:'Julius_Sans_One',Helvetica] text-[64px] text-center font-normal text-black tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="mt-10 w-[675px] [font-family:'Junge',Helvetica] text-xl text-center font-normal text-black tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.section>

          {/* Botões Pessoa Física e Jurídica - agora acima do LOREM IPSUM */}
          <motion.div 
            className="absolute top-[2650px] left-1/2 transform -translate-x-1/2 w-full flex justify-center gap-[120px] z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Botão Pessoa Física */}
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-[#ed3237] flex items-center justify-center relative">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
                    alt="Pessoa Física"
                    className="w-32 h-32 object-cover rounded-2xl z-10 shadow-lg"
                    style={{ position: 'relative' }}
                  />
                  <div className="absolute w-6 h-6 bg-[#ed3237] rounded-full top-4 right-0 z-0 opacity-80"></div>
                  <div className="absolute w-3 h-3 bg-[#ed3237] rounded-full bottom-4 left-4 z-0 opacity-80"></div>
                </div>
                <span className="mt-3 text-lg font-julius text-black text-center">PESSOA<br/>FÍSICA</span>
              </div>
            </div>
            {/* Botão Pessoa Jurídica */}
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-[#ed3237] flex items-center justify-center relative">
                  <img
                    src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
                    alt="Pessoa Jurídica"
                    className="w-32 h-32 object-cover rounded-2xl z-10 shadow-lg"
                    style={{ position: 'relative' }}
                  />
                  <div className="absolute w-6 h-6 bg-[#ed3237] rounded-full top-4 left-0 z-0 opacity-80"></div>
                  <div className="absolute w-3 h-3 bg-[#ed3237] rounded-full bottom-4 right-4 z-0 opacity-80"></div>
                </div>
                <span className="mt-3 text-lg font-julius text-black text-center">PESSOA<br/>JURÍDICA</span>
              </div>
            </div>
          </motion.div>

          <div className="absolute w-[317px] h-[233px] top-[3787px] left-[868px]">
            <div className="relative h-[233px]">
              <img
                className="absolute w-48 h-[210px] top-[23px] left-0"
                alt="Decorative object"
                src="/objects-4.svg"
              />
              <img
                className="absolute w-48 h-[210px] top-0 left-[125px]"
                alt="Decorative object"
                src="/objects-1.svg"
              />
            </div>
          </div>

          <motion.footer 
            className="absolute w-[1436px] h-[78px] top-[4091px] left-[306px] bg-[#ed3237] rounded-[60px_60px_0px_0px] overflow-hidden"
            style={{backgroundImage: 'url(/mask-group.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
};