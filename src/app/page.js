"use client";

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/InputComponent";
import TextComponent from "@/components/ui/TextComponent";
import { useState } from "react";

export default function Home() {
  const [widthExpanded, setWidthExpanded] = useState(false);
  const [heightExpanded, setHeightExpanded] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="text-center space-y-6">
        <div className="md:mt-14 mt-2 flex md:w-[1200px] p-4">
          <div className="bg-primarySoft w-[500px] h-[500px] hidden md:block">
          </div>
          <div className="md:pl-10 space-y-5">
            <TextComponent type={"h1"} content={"Profissionais certos, na hora certa."} className={"text-left text-[48px]"} />
            <TextComponent type={"h2"} content={"Uma plataforma para contratar profissionais com confiança."} className={"text-left"} />
            <TextComponent type={"h3"} content={"Serviços, eventos, tecnologia, manutenção e muitos mais."} className={"text-left"} />
            <div className="">
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
              ${heightExpanded ? "h-[282px]" : "h-[50px]"}
            `}
              >
                <p className="transition-opacity duration-200 mt-[6px]">
                  {widthExpanded ? "O que você precisa?" : "Encontrar profissional"}
                </p>
                {showInputs && (
                  <div className={`divDosInputs bg-background p-3 rounded-[33px] space-y-3`}>
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
                        <Button
                          type={"secondary"}
                          text={"Fechar"}
                        />
                      </div>
                      <Button type={"primary"} text={"Pesquisar"} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lightGray w-full h-[500px] p-4 flex justify-center space-x-4 md:hidden">
          <div>
            <img
              className="w-[180px]"
              src="/imagens/card.png"
            />
          </div>
          <div>
            <img
              className="w-[180px]"
              src="/imagens/card.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}