import type { MarkdownData } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ProjectsList({ items }: { items: MarkdownData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item) => (
        <div key={item.id} className="group border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-black/50 hover:border-black dark:hover:border-neon-purple transition-all duration-300 relative overflow-hidden">
           {/* Hover Effect Background */}
           <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

           <div className="flex justify-between items-start mb-4 relative z-10">
             <h3 className="text-lg font-bold uppercase tracking-wide">{item.title}</h3>
             {item.link && (
               <Link href={item.link} target="_blank" className="text-gray-400 group-hover:text-neon-blue transition-colors">
                 <ArrowUpRight size={20} />
               </Link>
             )}
           </div>
           
           <div className="prose prose-neutral dark:prose-invert prose-sm max-w-none text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 relative z-10">
             <ReactMarkdown>{item.content}</ReactMarkdown>
           </div>

           {item.tags && (
             <div className="flex flex-wrap gap-2 relative z-10">
               {item.tags.map((tag: string) => (
                 <span key={tag} className="text-[10px] uppercase tracking-wider font-mono border border-gray-100 dark:border-gray-800 px-2 py-1 text-gray-500 dark:text-gray-400 group-hover:border-neon-blue/30 group-hover:text-neon-blue transition-colors">
                   {tag}
                 </span>
               ))}
             </div>
           )}
        </div>
      ))}
    </div>
  )
}
