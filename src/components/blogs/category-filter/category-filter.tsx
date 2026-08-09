"use client";

import { sans } from "@/lib/utils";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  count: number;
  countLabel: string;
  countLabelPlural: string;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onSelect,
  count,
  countLabel,
  countLabelPlural,
}: CategoryFilterProps) {
  return (
    <div className="border-t border-b border-[#2a2f3d] bg-[#0d0f14] sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-0 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className="shrink-0 px-5 py-4 text-[0.65rem] uppercase tracking-widest transition-all duration-200 border-b-2"
              style={{
                ...sans(500),
                color: activeCategory === cat ? "#e8a020" : "#7a7f8e",
                borderBottomColor:
                  activeCategory === cat ? "#e8a020" : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
          <div className="ml-auto pl-6 shrink-0 flex items-center">
            <span
              className="text-[0.6rem] text-[#3a3f4d] uppercase tracking-widest"
              style={sans()}
            >
              {count} {count === 1 ? countLabel : countLabelPlural}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}