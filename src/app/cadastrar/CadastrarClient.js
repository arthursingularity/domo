"use client"

import ButtonComponent from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import TextComponent from "@/components/ui/TextComponent";
import Link from "next/link";

export default function CadastrarClient() {
    return (
        <div className="bg-lightGray2 min-h-screen p-6 flex flex-col">
            <div className="flex justify-center mb-6">
                <Link href={"/"}>
                    <img
                        src="/imagens/logoVerde.png"
                        alt="Logo Domo"
                        className="w-[90px] buttonHover cursor-pointer !important"
                    />
                </Link>
            </div>
            <div className="flex justify-center">
                <div className="w-full sm:w-[500px] bg-white rounded-[41px] p-8 shadow-md space-y-6">
                    <p className="font-semibold text-[28px] leading-[1.2] tracking-[-0.02em] text-textPrimary">
                        Criar conta na Domo
                    </p>
                    <form>
                        <div>
                            <label className="font-medium">E-mail</label>
                            <InputComponent
                                type="text"
                                size={"big"}
                                placeholder="Seu melhor e-mail"
                                className="mt-1 border-border w-full"
                                onChange={(e) => {
                                    e.target.value = e.target.value.toLowerCase();
                                }}
                            />
                        </div>
                        <ButtonComponent type={"primary"} content={"Continuar"} size={"big"} className={"w-full mt-4"} />
                    </form>
                    <div className="flex items-center">
                        <hr className="border-border w-full" />
                        <p className="ml-4 text-[15px] md:text-[16px] leading-[1.6] text-textTertiary">ou</p>
                        <hr className="border-border w-full ml-4" />
                    </div>
                    <div className="border-border border rounded-full flex items-center justify-center space-x-3 bg-white buttonHover">
                        <img src="/imagens/googleIcon.svg" className="w-[18px]" />
                        <p className="font-medium text-[15px] md:text-[16px] leading-[1.6] text-textSecondary py-3 text-center">Registre-se com o Google</p>
                    </div>
                    <div className="flex justify-center mt-7">
                        <TextComponent type={"body"} content={"Já possui uma conta?"} />
                        <Link href={"/entrar"}>
                            <p className="font-medium text-primary ml-1 buttonHover">Entrar</p>
                        </Link>
                    </div>
                    <p className="text-[12px] font-regular text-textTertiary mt-6">
                        Ao criar uma conta, você concorda que está de acordo com os{" "}
                        <Link
                            href="/termosdeuso"
                            className="inline-block border-b sm:border-none sm:underline hover:text-primary"
                        >
                            Termos de uso
                        </Link>{" "}
                        e{" "}
                        <Link
                            href="/politicadeprivacidade"
                            className="inline-block border-b sm:border-none sm:underline hover:text-primary"
                        >
                            Política de Privacidade
                        </Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
