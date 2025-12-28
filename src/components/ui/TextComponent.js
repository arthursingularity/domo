export default function TextComponent({type, content, className}) {
    const textVariants = {
        h1: "text-[30px] md:text-[43px] font-semibold text-textPrimary leading-[1.1] tracking-tight",
        h15: "text-[25px] font-medium text-textPrimary leading-[1.1] tracking-tight",
        h2: "text-[21px] font-regular text-textTertiary leading-[1.5]",
        h3: "text-[17px] font-light text-textSecondary leading-[1.4]",
        body: "text-[15px] font-light leading-[1.5] text-textTertiary",
        bodySecondary: "text-[13px] font-light leading-[1.5]",
        label: "text-[12px] font-medium leading-[1]",
    }

    return (
        <div className={`${textVariants[type]} ${className}`}>
            {content}
        </div>
    )
}