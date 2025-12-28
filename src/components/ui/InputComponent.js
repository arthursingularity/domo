export default function InputComponent({ type, placeholder, className }) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={`
                font-light
                rounded-full
                py-2 px-4
                text-[16px]
                caret-primary
                w-full
                bg-lightGray
                text-textPrimary

                placeholder:font-light
                placeholder:text-[15px]
                placeholder:text-textSecondary
                placeholder:opacity-70

                outline-none
                appearance-none
                focus:border-primary
                focus:ring-2
                focus:ring-primary/40
                focus:ring-offset-0

                ${className}
            `}
            />
        </div>
    )
}