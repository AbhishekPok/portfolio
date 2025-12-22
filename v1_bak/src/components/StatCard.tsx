import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent/50 p-6 backdrop-blur-sm border border-border hover:border-[#6366F1]/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#10B981] flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold">
            {value}
          </div>
          <p className="text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
}
