import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

export default function CourseCard({ course }: { course: Course; key?: string | number }) {
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.5, ease: customEase }}
      className="group bg-white rounded-3xl p-7 border-2 border-brand-primary/10 shadow-md hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:border-brand-secondary transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-black uppercase tracking-widest text-brand-primary bg-brand-primary/5 border border-brand-primary/10 px-3 py-1 rounded-full group-hover:bg-brand-primary group-hover:text-brand-accent transition-all duration-300">
            {course.level}
          </span>
          <div className="w-10 h-10 rounded-2xl bg-brand-primary text-brand-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300 shadow-sm">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-brand-primary mb-3 leading-tight group-hover:text-brand-secondary transition-colors duration-300">
          {course.title}
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-6 font-normal">
          {course.description}
        </p>

        <div className="space-y-4 mb-6 border-t border-gray-100 pt-4">
          <div className="flex items-center text-xs text-brand-primary font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4 mr-2 text-brand-secondary" />
            {course.duration}
          </div>
          {course.points && (
            <div className="flex flex-wrap gap-2">
              {course.points.slice(0, 3).map((point, index) => (
                <span key={index} className="px-2.5 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-700 uppercase tracking-tight group-hover:bg-brand-primary/5 transition-colors">
                  {point}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link
        to={`/formations/${course.slug}`}
        className="mt-4 py-3 px-5 bg-brand-primary group-hover:bg-brand-secondary text-white text-xs font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-between transition-all shadow-md group-hover:scale-[1.02]"
      >
        <span>Découvrir le programme</span>
        <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}
