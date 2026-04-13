"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  TestTubes,
  Globe,
  Gauge,
  GitBranch,
  ShieldCheck,
  Wrench,
} from "lucide-react";

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    icon: TestTubes,
    title: "Automation",
    color: "text-primary",
    skills: ["Selenium WebDriver", "Playwright", "Appium", "UFT", "Cucumber BDD", "POM Design"],
  },
  {
    icon: Code2,
    title: "Languages",
    color: "text-accent",
    skills: ["Java (Primary)", "C#", "TypeScript", "Python", "SQL"],
  },
  {
    icon: Globe,
    title: "API & Backend",
    color: "text-primary",
    skills: ["REST Assured", "Postman", "SOAP UI", "Oracle SQL", "MS SQL", "PostgreSQL"],
  },
  {
    icon: Gauge,
    title: "Performance",
    color: "text-accent",
    skills: ["Apache JMeter", "k6", "Load Testing", "Stress Testing", "SLA Validation"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps",
    color: "text-primary",
    skills: ["Azure DevOps", "Jenkins", "GitHub Actions", "Docker", "Bitbucket Pipelines"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    color: "text-accent",
    skills: ["Snyk", "Wazuh", "PCI-DSS Awareness", "PII Handling", "Vulnerability Scanning"],
  },
  {
    icon: Wrench,
    title: "Tools & Mgmt",
    color: "text-primary",
    skills: ["Jira", "Xray", "TestRail", "Confluence", "SharePoint", "Git"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
            Skills & Tech Stack
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Tools of the Trade
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className={cat.color} size={22} />
                <h4 className="font-bold">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
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
