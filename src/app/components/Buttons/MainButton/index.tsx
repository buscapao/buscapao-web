import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'outline'
    | 'ghost'
    | 'secondary'
    | 'destructive'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  styleType?: 'primary' | 'outline';
  responsive?: boolean;
}

export default function MainButton({
  children,
  variant = 'default',
  size = 'default',
  className,
  styleType = 'primary',
  responsive = true,
  ...props
}: MainButtonProps) {
  const getStyleClasses = () => {
    switch (styleType) {
      case 'outline':
        return 'bg-white text-primary border font-14-normal text-primary border-1hover:border-primary hover:text-primary-foreground';
      case 'primary':
      default:
        return 'bg-primary text-white hover:bg-primary-b-hover hover:bg-primary-hover hover:text-primary-foreground';
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        responsive && 'hidden md:block',
        getStyleClasses(),
        'transition-all duration-200',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
