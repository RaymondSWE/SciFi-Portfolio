import { cn } from '@/lib/utils';
interface TechnologyChipProps {
  tech: string;
  size?: 'small' | 'medium' | 'large';
  bgColor?: string;
  textColor?: string;
  ariaLabel?: string;
  className?: string;
}

export const TechnologyChip: React.FC<TechnologyChipProps> = ({
  tech,
  size = 'medium',
  bgColor = '#0D3B66',
  textColor = 'text-gray-200',
  ariaLabel,
  className,
}) => {
  const sizeClasses = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };

  return (
    <div
      className={cn(
        `inline-flex items-center justify-center rounded-full shadow-md mr-2 mb-2 ${sizeClasses[size]} ${textColor}`,
        className,
      )}
      aria-label={ariaLabel || tech}
      style={{ backgroundColor: bgColor }}
    >
      {tech}
    </div>
  );
};
