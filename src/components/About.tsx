"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Shield } from "lucide-react";

const stats = [
  { icon: Zap, value: "4+", label: "Years Experience", color: "text-primary" },
  { icon: Users, value: "7+", label: "Engineers Led", color: "text-accent" },
  { icon: Award, value: "85%", label: "Faster Regression", color: "text-primary" },
  { icon: Shield, value: "100%", label: "Payment Reliability", color: "text-accent" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Engineering Quality at Scale
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <motion.div
            className="md:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a dedicated <strong className="text-foreground">Full Stack Quality Engineer</strong> with
              comprehensive experience in both manual and automation testing across web, mobile,
              and desktop applications. My work spans enterprise financial systems, high-scale
              global platforms, and fast-paced startups.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At <strong className="text-foreground">Manulife Indonesia</strong>, I serve as the primary QA focal
              point for cross-border squads across Indonesia, Philippines, and Vietnam — architecting
              automation frameworks in Java with Selenium, Playwright, and Appium that reduced
              regression cycles by 85% and achieved 100% payment gateway reliability.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond testing, I&apos;m passionate about <strong className="text-foreground">cybersecurity</strong>,
              {" "}<strong className="text-foreground">DevOps practices</strong>, and giving back to the community
              through speaking engagements and volunteering. I believe quality is not just a process
              — it&apos;s a mindset that elevates entire teams.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="md:col-span-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
