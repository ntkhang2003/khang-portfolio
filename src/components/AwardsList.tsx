export function AwardsList() {
  return (
    <ul className="grid gap-4">
      {[
        { name: "4th Place", issuer: "Grab Tech Bootcamp", year: "2025" },
        { name: "3rd Place", issuer: "SUDO CODE", year: "2024" }
      ].map((award, i) => (
        <li key={i} className="flex justify-between items-center p-4 border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/30 hover:border-neon-blue hover:translate-x-2 transition-all cursor-default">
          <div className="flex flex-col">
             <span className="font-bold text-sm uppercase tracking-wide">{award.name}</span>
             <span className="text-xs text-gray-500 mt-1">{award.issuer}</span>
          </div>
          <span className="text-xs text-neon-blue font-mono">{award.year}</span>
        </li>
      ))}
    </ul>
  )
}
