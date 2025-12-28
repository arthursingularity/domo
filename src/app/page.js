"use client";

import ButtonComponent from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import TextComponent from "@/components/ui/TextComponent";
import { useState } from "react";

export default function Home() {
  const [widthExpanded, setWidthExpanded] = useState(false);
  const [heightExpanded, setHeightExpanded] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="text-center">
        <div className="heroSection md:mt-14 mt-2 flex md:w-[1200px] p-4">
          <div className="bg-primarySoft w-[545px] h-[545px] hidden md:block">
          </div>
          <div className="md:pl-10 space-y-3">
            <TextComponent type={"h1"} content={"Profissionais certos, na hora certa."} className={"text-left text-[48px]"} />
            <TextComponent type={"h2"} content={"Uma plataforma para contratar profissionais com confiança."} className={"text-left"} />
            <TextComponent type={"h3"} content={"Serviços, eventos, tecnologia, manutenção e muitos mais."} className={"text-left"} />
            <div className="mt-5">
              <div
                onClick={() => setWidthExpanded(true)}
                onTransitionEnd={(e) => {
                  if (e.propertyName === "width" && widthExpanded && !heightExpanded) {
                    setHeightExpanded(true);
                  }

                  if (e.propertyName === "height" && heightExpanded) {
                    setShowInputs(true);
                  }

                  if (e.propertyName === "height" && !heightExpanded) {
                    setWidthExpanded(false);
                  }
                }}
                className={`bg-primary text-white font-semibold text-[15px] p-2 space-y-3 transition-all ease-in-out duration-300 rounded-[41px]
              ${widthExpanded ? "md:w-[400px] w-full" : "w-[270px] buttonHover"}
              ${heightExpanded ? "h-[350px]" : "h-[50px]"}
            `}
              >
                <p className="transition-opacity duration-200 mt-[6px]">
                  {widthExpanded ? "O que você precisa?" : "Encontrar profissional"}
                </p>
                {showInputs && (
                  <div className={`divDosInputs bg-background p-3 rounded-[33px]`}>
                    <div className="space-y-3">
                      <InputComponent type={"text"} placeholder={"Profissional"} />
                      <InputComponent type={"text"} placeholder={"Cidade"} />
                      <InputComponent type={"text"} placeholder={"Quando"} />
                      <div className="flex justify-between">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowInputs(false);      // some instantaneamente
                            setHeightExpanded(false); // depois fecha o container
                          }}
                        >
                          <ButtonComponent
                            type={"secondary"}
                            content={"Fechar"}
                          />
                        </div>
                        <ButtonComponent type={"primary"} content={"Pesquisar"} />
                      </div>
                    </div>
                    <hr className="border-border mt-3" />
                    <TextComponent type={"body"} content={"Profissionais verificados, avaliações reais e pagamento seguro"} className={"mt-2"} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="profissionalCards bg-blackBg w-full p-4 md:hidden space-y-4 mt-4">
          <TextComponent type={"h15"} content={"Os melhores perto de você"} className={"text-white"}/>
          <div className="flex justify-center space-x-4">
            <div>
              <img
                className="w-[180px]"
                src="/imagens/card.png"
              />
            </div>
            <div>
              <img
                className="w-[180px]"
                src="/imagens/card2.png"
              />
            </div>
          </div>
        </div>
        <div className="comoFunciona p-4">
          <TextComponent type={"h15"} content={"Como a Domo funciona"} />
          <div>
            <TextComponent type={"h2"} content={"Passo 1"} />
            <TextComponent type={"h3"} content={"Encontre o profissional ideal"} />
            <TextComponent type={"body"} content={"Busque por serviço, cidade e disponibilidade."} />
          </div>
          <div>
            <TextComponent type={"h2"} content={"Passo 2"} />
            <TextComponent type={"h3"} content={"Combine com segurança"} />
            <TextComponent type={"body"} content={"Todas as informações ficam registradas na plataforma."} />
          </div>
          <div>
            <TextComponent type={"h2"} content={"Passo 3"} />
            <TextComponent type={"h3"} content={"Serviço concluído, pagamento liberado"} />
            <TextComponent type={"body"} content={"Mais segurança para clientes e profissionais."} />
          </div>
          <ButtonComponent type={"primary"} content={"Começar agora"} />
        </div>
        <div className="diferenciais p-4 bg-lightGray2">
          <TextComponent type={"h15"} content={"Nossos diferenciais"} />
          <TextComponent type={"h2"} content={"Por que escolher a Domo?"} />
          <div>
            <TextComponent type={"h3"} content={"Profissionais verificados"} />
            <TextComponent type={"body"} content={"Identidade validada para mais segurança na contratação."} />
          </div>
          <div>
            <TextComponent type={"h3"} content={"Avaliações reais"} />
            <TextComponent type={"body"} content={"Apenas clientes que contrataram podem avaliar."} />
          </div>
          <div>
            <TextComponent type={"h3"} content={"Pagamento liberado"} />
            <TextComponent type={"body"} content={"O pagamento é diretamente entre você e o profissional."} />
          </div>
          <div>
            <TextComponent type={"h3"} content={"Diagnóstico justo"} />
            <TextComponent type={"body"} content={"Ideal para serviços técnicos onde o problema não é claro."} />
          </div>
        </div>
        <div className="trabalheConosco p-4 bg-blackBg">
          <TextComponent type={"h15"} content={"Você é profissional? Trabalhe conosco!"} className={"text-white"}/>
          <TextComponent type={"h2"} content={"Encontre novos clientes, ganhe visibilidade e trabalhe com mais segurança."} className={"text-white"}/>
          <div>
            <TextComponent type={"h2"} content={"Benefícios"} className={"text-white"}/>
            <TextComponent type={"h3"} content={"Perfil verificado gera mais confiança"} className={"text-white"}/>
            <TextComponent type={"h3"} content={"Avaliações ajudam a conquistar novos clientes"} className={"text-white"}/>
            <TextComponent type={"h3"} content={"Atenda residências, empresas e eventos"} className={"text-white"}/>
            <ButtonComponent type={"primary"} content={"Cadastrar como profissional"} className={"text-white"}/>
          </div>
        </div>
        <div className="indique p-4 bg-lightGray2">
          <TextComponent type={"h15"} content={"Conhece um bom profissional?"} />
          <TextComponent type={"h2"} content={"Indique alguém de confiança e ajude a comunidade a crescer!"} />
          <ButtonComponent type={"primary"} content={"Indicar profissional"} />
        </div>
        <div className="perguntas p-4 space-y-3 text-left">
          <TextComponent type={"h15"} content={"Perguntas"} className={"text-center"}/>
          <div>
            <TextComponent type={"h3"} content={"A Domo é segura?"} />
            <TextComponent type={"body"} content={"Sim. Trabalhamos com profissionais qualificados, avaliações reais e pagamento protegido."} />
          </div>
          <div>
            <TextComponent type={"h3"} content={"Os profissionais são verificados?"} />
            <TextComponent type={"body"} content={"Sim. Os profissionais passam por um processo de verificação para aumentar a segurança."} />
          </div>
          <div>
            <TextComponent type={"h3"} content={"Como funciona o pagamento?"} />
            <TextComponent type={"body"} content={"O pagamento funciona diretamente entre o cliente e o profissional, sem qualquer interferência da plataforma."} />
          </div>
          <div>
            <TextComponent type={"h3"} content={"Tenha uma empresa, posso contratar mesmo assim?"} />
            <TextComponent type={"body"} content={"Sim. A Domo possui profissionais que atendem residências, empresas e eventos."} />
          </div>
          <div>
            <TextComponent type={"h3"} content={"E se eu não gostar do serviço?"} />
            <TextComponent type={"body"} content={"Você pode avaliar o profissional ou entrar em contato com o nosso suporte."} />
          </div>
        </div>
        <footer>
          <TextComponent type={"body"} content={"Domo © 2025"} />
          <TextComponent type={"body"} content={"Termos de Uso"} />
          <TextComponent type={"body"} content={"Política de Privacidade"} />
          <TextComponent type={"body"} content={"Contato"} />
        </footer>
      </div>
    </div>
  );
}