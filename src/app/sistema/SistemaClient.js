"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoggedNavBar from "@/components/layout/LoggedNavBar"
import TextComponent from "@/components/ui/TextComponent"
import InputComponent from "@/components/ui/InputComponent"
import ButtonComponent from "@/components/ui/ButtonComponent"

export default function SistemaClient() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

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
          router.replace("/sistema")
        }
      } catch {
        setIsLogged(false)
        setUser(null)
        router.replace("/sistema")
      }
    }

    checkAuth()
  }, [router])

  const categoryClass =
    "primaryHover border border-border rounded-full px-2.5 py-[4px] text-[12px] text-center bg-white hover:bg-primary";

  return (
    <div>
      <LoggedNavBar />
      <div className="mt-[52px] md:mt-[70px] p-6 space-y-5">
        <div>
          {isLogged && (
            <TextComponent type={"h2"} content={`Olá ${user.name.split(" ")[0]}`} className={"hidden"} />
          )}
          <TextComponent type={"h2"} content={"Olá, Arthur!"} className={"text-textPrimary"} />
          <TextComponent type={"sectionTitle"} content={"O que você precisa resolver hoje?"} className={"mt-2"} />
          <form className="md:flex mt-4 md:space-x-2 space-y-2">
            <InputComponent
              type={"text"}
              size={"big"}
              placeholder={"Eletricista, encanador, mudança..."}
              className={"border-border w-full md:w-[300px]"}
            />
            <ButtonComponent type={"primary"} size={"big"} content={"Pesquisar"} className={"w-full md:w-[140px]"} />
          </form>
        </div>
        <hr className="border-border" />
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
  )
}
