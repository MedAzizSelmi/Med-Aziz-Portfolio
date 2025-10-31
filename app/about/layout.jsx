import Footer from "@/components/Footer";

export const metadata = {
  title: "Med Aziz | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
