"use client"

import { useRouter } from "next/navigation";
import ButtonComponent from "@/components/ui/ButtonComponent";

export default function NotFoundClient() {
    const router = useRouter();

    return (
        <ButtonComponent 
            type="primary" 
            content="Voltar para a página anterior" 
            size={"medium"} 
            className={"mt-3"}
            onClick={() => router.back()}
        />
    );
}