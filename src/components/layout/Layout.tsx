import logoImg from "../../assets/logo.svg";
import { LayoutContainer, LayoutHeader, LayoutMain } from "./styles";
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <img src={logoImg} alt="Logo Agrotis" />
      </LayoutHeader>
      <LayoutMain>{children}</LayoutMain>
    </LayoutContainer>
  );
}
