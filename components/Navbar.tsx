"use client";
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
          " text-white text-6xl px-3 py-1 border-2 border-gray-400 bg-black animate-breathing"
        }>
        PC-DIYER
      </div>
      <style jsx>{`
        @keyframes breathing {
          0% {
            text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ff00ff,
              0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff,
              0 0 35px #ff00ff09;
          }
          25% {
            text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ff00ff,
              0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff,
              0 0 70px #ff00ff;
          }
          50% {
            text-shadow: 0 0 15px #ffffff, 0 0 30px #ffffff, 0 0 45px #ff00ff,
              0 0 60px #ff00ff, 0 0 75px #ff00ff, 0 0 90px #ff00ff,
              0 0 105px #ff00ff;
          }
          75% {
            text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ff00ff,
              0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff,
              0 0 70px #ff00ff;
          }
          100% {
            text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ff00ff,
              0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff,
              0 0 35px #ff00ff09;
          }
        }

        .animate-breathing {
          animation: breathing 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
