"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Heart, Leaf } from "lucide-react";

const activities = [
  {
    icon: Mic,
    title: "Speaker — \"Understanding Quality Assurance\"",
    description:
      "Delivered a webinar on QA fundamentals, automation strategies, and career paths in quality engineering for the Skillshare community.",
    date: "Sep 2024",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Manulife 'Bersih Desa' Volunteer",
    description:
      "Community development for rural sanitation facilities and promoted sanitation habits in Bogor alongside Yayasan Manulife Peduli.",
    date: "2025",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Heart,
    title: "Manulife Global Volunteer Days",
    description:
      "Participated in a Financial Literacy education event in Bekasi, teaching personal finance fundamentals to the local community.",
    date: "2024",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Leaf,
    title: "Zero Waste Lifestyle Trainer",
    description:
      "Served as a certified trainer at YPBB Bandung, educating communities on sustainable waste management and eco-friendly living practices.",
    date: "2020 – 2022",
    color: "bg-green-500/10 text-green-400",
  },
];

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-24">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
            Speaking & Community
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Giving Back
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-12 h-12 rounded-xl ${activity.color} flex items-center justify-center`}>
                  <activity.icon size={22} />
                </div>
                <div>
                  <h4 className="font-bold">{activity.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
