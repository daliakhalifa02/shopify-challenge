import { Movie } from "../../Pages/Main/Main.types";

export interface MovieProps extends Movie {
  onClick: () => void;
  disabled: boolean;
}
