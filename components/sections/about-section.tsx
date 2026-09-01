"use client"
import { motion } from "framer-motion"
import InteractiveTimeline from "@/components/interactive-timeline"
import LiveGitHubWidget from "@/components/widgets/live-github-widget"
import CurrentlyLearningWidget from "@/components/widgets/currently-learning-widget"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a senior full-stack engineer with 12 years of experience specializing in Next.js, Node.js, Django, and Rust, I step in to clean up technical debt, integrate your third-party systems, and improve overall application performance without slowing down development.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <InteractiveTimeline />
        </motion.div>

        {/* Dynamic Widgets */}
        <div className="grid md:grid-cols-1 gap-8">
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <LiveGitHubWidget />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <CurrentlyLearningWidget />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <img src={`${basePath}/contrib-heatmap.svg`} alt="GitHub Contribution Heatmap" className="w-full h-auto rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
