interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

export default function StatCard({ number, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{number}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}
