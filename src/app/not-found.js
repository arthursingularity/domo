export const metadata = {
    title: "Página não encontrada",
    description: "A página que você tentou acessar não existe.",
};

import Link from "next/link";
import TextComponent from "@/components/ui/TextComponent";
import NotFoundClient from "./NotFoundClient";

export default function NotFound() {
    return (
        <div>
            <div className="text-left p-6">
                <img src="/imagens/logoVerde.png" className="w-[100px]" />
                <div className="mt-6 space-y-1">
                    <TextComponent type={"h1"} content={"Página não encontrada."} />
                    <TextComponent type={"body"} content={"A página que você tentou acessar não existe."} />
                </div>
                <NotFoundClient />
            </div>
        </div>
    );
}