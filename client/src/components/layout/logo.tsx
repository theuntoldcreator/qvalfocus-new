import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex items-center gap-1.5">
        <span className="block h-2.5 w-2.5 rounded-full bg-blue-500 transition-transform group-hover:scale-110"></span>
        <span className="block h-2.5 w-2.5 rounded-full bg-red-500 transition-transform group-hover:scale-110 delay-75"></span>
      </div>
      <span className="text-2xl font-bold text-slate-800 dark:text-white">TalentForge</span>
    </Link>
  );
}