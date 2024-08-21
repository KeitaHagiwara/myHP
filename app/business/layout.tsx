import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export const revalidate = 0;

export default function RootLayout({ children }: Props) {
  return(
    <>
      <Hero title="Business" sub="事業内容" />
      <Sheet>{children}</Sheet>
    </>
  );
}
