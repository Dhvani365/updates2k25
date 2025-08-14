"use client";
import * as React from "react";
import { Check, ChevronsUpDown, XCircleIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

type EmailOption = {
  value: string;
  label: string;
};

type MultiSelectComboboxProps = {
  options: EmailOption[];
  selectedOptions: EmailOption[];
  onChange: (selected: EmailOption[]) => void;
};

export const MultiSelectCombobox = ({
  options,
  selectedOptions,
  onChange,
}: MultiSelectComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSelect = (option: EmailOption) => {
    const alreadySelected = selectedOptions?.some(
      (selected) => selected.value === option.value
    );
    if (!alreadySelected) {
      onChange([...selectedOptions, option]);
    } else {
      onChange(
        selectedOptions.filter((selected) => selected.value !== option.value)
      );
    }
    setOpen(false);
  };
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-slate-950 overflow-x-hidden"
          >
            {selectedOptions?.length > 0
              ? selectedOptions.map((opt) => opt.label).join(", ")
              : "Select options..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-slate-900">
          <Command>
            <CommandInput
              placeholder="Search emails..."
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {filteredOptions?.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => handleSelect(option)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedOptions?.some(
                          (opt) => opt.value === option.value
                        )
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className=" mt-4 flex flex-col gap-4">
        {selectedOptions?.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <span className="text-sm font-medium text-purple-100 ml-2">
              {option.label}
            </span>
            <button
              type="button"
              onClick={() =>
                onChange(
                  selectedOptions.filter((opt) => opt.value !== option.value)
                )
              }
              className="text-rose-600 cursor-pointer"
            >
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
