"use client";

import { AwardItem } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Award, CheckCircle2, TrendingUp } from "lucide-react";

interface AwardStoryModalProps {
  award: AwardItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AwardStoryModal({
  award,
  isOpen,
  onClose,
}: AwardStoryModalProps) {
  if (!award) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-[#11141c] border-[#2a2f3d] text-[#f0ede8] p-0 overflow-hidden shadow-2xl">
        {/* Top accent banner */}
        <div className="relative px-6 pt-8 pb-6 bg-gradient-to-r from-[#151820] to-[#1c2030] border-b border-[#2a2f3d]">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[0.65rem] font-semibold bg-[#e8a020]/15 text-[#e8a020] border border-[#e8a020]/30">
              <Award className="w-3.5 h-3.5" />
              {award.year} Official Winner
            </span>
            <span
              className="text-[0.65rem] uppercase tracking-wider text-[#7a7f8e]"
              style={sans(500)}
            >
              {award.organisation}
            </span>
          </div>
          <DialogHeader>
            <DialogTitle
              className="text-2xl sm:text-3xl uppercase leading-tight text-left text-white"
              style={serif(800)}
            >
              {award.title}
            </DialogTitle>
            <DialogDescription
              className="text-xs uppercase tracking-widest text-[#e8a020] text-left mt-1"
              style={sans(600)}
            >
              {award.programme}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Content body */}
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Headline & Overview */}
          <div>
            <h4
              className="text-lg uppercase text-[#f0ede8] mb-2 leading-snug"
              style={serif(700)}
            >
              {award.story.headline}
            </h4>
            <p
              className="text-sm text-[#c4bfb8] leading-relaxed"
              style={sans(400)}
            >
              {award.story.overview}
            </p>
          </div>

          {/* Evaluation Criteria */}
          <div className="p-4 bg-[#0d0f14] border border-[#2a2f3d]">
            <p
              className="text-[0.65rem] uppercase tracking-[0.2em] text-[#e8a020] mb-3"
              style={sans(600)}
            >
              Key Evaluation & Recognition Criteria
            </p>
            <ul className="space-y-2.5">
              {award.story.criteria.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#c4bfb8]">
                  <CheckCircle2 className="w-4 h-4 text-[#e8a020] shrink-0 mt-0.5" />
                  <span style={sans(400)}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Impact */}
          <div className="flex items-start gap-3 p-4 bg-[#e8a020]/10 border border-[#e8a020]/25">
            <TrendingUp className="w-5 h-5 text-[#e8a020] shrink-0 mt-0.5" />
            <div>
              <p
                className="text-[0.65rem] uppercase tracking-wider text-[#e8a020] font-semibold mb-1"
                style={sans(600)}
              >
                Commercial Impact for Manufacturers
              </p>
              <p className="text-xs text-[#f0ede8] leading-relaxed" style={sans(400)}>
                {award.story.commercialImpact}
              </p>
            </div>
          </div>

          {/* Verification link button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-[#2a2f3d]">
            <a
              href={award.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#e8a020] hover:text-[#f0b030] transition-colors underline underline-offset-4"
              style={sans(500)}
            >
              <span>View Official Announcement on {award.organisation}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 bg-[#252932] hover:bg-[#323744] text-xs uppercase tracking-wider text-white transition-colors"
              style={sans(600)}
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
