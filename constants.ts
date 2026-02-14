
import { Event, Domain } from './types';

export const CS_EVENTS: Event[] = [
  {
    id: 'hackathon',
    title: 'Software Hackathon',
    description: 'Build innovative solutions for real-world problems in this 24-hour coding marathon.',
    prizePool: '₹25,000',
    icon: 'terminal'
  },
  {
    id: 'leetcode',
    title: 'LeetCode Duel',
    description: 'A high-speed competitive programming contest focusing on Data Structures and Algorithms.',
    prizePool: '₹10,000',
    icon: 'code'
  },
  {
    id: 'ideathon-cs',
    title: 'Ideathon',
    description: 'Pitch your groundbreaking startup ideas to a panel of industry experts and venture capitalists.',
    prizePool: '₹15,000',
    icon: 'lightbulb'
  },
  {
    id: 'expo-cs',
    title: 'Project Expo',
    description: 'Showcase your final year projects or personal builds to a wider audience and technical jury.',
    prizePool: '₹20,000',
    icon: 'rocket_launch'
  },
  {
    id: 'debug',
    title: 'Debug The Web',
    description: 'Find and fix security vulnerabilities and logical errors in a given web application.',
    prizePool: '₹8,000',
    icon: 'bug_report'
  },
  {
    id: 'paper-cs',
    title: 'Paper Presentation',
    description: 'Present your research papers on emerging technologies like AI, Blockchain, and Quantum Computing.',
    prizePool: '₹12,000',
    icon: 'description'
  }
];

export const NON_CS_EVENTS: Event[] = [
  {
    id: 'hardware',
    title: 'Hardware Hackathon',
    description: 'Build innovative hardware solutions for real-world problems. Circuits, sensors, and pure engineering skill.',
    prizePool: '₹25,000',
    icon: 'memory',
    category: 'Technical'
  },
  {
    id: 'startup',
    title: 'Startup Mela',
    description: 'Pitch your revolutionary ideas to industry experts and win funding opportunities for your startup.',
    prizePool: '₹50,000',
    icon: 'lightbulb',
    category: 'Entrepreneurship'
  },
  {
    id: 'paper-noncs',
    title: 'Paper Presentation',
    description: 'Showcase your research and technical depth in emerging non-CS technologies like EV, Robotics, and Green Energy.',
    prizePool: '₹15,000',
    icon: 'description',
    category: 'Research'
  },
  {
    id: 'expo-noncs',
    title: 'Project Expo',
    description: 'A grand stage to demonstrate your prototypes and working models to a massive audience and jury.',
    prizePool: '₹30,000',
    icon: 'architecture',
    category: 'Innovation'
  },
  {
    id: 'ideathon-noncs',
    title: 'Ideathon',
    description: 'The ultimate brainstorm session. Solve complex societal issues through design thinking and logic.',
    prizePool: '₹20,000',
    icon: 'psychology',
    category: 'Creative'
  },
  {
    id: 'cultural',
    title: 'Cultural Night',
    description: 'Unleash your talent! From dance battles and music shows to drama and fashion walks.',
    prizePool: '₹40,000',
    icon: 'festival',
    category: 'Entertainment'
  }
];
