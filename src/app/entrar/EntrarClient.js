"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ButtonComponent from "@/components/ui/ButtonComponent"
import InputComponent from "@/components/ui/InputComponent"
import TextComponent from "@/components/ui/TextComponent"
import Link from "next/link"

export default function EntrarClient() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errorType, setErrorType] = useState("") // "email" ou "password"

  // Função para verificar se o email existe
  async function handleCheckEmail(e) {
    e.preventDefault()
    setError("")
    setErrorType("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message)
        setErrorType("email")
        setLoading(false)
        return
      }

      if (data.exists) {
        // Email existe, mostrar campo de senha
        setShowPassword(true)
      } else {
        // Email não existe, buscar mensagem de erro da API de login
        const loginResponse = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password: "" }),
        })

        const loginData = await loginResponse.json()
        setError(loginData.message)
        setErrorType("email")
      }
    } catch (err) {
      setError("Erro inesperado. Tente novamente.")
      setErrorType("email")
    } finally {
      setLoading(false)
    }
  }

  // Função para realizar o login
  async function handleLogin(e) {
    e.preventDefault()
    setError("")
    setErrorType("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message)
        // Define o tipo de erro baseado na mensagem
        if (data.message.toLowerCase().includes("senha")) {
          setErrorType("password")
        } else {
          setErrorType("email")
        }
        setLoading(false)
        return
      }

      // Login OK → redireciona
      router.push("/sistema")
    } catch (err) {
      setError("Erro inesperado. Tente novamente.")
      setErrorType("password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-lightGray2 min-h-screen p-6 flex flex-col">
      <div className="flex justify-center mb-6">
        <Link href={"/"}>
          <img
            src="/imagens/logoVerde.png"
            alt="Logo Domo"
            className="w-[90px] buttonHover cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="w-full sm:w-[500px] bg-white rounded-[41px] p-8 shadow-md space-y-6">
          <p className="font-semibold text-[28px] text-textPrimary">
            Entrar na Domo
          </p>

          <form
            className=""
            onSubmit={showPassword ? handleLogin : handleCheckEmail}
          >
            <div className={`emailDiv ${showPassword ? "hidden" : ""}`}>
              <label className="font-medium">E-mail</label>
              <InputComponent
                type="email"
                size={"big"}
                placeholder="Seu endereço de e-mail"
                className={`mt-1 w-full ${errorType === "email" ? "border-error" : "border-border"}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value.toLowerCase())
                  setError("")
                  setErrorType("")
                }}
                required
              />
            </div>

            <div className={`passwordDiv ${showPassword ? "" : "hidden"}`}>
              <label className="font-medium">Senha</label>
              <InputComponent
                type="password"
                size={"big"}
                placeholder="Sua senha"
                className={`mt-1 w-full ${errorType === "password" ? "border-error" : "border-border"}`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                  setErrorType("")
                }}
                required
              />
            </div>
            {error && (
              <p className="text-[15px] leading-[1.6] text-error mt-1">{error}</p>
            )}
            <div className="flex space-x-6 mt-4">
              <ButtonComponent
                buttonType={"button"}
                type={"secondary"}
                size={"big"}
                content={"Voltar"}
                className={`w-full ${showPassword ? "" : "hidden"}`}
                onClick={() => {
                  setShowPassword(false)
                  setPassword("")
                  setError("")
                  setErrorType("")
                }} />
              <ButtonComponent
                type="primary"
                size={"big"}
                content={loading ? "Aguarde..." : "Continuar"}
                className="w-full"
                disabled={loading}
              />
            </div>
          </form>

          <div className="flex items-center">
            <hr className="border-border w-full" />
            <p className="ml-4 text-textTertiary">ou</p>
            <hr className="border-border w-full ml-4" />
          </div>

          <div className="border-border border rounded-full flex items-center bg-white justify-center space-x-3 buttonHover">
            <img src="/imagens/googleIcon.svg" className="w-[18px]" />
            <p className="font-medium text-textSecondary py-3">
              Entre com o Google
            </p>
          </div>

          <div className="flex justify-center mt-7">
            <TextComponent type={"body"} content={"Ainda não possui uma conta?"} />
            <Link href={"/cadastrar"}>
              <p className="font-medium text-primary ml-1 buttonHover">Cadastrar</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}