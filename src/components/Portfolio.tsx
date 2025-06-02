'use client';

import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Portfolio() {
	return (
		<div className="min-h-screen text-white bg-black dark:text-black dark:bg-white -mt-16 pt-16">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
