import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message = "There was an error, please try again..." }: ErrorMessageProps) {
  return <p className={css.text}>{message}</p>;
}