import React from 'react'
import {
  Files,
  Search,
  GitGraph,
  Settings,
  ChevronRight,
  FolderOpen,
  FileCode2,
  FlaskConical,
  Monitor,
  MoreHorizontal,
  Split,
  ChevronDown,
  Bell,
  CircleDot,
  UserCircle,
  Hash,
} from 'lucide-react'

interface VSCodeProps {
  children: React.ReactNode
  fileName: string
}

const VSCodeWindow = ({ children, fileName }: VSCodeProps) => {
  return (
    <div className="flex flex-col h-full w-full bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/5 overflow-hidden text-[#cccccc] font-sans">
      <div className="h-8 bg-[#1e1e1e] flex items-center justify-between px-3 border-b border-black/40">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
        </div>
        <div className="bg-[#2a2d2e] h-5 px-8 rounded-md border border-white/5 flex items-center gap-2 text-[10px] opacity-40">
          <Search size={10} />
          <span>Portfolio - VS Code</span>
        </div>
        <div className="flex items-center gap-2 opacity-40">
          <Split size={12} />
          <MoreHorizontal size={12} />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-9 bg-[#333333] flex flex-col items-center py-4 gap-4 border-r border-black/20">
          <Files className="w-5 h-5 text-white border-l-2 border-white pl-1" />
          <Search className="w-5 h-5 opacity-40" />
          <div className="relative">
            <GitGraph className="w-5 h-5 opacity-40" />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-[7px] text-white px-1 rounded-full font-bold">
              1
            </span>
          </div>
          <FlaskConical className="w-5 h-5 opacity-40" />
          <div className="mt-auto flex flex-col gap-4 mb-2">
            <UserCircle className="w-5 h-5 opacity-40" />
            <Settings className="w-5 h-5 opacity-40" />
          </div>
        </div>

        <div className="hidden md:flex w-40 bg-[#252526] flex-col text-[11px] font-sans border-r border-black/40 select-none">
          <div className="p-2 flex items-center justify-between uppercase text-[9px] tracking-tighter font-bold opacity-50">
            <span>Explorer</span>
          </div>

          <div className="flex flex-col overflow-y-auto scrollbar-hide">
            <div className="flex items-center gap-1 px-1 py-0.5 font-bold text-white/90 text-[10px]">
              <ChevronDown size={12} />
              <span>PORTFOLIO</span>
            </div>

            <div className="flex flex-col text-[11px]">
              <div className="flex items-center gap-1.5 px-3 py-0.5 opacity-40 italic">
                <ChevronRight size={12} />
                <FolderOpen size={13} />
                <span>node_modules</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-0.5 opacity-80">
                <ChevronRight size={12} />
                <Monitor size={13} className="text-blue-400" />
                <span>public</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-0.5 text-white">
                <ChevronDown size={12} />
                <FolderOpen size={13} className="text-blue-400" />
                <span>src</span>
              </div>

              <div className="pl-6 border-l border-white/5 ml-4 flex flex-col">
                <div className="flex items-center gap-1.5 py-0.5 opacity-80">
                  <ChevronRight size={10} />
                  <FolderOpen size={13} className="text-yellow-600" />
                  <span>components</span>
                </div>
                <div className="flex items-center gap-1.5 py-0.5 opacity-80">
                  <ChevronRight size={10} />
                  <FolderOpen size={13} className="text-yellow-600" />
                  <span>data</span>
                </div>
                <div className="flex items-center gap-1.5 py-0.5 opacity-80">
                  <ChevronRight size={10} />
                  <FolderOpen size={13} className="text-yellow-600" />
                  <span>store</span>
                </div>
                <div className="flex items-center gap-1.5 py-0.5 opacity-80">
                  <ChevronRight size={10} />
                  <FolderOpen size={13} className="text-yellow-600" />
                  <span>types</span>
                </div>

                <div className="flex items-center justify-between pr-2 py-0.5 -ml-1 pl-1 bg-white/5 text-white border-l border-blue-500">
                  <div className="flex items-center gap-1.5">
                    <FileCode2 size={13} className="text-blue-400" />
                    <span className="truncate">{fileName}</span>
                  </div>
                  <span className="text-[9px] text-yellow-500 font-bold">
                    M
                  </span>
                </div>

                <div className="flex items-center gap-1.5 py-0.5 opacity-80">
                  <Hash size={13} className="text-purple-400" />
                  <span>index.css</span>
                </div>
                <div className="flex items-center gap-1.5 py-0.5 opacity-80">
                  <FileCode2 size={13} className="text-blue-400" />
                  <span>main.tsx</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
          <div className="h-8 bg-[#2d2d2d] flex border-b border-black/20">
            <div className="bg-[#1e1e1e] px-3 flex items-center gap-2 border-t border-purple-500 text-[11px] text-white">
              <FileCode2 size={12} className="text-blue-400" />
              <span>{fileName}</span>
              <span className="opacity-20 text-[10px]">×</span>
            </div>
          </div>

          <div className="flex-1 p-4 font-mono text-[12px] leading-relaxed overflow-auto scrollbar-hide">
            {children}
          </div>

          <div className="h-24 bg-[#1e1e1e] border-t border-white/5 p-3 font-mono text-[11px]">
            <div className="flex gap-4 mb-1.5 opacity-40 text-[9px]">
              <span className="border-b border-white">TERMINAL</span>
              <span>DEBUG</span>
            </div>
            <p className="text-[#cccccc] opacity-70">
              <span className="text-green-500">PS C:\dev&gt;</span> npm run dev
            </p>
            <p className="text-blue-400/80 mt-0.5 italic">ready in 450ms</p>
          </div>
        </div>
      </div>

      <div className="h-5 bg-[#181818] flex items-center justify-between px-2 text-[9px] text-[#cccccc]/60 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-white/80">
            <GitGraph size={10} />
            <span>main*</span>
          </div>
          <div className="flex items-center gap-1">
            <CircleDot size={10} />
            <span>0 0</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-white/80">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Go Live</span>
          </div>
          <Bell size={10} />
        </div>
      </div>
    </div>
  )
}

export default VSCodeWindow
