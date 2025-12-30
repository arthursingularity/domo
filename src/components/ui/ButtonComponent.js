export default function ButtonComponent({ type, content, className }) {
    const buttonVariants = {
        primary: "bg-primary text-white",
        secondary: "bg-buttonSecondary text-textPrimary",
    }

    return (
        <button
            className={`${className} font-semibold px-6 py-3 rounded-full buttonHover text-[15px] ${buttonVariants[type]}`}
        >
            {content}
        </button>
    )
}