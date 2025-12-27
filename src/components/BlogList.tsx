import type { MarkdownData } from '@/lib/markdown';
import Link from 'next/link';

export function BlogList({ items }: { items: MarkdownData[] }) {
  return (
    <div className="grid gap-8">
      {items.map((item) => (
        <Link href={`#`} key={item.id} className="block group border-b border-gray-100 dark:border-gray-800 pb-8 hover:border-black dark:hover:border-neon-green transition-colors">
           <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
             <h3 className="text-xl font-bold group-hover:text-neon-green transition-colors">{item.title}</h3>
             <span className="text-xs font-mono text-gray-400 mt-1 md:mt-0">{item.date}</span>
           </div>
           <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl text-sm">
             {item.description}
           </p>
        </Link>
      ))}
    </div>
  )
}
