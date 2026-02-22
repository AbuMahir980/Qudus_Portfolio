import React from 'react';
import { ProjectBlueprint } from '../../types';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import { Terminal } from 'lucide-react';

interface BlueprintTerminalProps {
    blueprint: ProjectBlueprint;
}

const BlueprintTerminal: React.FC<BlueprintTerminalProps> = ({ blueprint }) => {
    const { theme } = usePage();

    return (
        <div className={cn(
            'rounded-xl border overflow-hidden font-mono text-sm shadow-2xl',
            theme === 'dark'
                ? 'bg-[#101828] border-zinc-700 text-zinc-300'
                : 'bg-[#364153] border-zinc-600 text-zinc-200'
        )}>
            {/* Terminal Header */}
            <div className={cn(
                "flex items-center justify-between px-4 py-3 border-b",
                theme === 'dark' ? "bg-[#1E2939] border-zinc-700" : "bg-[#2e3848] border-zinc-600"
            )}>
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-[#A9792B]" />
                    <span className="text-zinc-400 font-medium tracking-wide leading-none">{blueprint.title}</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                </div>
            </div>

            {/* Code Area */}
            <div className="p-6 overflow-x-auto">
                <pre>
                    <code className="block leading-relaxed text-[#A9792B]/90">
                        {blueprint.code}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default BlueprintTerminal;
