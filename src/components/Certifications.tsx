"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  category: "security" | "automation" | "cloud" | "general";
}

const certifications: Certification[] = [
  { name: "Build Your SOC with Open Source SIEM", issuer: "Wazuh / Siberku", year: "2025", category: "security" },
  { name: "GitOps on Kubernetes", issuer: "DevOps Focus Group", year: "2025", category: "cloud" },
  { name: "BigQuery Data Insight Badge", issuer: "Google", year: "2025", category: "cloud" },
  { name: "English Certificate C2", issuer: "EF SET", year: "2025", category: "general" },
  { name: "Java QA Automation", issuer: "Manulife & Taldio", year: "2024", category: "automation" },
  { name: "Cybersecurity Professional Certificate", issuer: "Google / Coursera", year: "2024", category: "security" },
  { name: "Software Engineer Certificate", issuer: "HackerRank", year: "2024", category: "general" },
  { name: "Java Certificate", issuer: "HackerRank", year: "2024", category: "automation" },
  { name: "SQL (Intermediate)", issuer: "HackerRank", year: "2024", category: "general" },
  { name: "Agile Project Management", issuer: "Google / Coursera", year: "2023", category: "general" },
  { name: "Quality Assurance Automation", issuer: "SanberCode", year: "2023", category: "automation" },
  { name: "Java Foundation & Programming", issuer: "Oracle Academy", year: "2022", category: "automation" },
  { name: "Software Quality Assurance Engineer", issuer: "JuaraCoding", year: "2022", category: "automation" },
];

const categoryColors: Record<string, string> = {
  security: "bg-red-500/10 text-red-400",
  automation: "bg-primary/10 text-primary",
  cloud: "bg-accent/10 text-accent",
  general: "bg-muted text-muted-foreground",
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
            Certifications & Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Always Learning
          </h3>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <GraduationCap className="text-accent" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold">Institut Teknologi Nasional (ITENAS) Bandung</h4>
              <p className="text-primary font-semibold">S.Kom. — Computer Science & Engineering</p>
              <p className="text-sm text-muted-foreground mt-1">
                Aug 2015 – Feb 2021 · GPA 3.47 · Accreditation: A
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
              className="glass-card rounded-xl p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Award className="text-primary shrink-0 mt-0.5" size={18} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-tight">{cert.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[cert.category]}`}>
                      {cert.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
