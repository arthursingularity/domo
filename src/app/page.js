"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Home() {
  const [widthExpanded, setWidthExpanded] = useState(false);
  const [heightExpanded, setHeightExpanded] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div>
      <div className="text-center space-y-6">
        <div className="mt-6 space-y-2">
          <p className="font-medium text-textPrimary text-[27px] leading-tight">Resolva serviços do dia a dia com profissionais confiáveis</p>
          <p className="font-light text-textSecondary text-[15px]">Eletricistas, encanadores, técnicos e diversos outros profissionais para casas e empresas.</p>
        </div>
        <div className="flex justify-center">
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
            className={` text-white bg-primary font-medium p-3 space-y-3 transition-all ease-in-out duration-300 rounded-[44px]
              ${widthExpanded ? "w-[350px]" : "w-[220px] buttonHover"}
              ${heightExpanded ? "h-[305px]" : "h-[45px]"}
            `}
          >
            <p className="transition-opacity duration-200">
              {widthExpanded ? "O que você precisa?" : "Encontrar profissional"}
            </p>
            {showInputs && (
              <div className={`divDosInputs bg-background p-3 rounded-[33px] space-y-3`}>
                <input
                  className={`font-light border border-border rounded-full h-[48px] pl-8 caret-primary outline-none hover:border-primary w-full transition-all duration-300 bg-transparent text-textPrimary`}
                  placeholder="Profissional"
                />
                <input
                  className={`font-light border border-border rounded-full h-[48px] pl-8 caret-primary outline-none hover:border-primary w-full transition-all duration-300 bg-transparent text-textPrimary`}
                  placeholder="Cidade"
                />
                <input
                  className={`font-light border border-border rounded-full h-[48px] pl-8 caret-primary outline-none hover:border-primary w-full transition-all duration-300 bg-transparent text-textPrimary`}
                  placeholder="Data"
                />
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
  );
}