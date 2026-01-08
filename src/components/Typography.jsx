const textVariants = {
    default: "text-xl",
    muted: "text-xl text-(--text-secondary)",
    heading: "text-2xl",
    blast: "text-3xl",
};

export default function Typography({
    as: Tag = "span",
    variant = "default",
    className = "",
    children,
    ...props
}) {
    return (
        <Tag className={`${textVariants[variant]} ${className}`} {...props}>
            {children}
        </Tag>
    );
}
