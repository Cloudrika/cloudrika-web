import { forwardRef, useState, useRef, useEffect } from "react";
import { DropdownProps, DropdownOption } from "./dropdown.types";
import { cn } from "@workspace/ui/lib/utils";
import { dropdownVariants } from "./dropdown.utils";
import { ChevronDown, Search, Check, X } from "lucide-react";

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({ 
  variant, 
  size, 
  shape, 
  className,
  trigger,
  placeholder = "Select option...",
  options = [],
  value,
  onValueChange,
  searchable = false,
  multiple = false,
  disabled = false,
  loading = false,
  error,
  helperText,
  label,
  ...props 
}, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const selectedValues = Array.isArray(value) ? value : value ? [value] : [];
    
    const filteredOptions = searchable && searchQuery
      ? options.filter((option: DropdownOption) => 
          option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          option.category?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : options;

    const groupedOptions = filteredOptions.reduce((acc: Record<string, DropdownOption[]>, option: DropdownOption) => {
      const category = option.category || 'default';
      if (!acc[category]) acc[category] = [];
      acc[category].push(option);
      return acc;
    }, {} as Record<string, DropdownOption[]>);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setSearchQuery("");
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
      if (multiple) {
        const newValues = selectedValues.includes(optionValue)
          ? selectedValues.filter(v => v !== optionValue)
          : [...selectedValues, optionValue];
        onValueChange?.(newValues);
      } else {
        onValueChange?.(optionValue);
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    const getDisplayText = () => {
      if (selectedValues.length === 0) return placeholder;
      if (!multiple) {
        const selected = options.find((opt: DropdownOption) => opt.value === selectedValues[0]);
        return selected?.label || selectedValues[0];
      }
      if (selectedValues.length === 1) {
        const selected = options.find((opt: DropdownOption) => opt.value === selectedValues[0]);
        return selected?.label || selectedValues[0];
      }
      return `${selectedValues.length} selected`;
    };

    const triggerElement = trigger || (
      <button
        ref={triggerRef}
        type="button"
        className={cn(dropdownVariants({ variant, size, shape }), className)}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="truncate">{loading ? "Loading..." : getDisplayText()}</span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")} />
      </button>
    );

    const dropdownElement = (
      <div className="relative" ref={ref || dropdownRef} {...props}>
        {label && (
          <label className="text-sm font-medium leading-none mb-2 block">
            {label}
          </label>
        )}
        
        {triggerElement}
        
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full min-w-[8rem] bg-background border border-input rounded-md shadow-lg">
            {searchable && (
              <div className="flex items-center border-b px-3 py-2">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <input
                  className="flex-1 outline-none placeholder:text-muted-foreground"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-2 h-4 w-4 shrink-0 opacity-50 hover:opacity-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
            
            <div className="max-h-60 overflow-auto p-1">
              {Object.keys(groupedOptions).length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No options found.
                </div>
              ) : (
                (Object.entries(groupedOptions) as [string, DropdownOption[]][]).map(([category, categoryOptions]) => (
                  <div key={category}>
                    {category !== 'default' && (
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        {category}
                      </div>
                    )}
                    {categoryOptions.map((option) => {
                      // Type guard to ensure option.value is a string
                      if (typeof option.value !== 'string') return null;
                      
                      const isSelected = selectedValues.includes(option.value);
                      return (
                        <div
                          key={option.value}
                          className={cn(
                            "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                            option.disabled && "pointer-events-none opacity-50",
                            isSelected && "bg-accent text-accent-foreground"
                          )}
                          onClick={() => !option.disabled && handleSelect(option.value)}
                        >
                          {multiple && (
                            <div className={cn(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded border",
                              isSelected ? "bg-primary border-primary" : "border-input"
                            )}>
                              {isSelected && <Check className="h-3 w-3 text-primary-foreground" />}
                            </div>
                          )}
                          
                          {option.icon && (
                            <div className="mr-2 h-4 w-4">
                              {option.icon}
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <div className="font-medium">{option.label}</div>
                            {option.description && (
                              <div className="text-xs text-muted-foreground">{option.description}</div>
                            )}
                          </div>
                          
                          {option.count !== undefined && (
                            <div className="ml-2 text-xs text-muted-foreground">
                              {option.count.toLocaleString()}
                            </div>
                          )}
                          
                          {!multiple && isSelected && (
                            <Check className="ml-2 h-4 w-4" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {error && (
          <p className="mt-2 text-sm text-destructive">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="mt-2 text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );

    return dropdownElement;
})
Dropdown.displayName = 'Dropdown'

export { Dropdown }