import classNames from "classnames";

interface ButtonProps {
  label?: string;
  icon?: string;
  type?: "primary" | "secondary";
  density?: "large" | "middle" | "small" | "xsmall";
  className?: string;
  labelClassName?: string;
  circle?: boolean;
  inverted?: boolean;
  block?: boolean;
  loading?: boolean;
  submit?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

export default function Button({
  label,
  icon,
  type,
  className,
  labelClassName,
  circle,
  inverted,
  block,
  density = "middle",
  loading,
  submit,
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = classNames("br-button", type, density, className, {
    circle,
    inverted,
    block,
    loading,
  });

  return (
    <button
      className={buttonClasses}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <i
          className={`fas fa-${icon} ${!circle ? "mr-1" : ""}`}
          aria-hidden
        ></i>
      )}
      {!circle && label && <span className={labelClassName}>{label}</span>}
    </button>
  );
}
