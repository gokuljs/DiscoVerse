'use client';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ActionTooltipPros {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'right ' | 'left' | 'bottom';
    align?: 'start' | 'center' | 'end';
}
const ActionTooltip: React.FC<ActionTooltipPros> = ({ label, children, side, align }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>Hover</TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ActionTooltip;
