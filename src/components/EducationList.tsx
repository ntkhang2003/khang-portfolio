export function EducationList() {
  return (
    <div className="space-y-8">
      <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 hover:border-neon-purple transition-colors duration-300 group">
           {/* Timeline Node */}
           <div className="absolute -left-[9px] top-0 h-4 w-4 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 group-hover:border-neon-purple transition-colors duration-300" />
           
           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
             <h3 className="text-xl font-bold uppercase tracking-tight text-black dark:text-white">University of Information Technology ‐ VNUHCM</h3>
             <span className="text-xs font-mono text-neon-blue mt-1 sm:mt-0 uppercase tracking-widest">Sep 2021 - Apr 2025</span>
           </div>
           
           <p className="text-sm font-semibold text-gray-400 mb-2">Bachelor of Computer Science</p>
           <p className="text-sm text-gray-600 dark:text-gray-400">GPA: 8.65/10.0</p>
      </div>
    </div>
  )
}
