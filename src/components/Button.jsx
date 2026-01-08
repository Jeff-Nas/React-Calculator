import Typography from "./Typography";

const buttonVariants = {
    default: "bg-(--background)",
    primary: "bg-(--primary)",
};

export default function Button({
    variant = "default",
    className = "",
    children,
    ...props
}) {
    return (
        <Typography
            as="button"
            variant="heading"
            className={`
        flex items-center justify-center rounded-xl
        p-3 cursor-pointer text-(--text)
        bg-linear-(--gradient)
        hover:bg-linear-(--gradient-hover)
        shadow-(--shadow)

        ${buttonVariants[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </Typography>
    );
}
