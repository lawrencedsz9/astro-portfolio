export const profile = {
  name: 'Lawrence Robert Dsouza',
  displayName: 'Lawrence Dsouza',
  role: 'Software Engineer | Backend & AI Applications',
  location: 'Doha, Qatar',
  email: 'lowrencedsz9@gmail.com',
  website: 'lawrencedsouza.netlify.app',
  github: 'https://github.com/lawrencedsz9',
  linkedin: 'https://www.linkedin.com/in/lawrence-dsouza-a15886337',
  twitter: 'https://x.com/Lawrenc83357878?t=efLHHGdqgQQC3HCOthz63g&s=09',
  status: 'Open to backend, AI, automation, and computer vision work',
  summary:
    'Software engineer focused on backend systems, AI applications, and real-time software. I like turning practical ideas into reliable products across APIs, computer vision, automation, and realtime user experiences.',
  metaDescription:
    'Portfolio of Lawrence Robert Dsouza, a software engineer building backend systems, AI applications, real-time software, and computer vision projects.',
  hero: {
    heading: 'I turn ambitious AI prototypes into software people can actually use.',
    text:
      'I am Lawrence, a software engineer in Doha working across backend architecture, voice AI, realtime applications, and computer vision.',
    tags: ['FastAPI backends', 'Agentic AI', 'Computer Vision'],
  },
};

export const projects = [
  {
    name: 'Smart Workspace Optimization System',
    category: 'Backend + Digital Twin',
    period: 'Oct 2025 - Jan 2026',
    description:
      'A workspace operations platform that brings bookings, occupancy, access management, and realtime facility analytics into one system.',
    highlight:
      'Built with Next.js, FastAPI, MongoDB, WebSockets, HVAC optimization, and RAG-based natural language querying.',
    link: 'https://github.com/lawrencedsz9/WMS',
    stack: ['Next.js', 'FastAPI', 'MongoDB', 'WebSockets', 'RAG'],
  },
  {
    name: 'Nevira - Agentic Voice AI Assistant',
    category: 'Agentic Voice AI',
    period: 'Aug 2025 - Nov 2025',
    description:
      'A low-latency voice assistant that listens, reasons, calls tools, and responds naturally in realtime.',
    highlight:
      'Includes wake-word detection, async tool execution, and function calling for search, weather, and email automation.',
    link: 'https://github.com/lawrencedsz9/livekit-ai-agent',
    stack: ['FastAPI', 'LiveKit', 'WebRTC', 'Gemini', 'Python'],
  },
  {
    name: 'Camera Analysis',
    category: 'Computer Vision',
    period: 'Personal Project',
    description:
      'A realtime camera-monitoring system that detects motion and faces, captures important events, and records searchable visitor activity.',
    highlight:
      'Uses timestamps and SQLite-backed visitor data to keep captured events organized and searchable.',
    link: 'https://github.com/lawrencedsz9/camAnalysis',
    stack: ['Python', 'OpenCV', 'SQLite'],
  },
  {
    name: 'Facial Recognition Image Retrieval',
    category: 'Computer Vision Search',
    period: 'Backend + AI',
    description:
      'An image-retrieval pipeline that detects faces, converts them into numerical embeddings, and ranks matching photos with cosine similarity.',
    highlight:
      'The workflow separates detection, embedding generation, indexing, caching, and retrieval so large photo collections can be searched without recomputing every face.',
    link: 'https://github.com/lawrencedsz9',
    stack: ['Python', 'Dlib', 'OpenCV', 'Cosine Similarity'],
  },
  {
    name: 'Members App for a Club',
    category: 'Mobile App',
    period: 'Personal Project',
    description:
      'A mobile club-management app for member accounts, events, authentication, and shared realtime information.',
    highlight:
      'Built Firebase-backed workflows for event tracking and member management.',
    link: 'https://github.com/lawrencedsz9/members-app',
    stack: ['Flutter', 'Firebase'],
  },
  {
    name: 'Student Budget Tracker',
    category: 'Finance Tool',
    period: 'Personal Project',
    description:
      'A student-focused budgeting tool for recording expenses, understanding spending patterns, and keeping day-to-day finances visible.',
    highlight:
      'Built as a lightweight finance workflow with React, Firebase, and a responsive Tailwind UI.',
    link: 'https://github.com/lawrencedsz9/stud-budget',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
  },
];
