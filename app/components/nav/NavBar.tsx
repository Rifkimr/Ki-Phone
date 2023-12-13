import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import CartCaount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";

const redresses = Redressed({ subsets: ["latin"], weight: ["400"] });
const NavBar = async () => {
  const currenUser = await getCurrentUser();
  return (
    <div className="bg-slate-200 w-full top-0 sticky shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${redresses.className} font-bold text-2xl`}
            >
              Ki-Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCaount />
              <UserMenu currenUser = {currenUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
