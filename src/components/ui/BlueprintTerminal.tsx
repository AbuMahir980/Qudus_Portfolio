import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ProjectBlueprint } from '../../types';

interface BlueprintTerminalProps {
    blueprint: ProjectBlueprint;
    className?: string;
}

const BlueprintTerminal: React.FC<BlueprintTerminalProps> = ({ blueprint, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "bg-[#101828] border border-zinc-700 rounded-lg overflow-hidden font-mono text-sm shadow-2xl",
                className
            )}
        >
            <div className="bg-[#1E2939] border-b border-zinc-700 px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-[#005F5A]/70" />
                </div>
                <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest leading-none pt-0.5">
                    {blueprint.title}
                </span>
            </div>
            <div className="p-4 overflow-x-auto">
                <div className="flex gap-4 mb-4 border-b border-zinc-800/50 pb-2">
                    <span className="text-[#A9792B]/80 leading-none">TYPE: {blueprint.type.toUpperCase()}</span>
                    <span className="text-zinc-600 leading-none">|</span>
                    <span className="text-[#005F5A]/80 leading-none">LANG: {blueprint.language.toUpperCase()}</span>
                </div>
                <pre className="text-zinc-300 leading-relaxed whitespace-pre font-mono">
                    <code>{blueprint.code}</code>
                </pre>
            </div>
            <div className="bg-[#1E2939]/50 px-4 py-1.5 border-t border-zinc-800/50">
                <div className="flex items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-tighter">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005F5A] animate-pulse" />
                    System Active
                </div>
            </div>
        </motion.div>
    );
};

export default BlueprintTerminal;
