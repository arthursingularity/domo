export default function ButtonComponent({ buttonType, type, content, className, onClick, size }) {
    const buttonVariants = {
        primary: "bg-primary text-white font-medium",
        secondary: "bg-buttonSecondary text-textPrimary font-medium",
    }

    const sizeVariants = {
        small: "h-[40px]",
        medium: "h-[45px]",
        big: "h-[50px]",
    }

    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={`${className} px-6 rounded-full buttonHover text-[15px] ${sizeVariants[size]} ${buttonVariants[type]}`}
        >
            {content}
        </button>
    )
}