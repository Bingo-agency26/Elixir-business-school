import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

export default function CourseCard({ course }: { course: Course; key?: string | number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl p-6 border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
            {course.level}
          </span>
          <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-text group-hover:text-white transition-all">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-brand-text mb-2 leading-tight">
          {course.title}
        </h3>

        <p className="text-brand-text/60 text-xs leading-relaxed mb-6 font-light">
          {course.description}
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center text-[10px] text-brand-text opacity-50 uppercase tracking-widest font-semibold">
            <Clock className="w-3 h-3 mr-2" />
            {course.duration}
          </div>
          {course.points && (
            <div className="flex flex-wrap gap-1.5">
              {course.points.slice(0, 3).map((point, index) => (
                <span key={index} className="px-2 py-0.5 bg-brand-bg rounded text-[8px] font-bold text-brand-text/50 uppercase tracking-tight">
                  {point}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link
        to={`/formations/${course.slug}`}
        className="mt-4 text-[10px] font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-text transition-colors"
      >
        Détails du programme →
      </Link>
    </motion.div>
  );
}
