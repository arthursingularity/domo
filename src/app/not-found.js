export const metadata = {
    title: "Página não encontrada",
    description: "A página que você tentou acessar não existe.",
  };

import Link from "next/link";
import ButtonComponent from "@/components/ui/ButtonComponent";
import TextComponent from "@/components/ui/TextComponent";
import NavBar from "@/components/layout/NavBar";

export default function NotFound() {
    return (
        <div>
            <NavBar/>
            <div className="min-h-screen flex flex-col text-left text-center p-6 space-y-3 pt-[90px]">
                <TextComponent type={"h1"} content={"Página não encontrada."}/>
                <TextComponent type={"body"} content={"A página que você tentou acessar não existe."}/>
                <Link href="/">
                    <ButtonComponent type="primary" content="Voltar para o início" />
                </Link>
            </div>
        </div>
    );
}
