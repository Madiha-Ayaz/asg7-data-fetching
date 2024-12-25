import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/component/footer"
export default function Home() {
  return (
    <div>
      
      <div className="flex flex-col h-screen gap-8 justify-center items-center px-4">
        <p className="text-[32px] md:text-[55px] font-bold text-center">
          Data Fetching Assignment
        </p>

        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <p className="font-bold text-[20px] md:text-[25px]">
            Discover the Power of Data Fetching:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
          <Link href="/Client-data-fetching">
            <Button
              variant="outline"
              className="bg-yellow-400 p-4 md:p-10 w-full md:w-[300px] font-bold text-[16px] md:text-[20px]"
            >
              Client Data Fetching
            </Button>
          </Link>

          <Link href="/Server-fetch">
            <Button
              variant="outline"
              className="bg-yellow-400 p-4 md:p-10 w-full md:w-[300px] font-bold text-[16px] md:text-[20px]"
            >
              Server Side Data Fetching
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
