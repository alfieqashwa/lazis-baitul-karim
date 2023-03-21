import { Heart } from "lucide-react"

export const Copyright = () => (
  <footer className="fixed bottom-0 z-20 w-full border-t-2 border-slate-600 bg-slate-900  py-1 shadow dark:border-slate-800 dark:bg-slate-900">
    <div className="flex h-6 items-center justify-center text-xs font-medium text-slate-400 dark:text-slate-400">
      <p>© {new Date().getFullYear()} Made with </p>
      <Heart className="mx-1.5" size={14} fill="red" color="red" />
      <span>by</span>
      <a
        className="gradient-title ml-1.5 tracking-wider transition-transform duration-300 ease-in-out hover:scale-105"
        href="https://github.com/alfieqashwa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alfie Qashwa
      </a>
    </div>
  </footer>
)
