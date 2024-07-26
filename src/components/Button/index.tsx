import { Container, Title, ButtonTypeStyleProps } from "./style";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...props }: ButtonProps) {
  return (
    <Container type={type} {...props}>
      <Title>{title}</Title>
    </Container>
  );
}
