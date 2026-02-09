import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Award,
  BookOpen   // 👈 add this
} from "lucide-react";
import AnimatedBg from "./AnimatedBg";

/* ---------------- ANIMATION ---------------- */

const boxVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/* ---------------- GLASS SECTION ---------------- */

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="min-h-screen snap-start flex flex-col items-center justify-center px-6 md:px-20 max-w-7xl mx-auto"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-center">
      {title}
    </h2>

    {/* CENTERED GLASS CARD */}
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl max-h-[65vh] overflow-y-auto pr-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 space-y-6">
        {children}
      </div>
    </div>
  </section>
);




/* ---------------- MAIN ---------------- */

export default function PhDProfile() {
  return (
    <div className="text-white font-sans h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <AnimatedBg />

      {/* HERO (NO GLASS) */}
      <section className="h-screen snap-start flex flex-col justify-center items-center text-center px-6">
        <motion.img
          src="/profile.png"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 border-4 border-purple-500/40 object-cover"
        />

        <h1 className="text-4xl md:text-7xl font-extrabold">
          Devashish Chaudhary
        </h1>

        <p className="mt-6 text-gray-300 max-w-3xl">
          PhD Researcher · Graph Learning · Federated Systems · Quantum Intelligence
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-10 mt-12">
          {[
            { n: "2", l: "Publications" },
            { n: "4", l: "Citations" },
            { n: "2", l: "H-Index" }
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={boxVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold">
                {s.n}
              </div>
              <div className="text-gray-400 mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* SOCIALS */}
        <div className="flex gap-8 mt-10 text-gray-300 justify-center items-center">
          <a href="https://github.com/devashish-web" className="hover:text-white"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/devdhr/" className="hover:text-white"><Linkedin size={24} /></a>
          <a href="mailto:s224281473@deakin.edu.au" className="hover:text-white"><Mail size={24} /></a>
{/* Google Scholar */}
  <a
    href="https://scholar.google.com/citations?user=XcS7ERcAAAAJ&hl=en&oi=ao"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
    title="Google Scholar"
  >
    <BookOpen size={24} />
  </a>
          
          <a href="/cv.pdf" className="hover:text-white flex items-center gap-2">
            <Download size={20}/>CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <motion.p
          variants={boxVariant}
          initial="hidden"
          whileInView="visible"
          className="text-gray-300 text-lg text-justify"
        >
          I am currently a PhD student specializing in Graph Neural Networks, Quantum Machine Learning, and Quantum Federated Learning, with a particular focus on applications in anomaly detection and cybersecurity. My research explores the intersection of advanced machine learning and emerging quantum technologies, aiming to develop intelligent, secure, and scalable solutions for future computing systems.

 

I am an active member of the Deakin Quantum Machine Learning research group, where I have contributed to several quantum research projects spanning quantum algorithms, quantum-enhanced learning models, and hybrid classical-quantum systems. My work also involves extensive training and experimentation in quantum programming, allowing me to engage deeply with state-of-the-art quantum frameworks and platforms.

 

Driven by curiosity and a passion for innovation, I am continually exploring new ways quantum technologies can transform the landscape of machine learning and security.
        </motion.p>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {[
            "Organizing Committee — ATIS 2025 Conference",
            "Casual Research Assistant — LLMs for Intrusion Detection",
            "Casual Teaching Assistant — SIT743 Bayesian Learning and Graphical Models",
	    "Visiting Research Student — Deakin University, Australia",
            "Security Research Analyst — SecurityPal Nepal",
            "Visiting Research Student — RIT CyberVSR USA",
	    "Reviewer — IEEE Transactions on Vehicular Technology (Q1 Journal)"
		
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={boxVariant}
              initial="hidden"
              whileInView="visible"
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PUBLICATIONS */}
      <Section id="publications" title="Publications">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Modeling Quantum Federated Autoencoder for Anomaly Detection",
              venue: "ICOIN 2026",
              link: "#"
            },
            {
              title: "In-network Attack Detection with Federated Deep Learning",
              venue: "ICEI 2025",
              link: "#"
            },
            {
              title: "Towards Adapting Federated & Quantum Machine Learning for Network Intrusion Detection: A Survey",
              venue: "arXiv",
              link: "https://arxiv.org/abs/2509.21389"
            }
          ].map((p, i) => (
            <motion.div
              key={i}
              variants={boxVariant}
              initial="hidden"
              whileInView="visible"
              className="p-6 rounded-xl bg-white/5 border border-purple-500/30 flex justify-between"
            >
              <div>
                <div className="text-purple-400 text-sm mb-2">{p.venue}</div>
                <p className="font-semibold">{p.title}</p>
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-400">
                <ExternalLink />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* AWARDS */}
      <Section id="awards" title="Awards & Scholarships">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Deakin University Postgraduate Research Scholarship",
            "COMPEX Scholarship — Government of India",
            "Study in India Scholarship",
            "School Topper — 95% Grade 12"
          ].map((a, i) => (
            <motion.div
              key={i}
              variants={boxVariant}
              initial="hidden"
              whileInView="visible"
              className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <Award className="text-purple-400"/>
              {a}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="text-center">
          <a
            href="mailto:s224281473@deakin.edu.au"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl"
          >
            Get In Touch
          </a>
        </div>
      </Section>
    </div>
  );
}
