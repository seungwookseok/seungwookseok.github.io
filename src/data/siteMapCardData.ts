import {
  BeakerIcon,
  UserGroupIcon,
  DocumentTextIcon,
  NewspaperIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { IconCardProps } from '../components/IconCard';

export const bgColors = [
  'bg-cardBg1',
  'bg-cardBg2',
  'bg-cardBg3',
  'bg-cardBg4',
  'bg-cardBg5',
];

export const highlightColors = [
  'text-highlight1',
  'text-highlight2',
  'text-highlight3',
  'text-highlight4',
  'text-highlight5',
];

export const siteMapCardData: Omit<IconCardProps, 'bgColor' | 'highlightColor'>[] = [
  {
    title: 'Research',
    description: 'Explore the cutting-edge research conducted in our lab.',
    icon: BeakerIcon,
    link: '/research',
  },
  {
    title: 'Principal Investigator',
    description: 'Meet the principal investigator leading our research efforts.',
    icon: AcademicCapIcon,
    link: '/investigator',
  },
  {
    title: 'Members',
    description: "Get to know the team members contributing to our lab's success.",
    icon: UserGroupIcon,
    link: '/members',
  },
  {
    title: 'Publications',
    description: 'Read the publications and papers authored by our team.',
    icon: DocumentTextIcon,
    link: '/publications',
  },
  {
    title: 'News',
    description: 'Stay updated with the latest news and announcements from our lab.',
    icon: NewspaperIcon,
    link: '/news',
  },
];
