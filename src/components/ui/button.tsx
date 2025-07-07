// src/components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:transition-colors [&_svg]:duration-200",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black hover:text-white",
        destructive: "bg-black text-white hover:bg-black hover:text-white",
        outline: "bg-black text-white hover:bg-black hover:text-white border border-black",
        secondary: "bg-black text-white hover:bg-black hover:text-white",
        ghost: "bg-black text-white hover:bg-black hover:text-white",
        link: "bg-black text-white hover:bg-black hover:text-white underline-offset-4",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-10 px-6 text-base",
        icon: "h-9 w-9 p-2 bg-black text-white hover:bg-black hover:text-white",
      },
      loading: {
        true: "relative text-transparent [&_svg]:absolute [&_svg]:inset-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, loading, className }))}
        aria-busy={loading}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? <Loader2 className="animate-spin h-4 w-4" aria-hidden /> : null}
        <span className={loading ? "opacity-0" : ""}>{children}</span>
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
