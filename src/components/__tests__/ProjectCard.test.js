import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

const mockProject = {
  id: 1,
  title: 'Test Project',
  description: 'A test project description.',
  technologies: ['React', 'Node.js'],
  screenshots: ['/test-image.png'],
};

test('renders project title and description', () => {
  render(<ProjectCard project={mockProject} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
  expect(screen.getByText('A test project description.')).toBeInTheDocument();
});
