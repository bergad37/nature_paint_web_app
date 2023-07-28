import NavContact from "@/components/Header/NavContact";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen bg-orange-100 w-max">
        <div className="grow">
          <NavContact />
          <NavBar />
        </div>
        <Footer />
      </div>
    </>
  );
}
