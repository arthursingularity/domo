export default function InputComponent({ type, placeholder, className, onChange, size }) {
    const inputVariants = {
        small: "h-[40px]",
        medium: "h-[45px]",
        big: "h-[50px]",
    }

    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={`
                font-light
                rounded-full
                px-4
                text-[16px]
                caret-primary
                bg-background
                text-textPrimary
                border
                hover:border-primary

                placeholder:font-light
                placeholder:text-[15px]
                placeholder:text-textSecondary
                placeholder:opacity-80

                outline-none
                appearance-none
                focus:border-primary
                focus:ring-2
                focus:ring-primary/40
                focus:ring-offset-0

                ${inputVariants[size]}
                ${className}
            `}
            />
        </div>
    )
}