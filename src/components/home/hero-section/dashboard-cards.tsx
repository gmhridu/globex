"use client";

import { motion } from "framer-motion";

const DashboardCards = () => {
  return (
    <div className="absolute top-1/2 -right-26 -translate-y-1/2 pointer-events-none hidden lg:flex flex-col gap-4">
      <div className="w-80">
        <FloatingCard title="MARKET INTELLIGENCE" code="DID">
          <BarChart />
        </FloatingCard>
      </div>

      <div className="w-80">
        <FloatingCard title="OPPORTUNITY PIPELINE" code="">
          <DonutChart />
        </FloatingCard>
      </div>

      <div className="w-80">
        <FloatingCard title="MARKET COVERAGE" code="CDD">
          <CoverageMap />
        </FloatingCard>
      </div>
    </div>
  );
};

export default DashboardCards;

function FloatingCard({
  title,
  code,
  children,
}: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        min-h-52
        rounded-2xl
        border
        border-white/10
        bg-[#11151d]/90
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        overflow-hidden
        flex
        flex-col
      "
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <h3 className="text-xs font-semibold tracking-[.25em] text-white">
          {title}
        </h3>

        <span className="text-[10px] tracking-[.25em] text-gray-500">
          {code}
        </span>
      </div>

      <div className="flex-1 flex items-center p-5">{children}</div>
    </div>
  );
}

function BarChart() {
  const bars = [32, 48, 41, 60, 56, 78, 70, 82, 65, 94, 76, 88];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div>
      <div className="relative h-8">
        {/* grid */}

        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-white/5"
            style={{
              top: `${i * 25}%`,
            }}
          />
        ))}

        <div className="absolute bottom-0 flex h-full w-full items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                delay: i * 0.05,
                duration: 0.7,
              }}
              className="
                flex-1
                rounded-t-md
                bg-linear-to-t
                from-[#8a6420]
                via-[#d9a441]
                to-[#f4c96b]
                shadow-[0_0_15px_rgba(217,164,65,.3)]
              "
            />
          ))}
        </div>
      </div>

      {/* Month Labels */}
      <div className="mt-2 flex gap-2">
        {months.map((month) => (
          <div
            key={month}
            className="flex-1 text-center text-[8px] text-gray-500"
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
}

function DonutChart() {
  const legendItems = [
    { label: "NEW LEADS", percentage: "32%", color: "#D9A441" },
    { label: "QUALIFIED", percentage: "28%", color: "#F4C96B" },
    { label: "PROPOSALS", percentage: "20%", color: "#8A6420" },
    { label: "NEGOTIATION", percentage: "14%", color: "#6B5020" },
    { label: "CLOSED WON", percentage: "6%", color: "#4A3515" },
  ];

  return (
    <div className="flex w-full items-center justify-between gap-6">
      {/* Chart */}
      <div className="flex flex-1 justify-center">
        <div className="relative h-30 w-30">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.915"
              fill="none"
              stroke="#232932"
              strokeWidth="3"
            />

            <motion.circle
              cx="18"
              cy="18"
              r="15.915"
              fill="none"
              stroke="#D9A441"
              strokeWidth="3"
              strokeDasharray="32 68"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.circle
              cx="18"
              cy="18"
              r="15.915"
              fill="none"
              stroke="#F4C96B"
              strokeWidth="3"
              strokeDasharray="28 72"
              strokeDashoffset="-32"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />

            <motion.circle
              cx="18"
              cy="18"
              r="15.915"
              fill="none"
              stroke="#8A6420"
              strokeWidth="3"
              strokeDasharray="20 80"
              strokeDashoffset="-60"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4 }}
            />

            <motion.circle
              cx="18"
              cy="18"
              r="15.915"
              fill="none"
              stroke="#6B5020"
              strokeWidth="3"
              strokeDasharray="14 86"
              strokeDashoffset="-80"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6 }}
            />

            <motion.circle
              cx="18"
              cy="18"
              r="15.915"
              fill="none"
              stroke="#4A3515"
              strokeWidth="3"
              strokeDasharray="6 94"
              strokeDashoffset="-94"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8 }}
            />
          </svg>

          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-semibold text-white">100%</span>
            <span className="text-[8px] tracking-[0.2em] text-gray-500">
              PIPELINE
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex-1 space-y-2">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />

            <span className="flex-1 text-[10px] tracking-wide text-gray-400">
              {item.label}
            </span>

            <span className="text-[10px] font-semibold text-white">
              {item.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoverageMap() {
  return (
    <div className="relative h-10 overflow-hidden rounded-lg bg-[#0b0e13]">
      <img
        src="/assests/home/world-map-dark.svg"
        className="absolute inset-0 h-full w-full object-contain opacity-30"
        alt=""
      />

      {[
        ["25%", "32%"],
        ["40%", "28%"],
        ["48%", "42%"],
        ["56%", "38%"],
        ["72%", "34%"],
      ].map(([left, top], i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.7, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + i,
          }}
          className="absolute"
          style={{ left, top }}
        >
          <div className="h-2.5 w-2.5 rounded-full bg-[#F4C96B] shadow-[0_0_15px_#F4C96B]" />
        </motion.div>
      ))}
    </div>
  );
}
