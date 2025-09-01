'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  text: string;
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link';
  className?: string;
}

export function IconButton({
  icon: Icon,
  text,
  variant = 'default',
  className,
  ...props
}: IconButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </Button>
  );
}
