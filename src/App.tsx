import React from 'react';
import resumeData from './resume.json';
import { Resume } from './types';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Extras from './components/Extras';
const resume = resumeData as unknown as Resume;
export default function App() {
  const { basics, about, education, experience, projects, techStack, extra } = resume;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <NavBar name={basics.name} label={basics.label} website={basics.website} />
      <section id="about"><h2 className="text-2xl font-bold mt-8 mb-4">About</h2><About text={about} /></section>
      <section id="education"><h2 className="text-2xl font-bold mt-8 mb-4">Education</h2><Education items={education} /></section>
      <section id="experience"><h2 className="text-2xl font-bold mt-8 mb-4">Experience</h2><Experience items={experience} /></section>
      <section id="projects"><h2 className="text-2xl font-bold mt-8 mb-4">Projects</h2><Projects items={projects} /></section>
      <section id="tech-stack"><h2 className="text-2xl font-bold mt-8 mb-4">Tech Stack</h2><TechStack items={techStack} /></section>
      <section id="extra"><h2 className="text-2xl font-bold mt-8 mb-4">Extra</h2><Extras items={extra} /></section>
    </div>
  );
}