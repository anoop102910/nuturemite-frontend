import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader, LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center focus-within:border  whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-tert-100 text-white hover:bg-tert-100/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-green-500 text-white hover:bg-green-500/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-20",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, pending = false, variant, children, size, asChild = false, ...props }, ref) => {
    if (asChild)
      return (
        <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
      );
    else
      return (
        <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {!pending ? (
            children
          ) : (
            <LoaderCircle className="animate-spin text-2xl font-bold mx-auto text-center" />
          )}
        </button>
      );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
