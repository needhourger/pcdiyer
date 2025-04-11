import { Doto } from "next/font/google";

const dotoPixel = Doto({
  variable: "--font-doto",
  weight: "900",
  subsets: ["latin"],
});

export default function NavBar() {
  return (
    <div className="w-full flex items-center justify-center px-6 py-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_80%_at_50%_50%,#000_90%,transparent_100%)]">
      <div
        className={
          dotoPixel.className +
          " text-white text-6xl px-3 py-1 border-2 border-gray-400 shadow-gray-500 shadow-sm bg-black"
        }>
        PC-DIYER
      </div>
    </div>
  );
}
