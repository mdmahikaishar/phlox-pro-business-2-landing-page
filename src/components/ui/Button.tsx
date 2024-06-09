interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary",
  text: string;
}

export default function Button({ variant, text, className, ...props }: IButton) {
  return (
    <button className={`btn btn-${variant === "primary" ? "primary" : "secondary"} ${className}`} {...props}>
      <span>{text}</span>
    </button>
  )
}