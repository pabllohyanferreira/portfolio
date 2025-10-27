import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ParallaxElement from './ParallaxElement';
import InteractiveCard from './InteractiveCard';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'React', level: 95, color: '#61dafb' },
    { name: 'TypeScript', level: 90, color: '#3178c6' },
    { name: 'Node.js', level: 85, color: '#68a063' },
    { name: 'Python', level: 80, color: '#3776ab' },
    { name: 'Design', level: 88, color: '#ff6b6b' },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="section-title">
            Sobre <span className="highlight">Mim</span>
          </h2>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal direction="left" delay={0.4}>
            <div className="about-content">
              <InteractiveCard glowColor="#00ff88">
                <h3>Desenvolvedor Full-Stack</h3>
                <p>
                  Apaixonado por criar experiências digitais extraordinárias. 
                  Especializado em React, TypeScript e tecnologias modernas.
                </p>
              </InteractiveCard>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.6}>
            <div className="skills-content">
              <h3>Habilidades Técnicas</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <ScrollReveal 
                    key={skill.name} 
                    direction="up" 
                    delay={0.8 + index * 0.1}
                  >
                    <InteractiveCard 
                      hoverScale={1.02}
                      glowColor={skill.color}
                      className="skill-item"
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                        />
                      </div>
                    </InteractiveCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={1.2}>
          <div className="stats-grid">
            {[
              { number: '50+', label: 'Projetos Concluídos' },
              { number: '3+', label: 'Anos de Experiência' },
              { number: '100%', label: 'Satisfação do Cliente' },
              { number: '24/7', label: 'Disponibilidade' },
            ].map((stat, index) => (
              <ScrollReveal 
                key={stat.label} 
                direction="up" 
                delay={1.4 + index * 0.1}
              >
                <InteractiveCard className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
