"use client";

import { AwardItem } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

interface AwardCardProps {
  award: AwardItem;
  onReadStory: (award: AwardItem) => void;
}

export function AwardCard({ award, onReadStory }: AwardCardProps) {
  return (
    <article className="group py-10 md:py-12 border-b border-[#2a2f3d] last:border-b-0">
      <div className="grid md:grid-cols-[5rem_1fr_auto] gap-6 md:gap-8 items-start">
        {/* Number Seal */}
        <div
          className="w-16 h-16 rounded-full border border-[#e8a020]/40 flex items-center justify-center text-[#e8a020] text-xl group-hover:border-[#e8a020] group-hover:bg-[#e8a020]/10 transition-colors"
          style={serif(700)}
        >
          {award.number}
        </div>

        {/* Content */}
        <div>
          <p
            className="text-[0.6rem] uppercase tracking-[0.2em] text-[#e8a020] mb-3"
            style={sans(600)}
          >
            {award.organisation} · {award.programme}
          </p>
          <h3
            className="text-3xl md:text-5xl uppercase leading-none mb-5 group-hover:text-[#e8a020] transition-colors"
            style={serif(800)}
          >
            {award.title}
          </h3>
          <p
            className="text-sm text-[#7a7f8e] leading-relaxed max-w-xl"
            style={sans(400)}
          >
            {award.description}
          </p>

          {/* Read Award Story Button */}
          {award.story && (
            <button
              type="button"
              onClick={() => onReadStory(award)}
              className="mt-6 inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-1.5 hover:text-[#f0b030] hover:border-[#f0b030] transition-all cursor-pointer"
              style={sans(600)}
              aria-label={`Read the award story for ${award.title}`}
            >
              Read the Award Story →
            </button>
          )}
        </div>

        {/* External Link */}
        <a
          href={award.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`View official announcement for ${award.title} on ${award.organisation}`}
          className="w-12 h-12 border border-[#2a2f3d] flex items-center justify-center text-[#7a7f8e] hover:text-[#0d0f14] hover:bg-[#e8a020] hover:border-[#e8a020] transition-colors md:mt-2 shrink-0"
        >
          <span aria-hidden="true" className="text-base font-semibold">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
