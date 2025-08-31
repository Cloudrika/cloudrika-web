import { forwardRef, useState } from "react";
import { InputProps } from "./input.types";
import { cn } from "@workspace/ui/lib/utils";
import { inputVariants } from "./input.utils";

const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  variant, 
  size, 
  shape, 
  className, 
  type,
  label,
  error,
  helperText,
  characterCount = false,
  maxLength,
  onChange,
  value,
  defaultValue,
  ...props 
}, ref) => {
    const [currentLength, setCurrentLength] = useState(
      value?.toString().length || defaultValue?.toString().length || 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (characterCount) {
        setCurrentLength(e.target.value.length);
      }
      onChange?.(e);
    };

    const inputElement = (
      <input
        type={type}
        ref={ref}
        className={cn(inputVariants({ variant, size, shape }), className)}
        onChange={handleChange}
        value={value}
        defaultValue={defaultValue}
        maxLength={maxLength}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
        {...props}
      />
    );

    if (!label && !error && !helperText && !characterCount) {
      return inputElement;
    }

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={props.id} 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {inputElement}
          {characterCount && maxLength && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
              {currentLength}/{maxLength}
            </div>
          )}
        </div>
        {error && (
          <p id={`${props.id}-error`} className="text-sm text-destructive">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${props.id}-helper`} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
})
Input.displayName = 'Input'

export { Input }