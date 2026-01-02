"use client";

import Link from "next/link";
import ButtonComponent from "../ui/ButtonComponent";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TextComponent from "../ui/TextComponent";

export default function LoggedNavBar() {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch("/api/auth/me", {
                    credentials: "include",
                })

                const data = await res.json()

                if (data.authenticated) {
                    setIsLogged(true)
                    setUser(data.user)
                } else {
                    setIsLogged(false)
                    setUser(null)
                }
            } catch {
                setIsLogged(false)
                setUser(null)
            }
        }

        checkAuth()
    }, [])

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", {
                method: "POST",
            })

            setIsLogged(false)
            router.push("/entrar")
        } catch (err) {
            console.error("Erro ao sair:", err)
        }
    }

    return (
        <div>
            <div className="navBar bg-white h-[55px] md:h-[70px] fixed top-0 left-0 w-full z-40 border-b border-border flex justify-center">
                <div className="w-full max-w-[1440px] px-6 xl:px-[105px] flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <Link href="/">
                            <img
                                src="/imagens/logoVerde.png"
                                alt="Logo Domo"
                                className="w-[90px] buttonHover cursor-pointer"
                            />
                        </Link>
                        <p></p>
                        <Link href="/" className="hidden md:block">
                            <p className={`font-regular hover:text-primary ${pathname === "/sistema" ? "text-primary" : ""}`}>
                                Início
                            </p>
                        </Link>
                        <Link href="/buscar" className="hidden md:block">
                            <p className={`font-regular hover:text-primary ${pathname === "/buscar" ? "text-primary" : ""}`}>
                                Buscar
                            </p>
                        </Link>
                        <Link href="/chamados" className="hidden md:block">
                            <p className={`font-regular hover:text-primary ${pathname === "/chamados" ? "text-primary" : ""}`}>
                                Chamados
                            </p>
                        </Link>
                        {isLogged && (
                            <button
                                onClick={handleLogout}
                                className="font-medium hover:text-red-500 cursor-pointer"
                            >
                                Sair
                            </button>
                        )}
                    </div>
                    <div className="flex items-center">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center space-y-1">
                                <img
                                    src={isHovered ? "/imagens/notificationIconPrimary.svg" : "/imagens/notificationIcon.svg"}
                                    className="w-[25px] cursor-pointer"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomNavBar backdrop-blur-md bg-white/80 w-[90%] sm:w-[370px] rounded-full h-[70px] p-2 flex justify-between items-center fixed bottom-4 left-1/2 -translate-x-1/2 z-40 border border-border md:hidden shadow-lg">
                <Link href={"/sistema"} className={`w-[85px] h-[53px] flex justify-center items-center rounded-full hover:bg-primary ${pathname === "/sistema" ? "border border-primary" : ""}`}>
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={`${pathname === "/sistema" ? "/imagens/homeIconPrimary.svg" : "/imagens/homeIcon.svg"}`}
                            className={"w-[30px]"}
                        />
                        <TextComponent type={"label"} content={"Início"} className={`${pathname === "/sistema" ? "text-primary" : "text-textTertiary"}`} />
                    </div>
                </Link>
                <Link href={"/buscar"} className="w-[85px] flex justify-center items-center rounded-full">
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={`${pathname === "/buscar" ? "/imagens/searchIconPrimary.svg" : "/imagens/searchIcon.svg"}`}
                            className={`w-[30px]`}
                        />
                        <TextComponent type={"label"} content={"Buscar"} className={`${pathname === "/buscar" ? "text-primary" : "text-textTertiary"}`} />
                    </div>
                </Link>
                <Link href={"/chamados"} className="w-[85px] flex justify-center items-center rounded-full">
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={`${pathname === "/chamados" ? "/imagens/callIconPrimary.svg" : "/imagens/callIcon.svg"}`}
                            className={`w-[30px]`}
                        />
                        <TextComponent type={"label"} content={"Chamados"} className={`${pathname === "/chamados" ? "text-primary" : "text-textTertiary"}`} />
                    </div>
                </Link>
                <Link href={"/chamados"} className="w-[85px] flex justify-center items-center rounded-full">
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={`${pathname === "/financeiro" ? "/imagens/financeIconPrimary.svg" : "/imagens/financeIcon.svg"}`}
                            className={`w-[30px]`}
                        />
                        <TextComponent type={"label"} content={"Financeiro"} className={`${pathname === "/financeiro" ? "text-primary" : "text-textTertiary"}`} />
                    </div>
                </Link>
                <Link href={"/chamados"} className="w-[85px] flex justify-center items-center rounded-full">
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={`${pathname === "/financeiro" ? "/imagens/adminIconPrimary.svg" : "/imagens/adminIcon.svg"}`}
                            className={`w-[30px]`}
                        />
                        <TextComponent type={"label"} content={"Admin"} className={`${pathname === "/financeiro" ? "text-primary" : "text-textTertiary"}`} />
                    </div>
                </Link>
                <Link href={"/perfil"} className="w-[85px] flex justify-center items-center rounded-full">
                    <div className="flex flex-col items-center space-y-1">
                        {!isLogged && (
                            <div className="rounded-full bg-iconGrayColor overflow-hidden text-white w-[30px] h-[30px] text-[18px] font-medium flex justify-center items-center buttonHover">
                                <img src="/imagens/profilePic.png" />
                            </div>
                        )}
                        <TextComponent type={"label"} content={"Perfil"} className={`${pathname === "/perfil" ? "text-primary" : "text-textTertiary"}`} />
                    </div>
                </Link>
            </div>
        </div >
    );
}
