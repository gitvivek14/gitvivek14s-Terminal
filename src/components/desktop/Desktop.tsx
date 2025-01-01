import { Terminal, FileText, Image, Folder, Trash2 } from "lucide-react";
import Link from "next/link";

const Desktop = () => {
    return (
      <div className="relative min-h-screen desktop">
        <div className="absolute inset-0 p-4 grid grid-cols-6 gap-4 content-start">
          <Link
            href="/terminal"
            className="desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg  hover:bg-black/30 transition-all duration-200 
          cursor-pointer"
          >
            <Terminal className="w-12 h-12 text-white" />
            <span className="mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm">
            Terminal
          </span>
          </Link>
          <div className="desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer">
            <Folder className="w-12 h-12 text-white" />
            <span className="mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm">Documents</span>
          </div>
          <div className="desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer">
            <Image className="w-12 h-12 text-white" />
            <span className="mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm">Pictures</span>
          </div>
          <div className="desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer">
            <FileText className="w-12 h-12 text-white" />
            <span className="mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm">Files</span>
          </div>
          <div className="desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer">
            <Trash2 className="w-12 h-12 text-white" />
            <span className="mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm">Trash</span>
          </div>
        </div>
        <div className="taskbar fixed bottom-0 left-0 right-0 h-16 flex items-center justify-start px-4 border-t border-white/20">
          <Link
            href="/"
            className="p-2 rounded-lg hover:bg-black/10 transition-colors"
          >
            <Terminal className="w-6 h-6 text-gray-800" />
          </Link>
        </div>
      </div>
    );
  };
  
  export default Desktop;