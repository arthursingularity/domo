"use client";

import Link from "next/link";
import ButtonComponent from "../ui/ButtonComponent";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    }, [pathname]);

    const handleNavigate = (href) => {
        if (pathname === href) {
            // já está na página → só fecha
            setMenuOpen(false);
            return;
        }

        // navega normalmente
        router.push(href);
    };

    const openMenu = () => {
        setMenuOpen(true);
        setClosing(false);
    };

    const closeMenu = () => {
        setClosing(true);

        setTimeout(() => {
            setMenuOpen(false);
            setClosing(false);
        }, 250);
    };

    return (
        <div>
            <div className="navBar bg-background h-[70px] fixed top-0 left-0 w-full z-40 border-b border-border flex justify-center">
                <div className="w-full max-w-[1440px] px-6 xl:px-[105px] flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <Link href="/">
                            <img
                                src="/imagens/logoVerde.png"
                                alt="Logo Domo"
                                className="w-[80px] buttonHover cursor-pointer"
                            />
                        </Link>
                        <Link href="/como-funciona" className="hidden lg:block">
                            <p className="font-medium hover:text-primary">Como funciona</p>
                        </Link>

                        <Link href="/profissionais" className="hidden lg:block">
                            <p className="font-medium hover:text-primary">Profissionais</p>
                        </Link>

                        <Link href="/empresas" className="hidden lg:block">
                            <p className="font-medium hover:text-primary">Empresas</p>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div onClick={() => handleNavigate("/entrar")}>
                            <ButtonComponent
                                content="Entrar"
                                type="secondary"
                                className="hidden md:block"
                            />
                        </div>
                        <ButtonComponent
                            content="Começar"
                            type="primary"
                            className="ml-4"
                        />
                        <img
                            src="/imagens/menuIcon.svg"
                            className="w-[35px] buttonHover lg:hidden ml-4"
                            onClick={openMenu}
                        />
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className={`fixed inset-0 z-50 bg-background flex flex-col w-full animate-fadeIn ${closing ? "animate-menuOut" : "animate-menuIn"}`}>
                    <div className="flex items-center justify-between h-[70px] border-border border-b w-full px-6">
                        <Link href="/">
                            <img
                                src="/imagens/logoVerde.png"
                                alt="Logo Domo"
                                className="w-[80px] buttonHover"
                                onClick={() => setMenuOpen(false)}
                            />
                        </Link>
                        <img
                            src="/imagens/closeIcon.svg"
                            onClick={closeMenu}
                            className="w-[35px] buttonHover"
                        />
                    </div>
                    <div className="flex flex-col space-y-6 p-6">
                        <button
                            onClick={() => handleNavigate("/")}
                            className="text-left"
                        >
                            <p className="text-[18px] font-medium hover:text-primary">
                                Início
                            </p>
                        </button>
                        <hr className="border-border" />
                        <button
                            onClick={() => handleNavigate("/comofunciona")}
                            className="text-left"
                        >
                            <p className="text-[18px] font-medium hover:text-primary">
                                Como funciona
                            </p>
                        </button>
                        <hr className="border-border" />
                        <button
                            onClick={() => handleNavigate("/profissionais")}
                            className="text-left"
                        >
                            <p className="text-[18px] font-medium hover:text-primary">
                                Profissionais
                            </p>
                        </button>
                        <hr className="border-border" />
                        <button
                            onClick={() => handleNavigate("/empresas")}
                            className="text-left"
                        >
                            <p className="text-[18px] font-medium hover:text-primary">
                                Empresas
                            </p>
                        </button>
                        <hr className="border-border" />
                        <div className="flex justify-between">
                            <div onClick={() => handleNavigate("/entrar")}>
                                <ButtonComponent
                                    content="Entrar"
                                    type="secondary"
                                />
                            </div>
                            <ButtonComponent
                                content="Cadastrar"
                                type="primary"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
