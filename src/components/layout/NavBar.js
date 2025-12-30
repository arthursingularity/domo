import Link from "next/link";
import ButtonComponent from "../ui/ButtonComponent";

export default function NavBar() {
    return (
        <div className="bg-background h-[70px] fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-border">
            <Link href="/">
                <img
                    src="/imagens/logoVerde.png"
                    alt="Logo Domo"
                    className="w-[80px] md:ml-[335px] ml-5 buttonHover cursor-pointer"
                />
            </Link>
            <div className="mr-4 space-x-4 flex">
                <ButtonComponent
                    content={"Começar"}
                    type={"primary"}
                />
                <img src="/imagens/menuIcon.svg" className="w-[35px] buttonHover md:mr-[335px]" />
            </div>
        </div>
    )
}