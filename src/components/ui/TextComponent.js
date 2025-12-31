export default function TextComponent({ type, content, className }) {
    const textVariants = {
        h1: "font-semibold text-[34px] md:text-[44px] lg:text-[60px] leading-[1.1] tracking-[-0.025em] text-textPrimary",
        h2: "font-medium text-[26px] md:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-textPrimary",
        h3: "font-medium text-[19px] md:text-[22px] lg:text-[24px] leading-[1.2]",
        sectionTitle: "font-semibold text-[35px] lg:text-[40px] leading-[1.2] tracking-[-0.02em] text-textPrimary",
        Lead: "font-normal text-[17px] md:text-[18px] leading-[1.6] text-textSecondary",
        body: "font-normal text-[15px] md:text-[16px] leading-[1.6] text-textSecondary",
        label: "text-[12px] font-medium leading-[1] text-textSecondary",
    }


    return (
        <div className={` ${textVariants[type]} ${className}`}>
            {content}
        </div>
    )
}