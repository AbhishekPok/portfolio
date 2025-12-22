import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  level: number;
}

export function SkillCard({ name, icon, level }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl bg-card p-6 border border-border hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/10"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#10B981] flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{level}% proficiency</p>
        </div>
      </div>

      <div className="w-full bg-accent rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-[#6366F1] to-[#10B981] rounded-full"
        />
      </div>
    </motion.div>
  );
}
