interface DataTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export default function DataTable({ title, headers, rows }: DataTableProps) {
  return (
    <div className="my-10">
      <h3 className="font-serif text-xl md:text-2xl font-bold text-navy dark:text-cream mb-4">{title}</h3>
      <div className="overflow-x-auto rounded-lg border border-navy/10 dark:border-cream/10 shadow-sm">
        <table className="w-full min-w-[600px] text-sm md:text-base">
          <thead>
            <tr className="bg-navy dark:bg-burgundy text-white">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold font-sans tracking-wide text-sm uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-navy dark:text-cream/90">
            {rows.map((row, ri) => (
              <tr key={ri} className={`border-b border-navy/5 dark:border-cream/5 ${ri % 2 === 1 ? "bg-parchment/50 dark:bg-navy-light/30" : "bg-white dark:bg-navy/20"} hover:bg-gold/5 dark:hover:bg-gold/10 transition-colors`}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 align-top leading-relaxed">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
