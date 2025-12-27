import Button from "../ui/Button";

export default function NavBar() {
    return (
        <div className="bg-background h-[70px] fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-border">
            <img
                src="/imagens/logoVerde.png"
                alt="Logo Domo"
                className="w-[100px] ml-4 buttonHover"
            />
            <div className="mr-4 space-x-2">
                <Button
                    text={"Entrar"}
                    type={"secondary"}
                />
                <Button
                    text={"Cadastrar"}
                    type={"primary"}
                />
            </div>
        </div>
    )
}