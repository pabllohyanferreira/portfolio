import React from 'react';
import './ProjectsSection.css';

interface Project {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  technologies: string[];
  category: string;
}

const ProjectsSection: React.FC = () => {
  const openYouTubeFullscreen = (youtubeId: string) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
    window.open(youtubeUrl, '_blank');
  };

  const projects: Project[] = [
    {
      id: 'torres-coffee',
      title: 'Torres Coffee',
      description: 'Sistema completo de cardápio digital para cafeteria com interface administrativa. Desenvolvido com HTML, CSS e JavaScript puro, oferece gerenciamento de produtos, categorias e upload de imagens.',
      youtubeId: 'vgq-nbfPKeU',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      category: 'Web Development'
    },
    {
      id: 'gueiros',
      title: 'DEPARA Gueiros',
      description: 'Sistema profissional de sincronização automática de arquivos entre empresa e contador, rodando como Serviço do Windows (inicia automaticamente com o sistema).',
      youtubeId: 'hpAHvcLaji0',
      technologies: ['Windows Service', 'File Synchronization', 'C#', 'System Integration'],
      category: 'System Development'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">
            Projetos que <span className="highlight">impressionam</span>
          </h2>
          <p className="section-subtitle">
            Desenvolvimentos estratégicos e focados em conversão para empresas em crescimento.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-media">
                <iframe 
                  className="project-video"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&loop=1&playlist=${project.youtubeId}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button 
                  className="fullscreen-btn"
                  onClick={() => openYouTubeFullscreen(project.youtubeId)}
                  title="Assistir no YouTube"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Pronto para transformar suas ideias em realidade?</h3>
          <p>Trabalhamos de perto com você para garantir que seus objetivos sejam alcançados, através de estratégia clara e design pensativo.</p>
          <a href="https://wa.me/5581996201464" target="_blank" rel="noopener noreferrer" className="cta-button">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
