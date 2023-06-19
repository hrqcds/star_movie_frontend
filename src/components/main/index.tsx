import { Header } from "../header";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
}

export function Section({ children }: SectionProps) {
  return (
    <>
      <section>
        <Header />
        {children}
      </section>
    </>
  );
}
