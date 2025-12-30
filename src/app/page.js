"use client";

import Link from "next/link";
import ButtonComponent from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import TextComponent from "@/components/ui/TextComponent";
import { useState } from "react";

export default function Home() {
  const [widthExpanded, setWidthExpanded] = useState(false);
  const [heightExpanded, setHeightExpanded] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div>
      <div className="flex justify-center">
        <div className="heroSection md:mt-10 flex p-7">
          <div className="bg-primarySoft w-[525px] h-[525px] hidden md:block">
          </div>
          <div className="md:pl-10 space-y-3 md:w-[700px]">
            <TextComponent type={"h1"} content={"Profissionais certos, na hora certa."} className={"text-left text-[48px]"} />
            <TextComponent type={"body"} content={"Encontre e contrate profissionais de diversas categorias em uma plataforma segura e confiável."} className={"text-left"} />
            <div className="inputsDiv mt-5">
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
                            ${widthExpanded ? "md:w-[400px] w-full" : "w-[280px] buttonHover"}
                            ${heightExpanded ? "h-[283px]" : "h-[50px]"}
                          `}
              >
                <p className="transition-opacity duration-200 mt-[6px] text-center">
                  {widthExpanded ? "O que você precisa?" : "Encontrar profissional"}
                </p>
                {showInputs && (
                  <div className={`bg-background p-3 rounded-[33px]`}>
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profissionalCards bg-lightGray2 w-full p-7 md:hidden space-y-3">
        <div className="flex justify-center space-x-3">
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card3.png"
            />
          </div>
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card5.png"
            />
          </div>
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card.png"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card4.png"
            />
          </div>
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card2.png"
            />
          </div>
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card6.png"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card7.png"
            />
          </div>
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card5.png"
            />
          </div>
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card.png"
            />
          </div>
        </div>
      </div>
      <div className="comoFunciona p-7 w-full md:flex md:justify-center">
        <div>
          <TextComponent type={"sectionTitle"} content={"Entenda como a Domo funciona"} className={"pb-7"} />
          <div className="flex justify-center">
            <div className="space-y-7">
              <div className="card1 bg-lightGray2 border-border border rounded-[37px] max-w-[430px] h-[190px] flex justify-between overflow-hidden">
                <div className="space-y-3 pt-5 pl-5">
                  <TextComponent type={"h3"} content={"1 - Conte o que você precisa"} />
                  <TextComponent type={"body"} content={"Informe o tipo de serviço, sua cidade e quando precisa do atendimento."} />
                </div>
                <img src="/imagens/pass1.png" className="object-contain pt-5 pr-4 pl-4" />
              </div>
              <div className="card2 bg-lightGray2 border-border border rounded-[37px] max-w-[430px] h-[190px] flex justify-between overflow-hidden">
                <div className="space-y-3 pt-5 pl-5">
                  <TextComponent type={"h3"} content={"2 - Escolha o profissional"} />
                  <TextComponent type={"body"} content={"Compare e selecione o profissional que melhor atende sua necessidade."} />
                </div>
                <img src="/imagens/pass1.png" className="object-contain pt-5 pr-4 pl-4" />
              </div>
              <div className="card3 bg-lightGray2 border-border border rounded-[37px] max-w-[430px] h-[190px] flex justify-between overflow-hidden">
                <div className="space-y-3 pt-5 pl-5">
                  <TextComponent type={"h3"} content={"3 - Serviço realizado"} />
                  <TextComponent type={"body"} content={"O profissional vai até você e realiza o serviço conforme combinado."} />
                </div>
                <img src="/imagens/pass1.png" className="object-contain pt-5 pr-4 pl-4" />
              </div>
              <div className="card4 bg-lightGray2 border-border border rounded-[37px] max-w-[430px] h-[190px] flex justify-between overflow-hidden">
                <div className="space-y-3 pt-5 pl-5">
                  <TextComponent type={"h3"} content={"4 - Finalize com tranquilidade"} />
                  <TextComponent type={"body"} content={"Pague diretamente ao profissional após a conclusão do serviço."} />
                </div>
                <img src="/imagens/pass1.png" className="object-contain pt-5 pr-4 pl-4" />
              </div>
              <div className="flex justify-center">
                <ButtonComponent type={"primary"} content={"Começar agora"} className={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="diferenciais p-7 bg-lightGray2 w-full space-y-5">
        <TextComponent type={"h3"} content={"Nossos diferenciais"} className={"text-primary"} />
        <TextComponent type={"sectionTitle"} content={"Por que escolher a Domo?"} />
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
      <div className="trabalheConosco p-7 bg-blackBg w-full">
        <TextComponent type={"sectionTitle"} content={"Você é um profissional autônomo ou possui um negócio? Trabalhe conosco!"} className={"text-white"} />
        <TextComponent type={"h3"} content={"Encontre novos clientes, ganhe visibilidade e trabalhe com mais segurança."} className={"text-textSecondaryDark mt-3"} />
        <Link href={"/profissionais"}>
        <ButtonComponent type={"primary"} content={"Entender melhor"} className={"mt-7"} />
        </Link>
        
      </div>
      <div className="indique p-7 w-full space-y-5">
        <TextComponent type={"h3"} content={"Conhece um bom profissional?"} className={"text-primary"} />
        <TextComponent type={"sectionTitle"} content={"Indique alguém de confiança e ajude a comunidade a crescer!"} />
        <TextComponent type={"body"} content={"Ao indicar um profissional para a nossa plataforma, você ajuda"} />
        <ButtonComponent type={"primary"} content={"Indicar profissional"} />
      </div>
      <div className="perguntas p-7 bg-lightGray2 space-y-5 text-left w-full">
        <TextComponent type={"h2"} content={"Perguntas"} />
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
      <footer className="bg-lightGray2 pb-10 w-full">
        <div className="flex justify-center">
          <hr className="border-border w-[90%]" />
        </div>
        <div className="p-7 space-y-2">
          <img src="/imagens/domoIcon.png" className="w-[40px] pb-3" />
          <TextComponent type={"lead"} content={"© 2025 Domo"} />
          <TextComponent type={"body"} content={"Termos de Uso"} />
          <TextComponent type={"body"} content={"Política de Privacidade"} />
          <TextComponent type={"body"} content={"Contato"} />
        </div>
      </footer>
    </div>
  );
}