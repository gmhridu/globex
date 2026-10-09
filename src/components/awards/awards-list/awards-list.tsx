"use client";

import { useState } from "react";
import { AWARDS_DATA, AwardItem } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";
import { AwardCard } from "./award-card";
import { AwardStoryModal } from "./award-story-modal";

export function AwardsList() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenStory = (award: AwardItem) => {
    setSelectedAward(award);
    setModalOpen(true);
  };

  const handleCloseStory = () => {
    setModalOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-14 lg:gap-24">
        {/* Left column / Section Intro */}
        <div>
          <p
            className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
            style={sans(500)}
          >
            The 2026 Awards
          </p>
          <h2
            className="text-5xl md:text-7xl uppercase leading-[0.9] mb-7"
            style={serif(800)}
          >
            Recognition
            <br />
            Across Our
            <br />
            <span className="text-[#e8a020]">Core Work.</span>
          </h2>
          <p
            className="text-sm text-[#7a7f8e] leading-relaxed max-w-sm"
            style={sans(400)}
          >
            Each award reflects a different part of the same commitment: helping
            manufacturers turn international ambition into durable commercial
            growth.
          </p>
        </div>

        {/* Right column / Award Cards List */}
        <div className="border-t border-[#2a2f3d]">
          {AWARDS_DATA.map((award) => (
            <AwardCard
              key={award.id}
              award={award}
              onReadStory={handleOpenStory}
            />
          ))}
        </div>
      </div>

      {/* Award Story Modal */}
      <AwardStoryModal
        award={selectedAward}
        isOpen={modalOpen}
        onClose={handleCloseStory}
      />
    </section>
  );
}
