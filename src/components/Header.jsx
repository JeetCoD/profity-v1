import { UserButton } from "@clerk/clerk-react";

function Header() {
  return (
    <div className="flex bg-slate-50 p-2 justify-between">
      <p className="text-[2rem] font-bold text-gray-500">
        <span className="text-gray-900 font-extrabold">P</span>rofity
      </p>
      <UserButton/>
    </div>
  );
}

export default Header;
