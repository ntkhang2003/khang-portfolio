export function About() {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center pt-16 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[120px] rounded-full pointing-events-none -z-10" />
       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon-blue/5 blur-[100px] rounded-full pointing-events-none -z-10" />
       
       <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-500">
                    Hello, I&apos;m
                </span>
                <br />
                <span className="relative inline-block text-black dark:text-white mt-2">
                    Khang
                    <div className="absolute -inset-1 bg-neon-purple/20 blur-sm hidden dark:block"></div>
                </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl mb-8 border-l-2 border-neon-blue pl-6">
                A software engineer with a passion for <span className="text-neon-purple font-medium">AI platform</span> and <span className="text-neon-purple font-medium">operations</span>.
            </p>
            <div className="flex gap-4">
                <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-mono text-sm uppercase tracking-widest hover:bg-neon-purple hover:text-white dark:hover:bg-neon-purple dark:hover:text-white transition-all duration-300">
                    View Work
                </button>
                <button className="px-6 py-3 border border-black dark:border-white font-mono text-sm uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                    Contact
                </button>
            </div>
         </div>
         
         {/* Cyberpunk Hoodie Figure */}
         <div className="relative h-[400px] w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 group overflow-hidden">
             
             {/* Grid overlay */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] z-20 pointer-events-none"></div>

             <img 
                 src="/intro.gif" 
                 alt="Portrait" 
                 className="relative z-10 w-full h-full object-cover"
             />

             {/* Corner Accents */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-purple"></div>
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-blue"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-purple"></div>
         </div>
       </div>
    </section>
  )
}
