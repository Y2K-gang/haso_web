export interface ButtonProps {
  type?: "submit" | "button";
  onClick?: () => void | 0;
}

export interface ButtonStyle extends ButtonProps {
  variant: "primary" | "secondary";
}
