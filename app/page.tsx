'use client'; 
import Image from "next/image";
import profilePic from "../Assets/my profesianl pic .png";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between md:py-32 md:px-16 px-4 py-4 bg-white dark:bg-black sm:items-start">
        <div className="flex md:flex-col-2 items-center gap-4 sm:items-start">
          <div>
            <strong className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Hi, I am Nagendra Palasani
            </strong>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              A passionate Full Stack Developer with expertise in building scalable web applications and a strong foundation in both front-end and back-end technologies.
            </p>
          </div>
          <Image src={profilePic} alt="Nagendra Palasani" width={200} height={200} className="rounded-full" />
        </div>

      </main>
    </div>
  );
}
