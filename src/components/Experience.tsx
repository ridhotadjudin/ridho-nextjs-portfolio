"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  achievements?: string[];
  isCurrent?: boolean;
}

const jobs: Job[] = [
  {
    company: "Manulife Indonesia",
    role: "Quality Engineer (SDET)",
    period: "Feb 2024 – Present",
    location: "Jakarta, Indonesia",
    isCurrent: true,
    description: [
      "Own full testing lifecycle (SIT, UAT, REH, PAT) for CRM, CWS/Manulife ID, Bancassurance, and Payment systems.",
      "Architect Java-based automation frameworks covering Mobile (Appium), Web UI (Playwright), API (REST Assured), and Oracle DB validation.",
      "Develop and execute performance testing using JMeter across internal and external payment APIs (Rintis, DOKU, Xendit).",
      "Primary QA focal point for cross-border squads across Indonesia, Philippines, and Vietnam.",
    ],
    achievements: [
      "Regression cycle reduced from 1.5 days → 1 hour (−85%)",
      "100% transaction success rates for Paylink across all gateways",
      "Zero escaped defects for two consecutive quarters",
      "API latency improved from ~350ms → ~100ms on payment endpoints",
      "75% automation coverage of critical paths integrated in CI/CD",
    ],
  },
  {
    company: "NexSOFT",
    role: "Lead QA Engineer",
    period: "Jun 2023 – Feb 2024",
    location: "Tangerang, Indonesia",
    description: [
      "Directed QA team of 7 engineers across three enterprise systems (NexCHIEF, NexCORE, NexSAM).",
      "Built reusable OOP-based automation libraries; standardized page-object patterns.",
      "Championed CI/CD integration via Bitbucket Pipelines with quality gates and reporting.",
      "Managed CR test cycles, production incident triage, and release readiness reviews.",
    ],
    achievements: [
      "Regression lead time reduced by ~60%",
      "New script effort reduced by ~30% via reusable components",
      "Data migration variance <0.1% across millions of records",
      "~70% automation coverage on critical paths",
    ],
  },
  {
    company: "NexSOFT",
    role: "Quality Assurance Engineer",
    period: "May 2022 – Jun 2023",
    location: "Tangerang, Indonesia",
    description: [
      "Designed and executed manual & automated tests across UI, API, and DB layers.",
      "Developed automation scripts using Selenium, Appium, and Katalon Studio.",
      "Maintained documentation (test plans, scenarios, daily reviews) in Jira/Confluence.",
      "Contributed to Agile ceremonies and stabilized data migration testing.",
    ],
  },
  {
    company: "Meta – Facebook Lite",
    role: "QA Tester (Freelance)",
    period: "Jul 2021 – Jun 2022",
    location: "Remote",
    description: [
      "Executed functional and localization testing for Facebook Lite on Android.",
      "Focused on low-bandwidth performance (2G/3G), regional behaviors, and usability in Indonesia.",
      "Validated payments accessibility and localization; proofread EN–ID translations.",
    ],
  },
  {
    company: "Telkom Indonesia",
    role: "Network Support Intern",
    period: "Jul 2019 – Sep 2019",
    location: "Bandung, Indonesia",
    description: [
      "Monitored real-time network traffic; diagnosed connectivity issues to maintain uptime.",
      "Used Linux, Wireshark, and Cisco tools to analyze packet flows.",
    ],
  },
  {
    company: "PT. Sahaware Indonesia",
    role: "Backend Intern",
    period: "Jul 2018 – Sep 2018",
    location: "Bandung, Indonesia",
    description: [
      "Developed ASP.NET back-end APIs for multi-platform information systems.",
      "Managed database hosting and ensured high-performance data integration.",
    ],
  },
];

function TimelineItem({ job, index }: { job: Job; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(job.isCurrent || false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[15px] top-2 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 w-[31px] h-[31px] rounded-full border-4 ${
          job.isCurrent
            ? "bg-primary border-primary/30"
            : "bg-card border-border"
        } z-10`}
      >
        <Briefcase
          size={13}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            job.isCurrent ? "text-primary-foreground" : "text-muted-foreground"
          }`}
        />
      </div>

      {/* Content card */}
      <div
        className="glass-card rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h4 className="text-lg font-bold">{job.company}</h4>
              {job.isCurrent && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Current
                </span>
              )}
            </div>
            <p className="text-primary font-semibold mt-1">{job.role}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {job.period} · {job.location}
            </p>
          </div>
          <button className="text-muted-foreground mt-1 shrink-0">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <ul className="space-y-2">
              {job.description.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>

            {job.achievements && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Key Impact
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {job.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="text-sm bg-primary/5 rounded-lg px-3 py-2 text-muted-foreground"
                    >
                      ✦ {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Where I&apos;ve Made an Impact
          </h3>
        </motion.div>

        <div>
          {jobs.map((job, i) => (
            <TimelineItem key={`${job.company}-${job.role}`} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
