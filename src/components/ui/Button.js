export default function Button({ type, text }) {
    const buttonVariants = {
        primary: "bg-primary text-white",
        secondary: "bg-border text-textPrimary",
    }

    return (
        <button
            className={`font-medium px-4 py-2 rounded-full h-[40px] buttonHover ${buttonVariants[type]}`}
        >
            {text}
        </button>
    )
}