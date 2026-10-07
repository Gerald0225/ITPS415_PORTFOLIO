import './App.css'
import { profile } from './data/profile'
import { user } from './data/user'
import { analytics } from './data/analytics'
import { projects } from './data/projects'
import { projectMedia } from './data/projectMedia'
import { skills, technologies } from './data/skills'
import { certifications } from './data/certifications'
import { education } from './data/education'
import { experience } from './data/experience'
import { socialLinks } from './data/socialLinks'
import { testimonials } from './data/testimonials'
import { messages } from './data/messages'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import FeaturedWork from './components/FeaturedWork'
import Capabilities from './components/Capabilities'
import Technologies from './components/Technologies'
import CertificationsEducation from './components/CertificationsEducation'
import DevelopmentProcess from './components/DevelopmentProcess'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const featuredProjects = projects.map((project) => ({
    ...project,
    media: projectMedia.find((media) => media.projectId === project.id),
  }))

  return (
    <main className="site-shell">
      <Navbar initials={user.initials} />
      <Hero profile={profile} user={user} />
      <StatsSection stats={analytics.stats} />
      <FeaturedWork projects={featuredProjects} />
      <section className="section-grid" id="capabilities" aria-label="Capabilities and tools">
        <Capabilities skills={skills} />
        <aside className="side-stack">
          <Technologies technologies={technologies} />
          <CertificationsEducation
            certifications={certifications}
            education={education}
          />
        </aside>
      </section>
      <DevelopmentProcess steps={profile.process} />
      <Experience profile={profile} experience={experience} />
      <Testimonials testimonials={testimonials} />
      <ContactSection
        profile={profile}
        socialLinks={socialLinks}
        previewMessage={messages[0]}
      />
      <Footer user={user} socialLinks={socialLinks} />
    </main>
  )
}

export default App
