"use client";

import Link from "next/link";
import ButtonComponent from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import TextComponent from "@/components/ui/TextComponent";
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";

export default function Page() {
  const [widthExpanded, setWidthExpanded] = useState(false);
  const [heightExpanded, setHeightExpanded] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  const categoryClass =
    "primaryHover border border-border rounded-full px-2.5 py-[4px] text-[12px] text-center bg-white hover:bg-primary";

  return (
    <div>
      <NavBar />
      <div className="flex justify-center pt-[70px]">
        <div className="heroSection md:mt-10 flex p-6 pb-14">
          <div className="space-y-5 max-w-[570px] md:max-w-[300px] lg:max-w-[450px] md:mt-20 md:mr-4">
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
                className={`bg-primary text-white font-semibold text-[15px] p-3 space-y-3 transition-all ease-in-out duration-300 rounded-[41px]
                            ${widthExpanded ? "md:w-[400px] w-full" : "w-[280px] buttonHover"}
                            ${heightExpanded ? "h-[301px]" : "h-[50px]"}
                          `}
              >
                <p className="transition-opacity duration-200 mt-[2px] text-center">
                  {widthExpanded ? "O que você precisa?" : "Encontrar profissional"}
                </p>
                {showInputs && (
                  <div className={`bg-white p-3 rounded-[33px]`}>
                    <div className="space-y-3">
                      <InputComponent type={"text"} placeholder={"Profissional"} size={"medium"} className={"border-border w-full"} />
                      <InputComponent type={"text"} placeholder={"Cidade"} size={"medium"} className={"border-border w-full"} />
                      <InputComponent type={"text"} placeholder={"Quando"} size={"medium"} className={"border-border w-full"} />
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
                            size={"medium"}
                          />
                        </div>
                        <ButtonComponent
                          type={"primary"}
                          content={"Encontrar agora"}
                          size={"medium"}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-primarySoft w-[660px] h-[660px] hidden md:block">
          </div>
        </div>
      </div>
      <div className="profissionalCards bg-lightGray2 w-full p-6 space-y-6 md:hidden">
        <div>
          <TextComponent
            type={"h2"}
            content={"Serviços, eventos e muito mais."}
          />
          <TextComponent
            type={"body"}
            content={"Encontre profissionais para qualquer necessidade, em um só lugar."}
            className={"mt-2"}
          />
        </div>

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
              src="/imagens/card.png"
            />
          </div>
          <div>
            <img
              className="w-[190px] drop-shadow-md"
              src="/imagens/card8.png"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="categoryList flex flex-wrap justify-center gap-2 text-center max-w-[1300px]">
            <TextComponent type="body" content="Eletricista" className={categoryClass} />
            <TextComponent type="body" content="Encanador" className={categoryClass} />
            <TextComponent type="body" content="Mudança" className={categoryClass} />
            <TextComponent type="body" content="Pintor" className={categoryClass} />
            <TextComponent type="body" content="Pedreiro" className={categoryClass} />
            <TextComponent type="body" content="Churrasqueiro" className={categoryClass} />
            <TextComponent type="body" content="Marido de Aluguel" className={categoryClass} />
            <TextComponent type="body" content="Barman" className={categoryClass} />
            <TextComponent type="body" content="Diarista" className={categoryClass} />
            <TextComponent type="body" content="Estética Automotiva" className={categoryClass} />
          </div>
        </div>
      </div>
      <div className="comoFunciona p-6 w-full md:flex md:justify-center">
        <div className="max-w-[1300px]">
          <TextComponent type={"sectionTitle"} content={"Entenda como a Domo funciona"} className={"pb-7"} />
          <div className="space-y-7">
            <div className="flex justify-center flex-wrap gap-5">
              <div className="card1 bg-lightGray2 border-border border rounded-[37px] max-w-[430px] h-[190px] flex justify-between overflow-hidden">
                <div className="space-y-3 pt-5 pl-5">
                  <TextComponent type={"h3"} content={"1 - Conte o que você precisa"} />
                  <TextComponent type={"body"} content={"Informe o profissional, sua cidade e quando precisa do serviço."} />
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
            </div>
            <div className="flex justify-center">
              <ButtonComponent type={"primary"} content={"Começar agora"} size={"medium"} />
            </div>
          </div>
        </div>
      </div>
      <div className="diferenciais p-6 py-10 bg-lightGray2 w-full flex justify-center">
        <div className="space-y-5">
          <TextComponent type={"h3"} content={"Nossos diferenciais"} className={"text-primary"} />
          <TextComponent type={"sectionTitle"} content={"Por que escolher a Domo?"} />
          <div className="space-y-2">
            <TextComponent type={"h3"} content={"Profissionais verificados"} />
            <TextComponent type={"body"} content={"Identidade validada para mais segurança na contratação."} />
          </div>
          <div className="space-y-2">
            <TextComponent type={"h3"} content={"Avaliações reais"} />
            <TextComponent type={"body"} content={"Apenas clientes que contrataram podem avaliar."} />
          </div>
          <div className="space-y-2">
            <TextComponent type={"h3"} content={"Pagamento seguro"} />
            <TextComponent type={"body"} content={"O pagamento é diretamente entre você e o profissional."} />
          </div>
          <div className="space-y-2">
            <TextComponent type={"h3"} content={"Diagnóstico justo"} />
            <TextComponent type={"body"} content={"Ideal para serviços onde o problema não é claro."} />
          </div>
        </div>
      </div>
      <div className="trabalheConosco p-6 py-10 bg-blackBg w-full">
        <TextComponent type={"sectionTitle"} content={"Você é um profissional autônomo ou possui um negócio? Trabalhe conosco!"} className={"text-white"} />
        <TextComponent type={"lead"} content={"Encontre novos clientes, ganhe visibilidade e trabalhe com mais segurança."} className={"text-textSecondaryDark mt-3"} />
        <Link href={"/profissionais"}>
          <ButtonComponent type={"primary"} content={"Cadastrar como profissional"} size={"medium"} className={"mt-6"} />
        </Link>

      </div>
      <div className="indique p-6 py-10 w-full space-y-5">
        <TextComponent type={"h3"} content={"Conhece um bom profissional?"} className={"text-primary"} />
        <TextComponent type={"sectionTitle"} content={"Indique alguém de confiança e ajude a comunidade a crescer!"} />
        <TextComponent type={"body"} content={"Ao indicar um profissional para a nossa plataforma, você ajuda a gerar novas oportunidades e valorizar o trabalho de quem faz bem."} />
        <ButtonComponent type={"secondary"} content={"Indicar profissional"} size={"medium"} />
      </div>
      <div className="perguntas p-6 bg-lightGray2 space-y-5 text-left w-full">
        <TextComponent type={"h2"} content={"Perguntas"} />
        <div className="space-y-1.5">
          <TextComponent type={"h3"} content={"A Domo é segura?"} />
          <TextComponent type={"body"} content={"Sim. Trabalhamos com profissionais qualificados, avaliações reais e pagamento protegido."} />
        </div>
        <div className="space-y-1.5">
          <TextComponent type={"h3"} content={"Os profissionais são verificados?"} />
          <TextComponent type={"body"} content={"Sim. Os profissionais passam por um processo de verificação para aumentar a segurança."} />
        </div>
        <div className="space-y-1.5">
          <TextComponent type={"h3"} content={"Como funciona o pagamento?"} />
          <TextComponent type={"body"} content={"O pagamento funciona diretamente entre o cliente e o profissional, sem qualquer interferência da plataforma."} />
        </div>
        <div className="space-y-1.5">
          <TextComponent type={"h3"} content={"Tenha uma empresa, posso contratar mesmo assim?"} />
          <TextComponent type={"body"} content={"Sim. A Domo possui profissionais que atendem residências, empresas e eventos."} />
        </div>
        <div className="space-y-1.5">
          <TextComponent type={"h3"} content={"E se eu não gostar do serviço?"} />
          <TextComponent type={"body"} content={"Você pode avaliar o profissional ou entrar em contato com o nosso suporte."} />
        </div>
      </div>
      <footer className="bg-lightGray2 pb-10 w-full">
        <div className="flex justify-center">
          <hr className="border-border w-[90%]" />
        </div>
        <div className="p-6 space-y-2">
          <img src="/imagens/domoIcon.png" className="w-[30px] pb-3" />
          <TextComponent type={"lead"} content={"© 2025 Domo"} />
          <TextComponent type={"body"} content={"Termos de Uso"} />
          <TextComponent type={"body"} content={"Política de Privacidade"} />
          <TextComponent type={"body"} content={"Contato"} />
        </div>
      </footer>
    </div>
  );
}