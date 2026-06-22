/**
 * Button Component
 *
 * Props:
 * variant: primary | secondary | outline
 * size: sm | md | lg
 * disabled: boolean
 * onClick: function
 */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {

  const variants = {
    primary: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    outline: "border border-green-700 text-green-700 hover:bg-green-50",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-lg transition ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}