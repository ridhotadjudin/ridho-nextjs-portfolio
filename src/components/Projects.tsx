"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Database, Smartphone, Cog, Monitor } from "lucide-react";

interface Project {
  icon: React.ElementType;
  title: string;
  company: string;
  problem: string;
  approach: string;
  impact: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    icon: CreditCard,
    title: "Paylink Payment Platform",
    company: "Manulife Indonesia",
    problem:
      "Multi-gateway payment system (Rintis, DOKU, Xendit, Danamon, DBS) needed rigorous validation across first & renewal payment flows with zero tolerance for failures.",
    approach:
      "Engineered idempotent flow validation and retry policies using RestAssured API tests. Built automated tests for 52+ CRM PDK API endpoints including multi-endpoint flows, chained callbacks, and async notification handlers.",
    impact: [
      "100% transaction success rate",
      "API latency: 350ms → 100ms",
      "P95/P99 latency SLA adherence validated",
      "Zero payment failures in production",
    ],
    tags: ["REST Assured", "JMeter", "Java", "API Testing"],
  },
  {
    icon: Database,
    title: "CRM Cloud Migration",
    company: "Manulife Indonesia",
    problem:
      "Microsoft Dynamics 365 migration from On-Premise to Cloud required environment parity, data integrity, and workflow equivalence across 3 countries.",
    approach:
      "Led migration testing with environment parity checks, data integrity reconciliation, workflow equivalence testing, and performance baselining across ID/PH/VN hubs.",
    impact: [
      "<0.05% data variance across regions",
      "Zero data loss during migration",
      "Full workflow equivalence verified",
      "UAT defect density reduced ~45%",
    ],
    tags: ["Dynamics 365", "Oracle SQL", "Data Validation", "Cross-Country"],
  },
  {
    icon: Smartphone,
    title: "Manulife ID Mobile App",
    company: "Manulife Indonesia",
    problem:
      "CWS/Manulife ID app (Android/iOS) needed comprehensive regression coverage for login, eWelcome flow, notifications, policy validation, and cross-system routing.",
    approach:
      "Built a 23-scenario Mobile Regression Suite using Appium & Java covering critical user journeys and cross-system data propagation through SSIS pipelines.",
    impact: [
      "23 automated regression scenarios",
      "Android & iOS coverage",
      "Cross-system E2E validation",
      "Stable release cadence achieved",
    ],
    tags: ["Appium", "Java", "Mobile Testing", "E2E"],
  },
  {
    icon: Cog,
    title: "NexCHIEF Automation",
    company: "NexSOFT",
    problem:
      "Enterprise system with 600+ legacy production issues needed scalable automation to stabilize regression and reduce manual testing overhead.",
    approach:
      "Initiated and led enterprise-scale QA automation project. Built reusable OOP-based framework with global components using Java and standardized page-object patterns.",
    impact: [
      "40% test coverage increase",
      "60% regression lead time reduction",
      "30% less effort for new scripts",
      "<0.1% data migration variance",
    ],
    tags: ["Selenium", "Java OOP", "Katalon", "Bitbucket Pipelines"],
  },
  {
    icon: Monitor,
    title: "CRM UI Automation Suite",
    company: "Manulife Indonesia",
    problem:
      "Complex CRM workflows including Global Search, Customer/NonCustomer Case Creation, KYC, email queues, and FCR reports needed reliable automated validation.",
    approach:
      "Designed a 30-flow CRM UI automation suite using Playwright & Java covering all critical business flows with quality gates in Azure DevOps CI/CD.",
    impact: [
      "30 automated CRM flows",
      "Integrated into CI/CD pipeline",
      "Regression: 1.5 days → 1 hour",
      "Flaky tests reduced by ~50%",
    ],
    tags: ["Playwright", "Java", "Azure DevOps", "CI/CD"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
            Key Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Impact Through Quality
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <project.icon className="text-primary" size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <p className="text-sm text-primary font-medium">{project.company}</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Approach
                  </p>
                  <p className="text-sm text-muted-foreground">{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Impact
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.impact.map((item) => (
                      <div
                        key={item}
                        className="text-sm bg-primary/5 rounded-lg px-3 py-2 font-medium"
                      >
                        ✦ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
