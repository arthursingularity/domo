export default function ButtonComponent({ type, content }) {
    const buttonVariants = {
        primary: "bg-primary text-white",
        secondary: "bg-buttonSecondary text-textPrimary",
    }

    return (
        <button
            className={`font-semibold px-5 py-3 rounded-full buttonHover text-[15px] ${buttonVariants[type]}`}
        >
            {content}
        </button>
    )
}