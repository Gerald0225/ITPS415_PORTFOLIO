export const skills = [
  {
    title: 'UI/UX Design',
    description: 'Creating clear, user-friendly interfaces and meaningful user experiences.',
    icon: 'pen',
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces using modern web technologies.',
    icon: 'screen',
  },
  {
    title: 'Backend Development',
    description: 'Designing application logic, APIs, and reliable system functionality.',
    icon: 'server',
  },
  {
    title: 'Database Design',
    description: 'Organizing data structures and relationships for efficient applications.',
    icon: 'layers',
  },
  {
    title: 'System Architecture',
    description: 'Structuring applications into maintainable and reusable components.',
    icon: 'cube',
  },
  {
    title: 'Prototyping',
    description: 'Turning ideas into interactive designs and functional prototypes.',
    icon: 'cursor',
  },
]

export const technologies = [
  'React',
  'JavaScript',
  'Python',
  'Django',
  'PostgreSQL',
  'MySQL',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Figma',
  'Docker',
  'Power BI',
].map((name) => ({ name, mark: name.slice(0, 2).toUpperCase() }))
