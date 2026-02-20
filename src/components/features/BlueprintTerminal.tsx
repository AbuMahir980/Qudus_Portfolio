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
            theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-900 border-zinc-700 text-zinc-300'
        )}>
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-cyan-500" />
                    <span className="text-zinc-400 font-medium tracking-wide leading-none">{blueprint.title}</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
            </div>

            {/* Code Area */}
            <div className="p-6 overflow-x-auto">
                <pre className="selection:bg-cyan-500/30">
                    <code className={cn(
                        'block leading-relaxed',
                        theme === 'dark' ? 'text-cyan-400/90' : 'text-cyan-400'
                    )}>
                        {blueprint.code}
                    </code>
                </pre>
            </div>

            {/* Low-opacity grid background mentioned in AGENT.md */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    );
};

export default BlueprintTerminal;
