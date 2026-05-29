export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  /** Tailwind gradient classes used as a placeholder cover. Replace with a real screenshot later. */
  gradient: string;
}

// TODO: ganti dengan proyek nyata (judul, deskripsi, link, screenshot).
export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description:
      'Situs portfolio single-page yang dibangun dengan Astro dan Tailwind CSS, dioptimasi untuk performa dan SEO.',
    tags: ['Astro', 'Tailwind', 'TypeScript'],
    repoUrl: 'https://github.com/ericorahmad1/FinalProject',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Project Two',
    description:
      'Deskripsi singkat proyek kedua. Jelaskan masalah yang dipecahkan dan teknologi yang dipakai.',
    tags: ['JavaScript', 'API'],
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'Project Three',
    description:
      'Deskripsi singkat proyek ketiga. Tambahkan tautan demo langsung dan repository.',
    tags: ['HTML', 'CSS'],
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export interface SocialLink {
  label: string;
  url: string;
}

// TODO: lengkapi/koreksi tautan sosial.
export const socials: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/ericorahmad1' },
  { label: 'Instagram', url: 'https://instagram.com/ericorahmad' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
];
