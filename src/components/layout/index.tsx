import "./style.module.css";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
