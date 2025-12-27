import type { MarkdownData } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';

export function ExperienceList({ items }: { items: MarkdownData[] }) {
  return (
    <div className="space-y-16">
      {items.map((item) => (
        <div key={item.id} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 hover:border-neon-purple transition-colors duration-300">
           {/* Timeline Node */}
           <div className="absolute -left-[9px] top-0 h-4 w-4 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 group-hover:border-neon-purple" />
           
           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
             <h3 className="text-xl font-bold uppercase tracking-tight text-black dark:text-white">{item.title}</h3>
             <span className="text-xs font-mono text-neon-blue mt-1 sm:mt-0 uppercase tracking-widest">{item.period || item.date}</span>
           </div>
           
           {item.company && (
             <p className="text-sm font-semibold text-gray-400 mb-4">{item.company}</p>
           )}
           
           <div className="prose prose-neutral dark:prose-invert prose-sm max-w-none text-gray-600 dark:text-gray-400">
             <ReactMarkdown>{item.content}</ReactMarkdown>
           </div>
        </div>
      ))}
    </div>
  )
}
