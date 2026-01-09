"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import TextComponent from "../ui/TextComponent"

export default function LoggedNavBar() {
    const pathname = usePathname()
    const router = useRouter()

    const [user, setUser] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [activeNav, setActiveNav] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch("/api/auth/me", { credentials: "include" })
                const data = await res.json()

                setIsLogged(!!data.authenticated)
                setUser(data.authenticated ? data.user : null)
            } catch {
                setIsLogged(false)
                setUser(null)
            }
        }

        checkAuth()
    }, [])

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" })
            setIsLogged(false)
            router.push("/entrar")
        } catch (err) {
            console.error("Erro ao sair:", err)
        }
    }

    const handleHoverStart = (id) => setActiveNav(id)
    const handleHoverEnd = () => setActiveNav(null)


    const isActive = (path, id) =>
        pathname === path || activeNav === id

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
                        {[
                            { href: "/", label: "Início", path: "/sistema" },
                            { href: "/buscar", label: "Buscar", path: "/buscar" },
                            { href: "/chamados", label: "Chamados", path: "/chamados" },
                        ].map(({ href, label, path }) => (
                            <Link key={label} href={href} className="hidden md:block">
                                <p
                                    className={`font-regular hover:text-primary ${pathname === path ? "text-primary" : ""
                                        }`}
                                >
                                    {label}
                                </p>
                            </Link>
                        ))}
                        {isLogged && (
                            <button
                                onClick={handleLogout}
                                className="font-medium hover:text-red-500 cursor-pointer"
                            >
                                Sair
                            </button>
                        )}
                    </div>
                    <img
                        src={
                            isHovered
                                ? "/imagens/notificationIconPrimary.svg"
                                : "/imagens/notificationIcon.svg"
                        }
                        className="w-[25px] cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </div>
            <div className="bottomNavBar backdrop-blur-md bg-white/70 w-[90%] sm:w-[370px] px-[5px] rounded-full h-[70px] flex justify-between items-center fixed bottom-4 left-1/2 -translate-x-1/2 z-40 border border-border md:hidden shadow-lg">
                {[
                    { id: "inicio", path: "/sistema", label: "Início", icon: "home" },
                    { id: "buscar", path: "/buscar", label: "Buscar", icon: "search" },
                    { id: "chamados", path: "/chamados", label: "Chamados", icon: "call" },
                    { id: "financeiro", path: "/financeiro", label: "Financeiro", icon: "finance" },
                ].map(({ id, path, label, icon }) => (
                    <Link
                        key={id}
                        href={path}
                        className={`
                            w-[85px] h-[57px] flex justify-center items-center rounded-full
                            transition-colors duration-150
                            ${activeNav === id ? "bg-primary" : ""}
                            ${pathname === path ? "border border-primary" : ""}
                        `}
                        onPointerEnter={() => handleHoverStart(id)}
                        onPointerLeave={handleHoverEnd}
                    >
                        <div className="flex flex-col items-center space-y-[2px]">
                            <img
                                src={
                                    isActive(path, id)
                                        ? `/imagens/${icon}IconPrimary.svg`
                                        : `/imagens/${icon}Icon.svg`
                                }
                                className="w-[30px]"
                            />
                            <TextComponent
                                type="label"
                                content={label}
                                className={
                                    isActive(path, id)
                                        ? "text-primary"
                                        : "text-iconGrayColor"
                                }
                            />
                        </div>
                    </Link>

                ))}
                <Link href="/perfil" className="w-[85px] flex justify-center items-center rounded-full">
                    <div className="flex flex-col items-center space-y-1">
                        {!isLogged && (
                            <div className="rounded-full bg-iconGrayColor overflow-hidden w-[30px] h-[30px] flex justify-center items-center buttonHover">
                                <img src="/imagens/profilePic.png" />
                            </div>
                        )}
                        <TextComponent
                            type="label"
                            content="Perfil"
                            className={
                                pathname === "/perfil"
                                    ? "text-primary"
                                    : "text-iconGrayColor"
                            }
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}
