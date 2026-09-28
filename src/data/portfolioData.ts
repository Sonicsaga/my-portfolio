export interface TechProject {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc?: string;
  tags: string[];
  status?: string;
  featured?: boolean;
  problem?: string;
  idea?: string;
  approach?: string;
  technology?: string[];
  result?: string;
  githubUrl?: string;
  liveDemoAvailable?: boolean;
  imageUrl?: string;
  imageAlt?: string;
}

export interface FilmProjectData {
  id: string;
  title: string;
  subtitle?: string;
  genre: string;
  status: 'ONGOING PROJECT' | 'UPCOMING PROJECT' | 'COMPLETED';
  production?: string;
  roles: string[];
  director?: string;
  producer?: string;
  cast?: string[];
  logline: string;
  visualDirection: string;
  synopsisPreview: string;
  colorPalette: string[];
  technicalSpecs: { label: string; value: string }[];
  productionNotes: {
    concept: string;
    cinematography: string;
    editing: string;
    sound: string;
    progress: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cinematic' | 'Editing' | 'Photography' | 'Reels' | 'Experiments';
  format: '3:4' | '16:9' | '4:3' | '1:1';
  description: string;
  focalLength?: string;
  mood: string;
  colorGrade: string;
  notes?: string;
  imageUrl?: string;
  imageAlt?: string;
  location?: string;
  cameraRig?: string;
}

export interface Discipline {
  number: string;
  id: string;
  title: string;
  label: string;
  coreMedium: string;
  manifesto: string;
  keyTools: string[];
  signatureNote: string;
}

export const PERSONAL_BRAND = {
  name: 'Adarsh Mohithe',
  tagline: 'Crafting stories through code & light.',
  philosophy: 'Jack of all trades. Still mastering them.',
  identity: 'AI/ML Student · Developer · Cinematographer · Video Editor · Filmmaker · Content Creator',
  education: {
    degree: 'B.Tech — Artificial Intelligence & Machine Learning',
    semester: '7th Semester',
    currentFocus: 'Computer Vision, Deep Learning, Front-End Systems & Cinema Direction',
  },
  creativeBrand: 'MontageSanchari',
  instagram: 'https://instagram.com/MontageSanchari',
  instagramHandle: '@MontageSanchari',
  github: 'https://github.com/Sonicsaga',
  githubHandle: 'Sonicsaga',
  linkedin: 'https://www.linkedin.com/in/adarsh-mohithe-551722247',
  linkedinHandle: 'Adarsh Mohithe',
  email: 'adarshmohithe26@gmail.com',
  currentStatusSummary:
    'Currently progressing my AI Insurance Claim Estimator, developing an emotional AI chatbot, and filming short film THE SHADOW.',
};

export const DISCIPLINES: Discipline[] = [
  {
    number: '01',
    id: 'ai',
    title: 'AI & MACHINE LEARNING',
    label: 'Artificial Intelligence',
    coreMedium: 'Neural Networks & Computer Vision',
    manifesto:
      'Using machine vision and deep representations to turn unstructured sensory data—pixels, frames, and text—into actionable real-world intelligence.',
    keyTools: ['PyTorch', 'OpenCV', 'FastAPI', 'CNN Architectures'],
    signatureNote: 'From image tensor to damage detection.',
  },
  {
    number: '02',
    id: 'development',
    title: 'DEVELOPMENT',
    label: 'Software & Frontend',
    coreMedium: 'React, TypeScript, Vite & Modern Web',
    manifesto:
      'Designing fast, resilient digital spaces with high aesthetic restraint, responsive viewport dynamics, and purposeful motion.',
    keyTools: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    signatureNote: 'Crafting interfaces that feel physical and immediate.',
  },
  {
    number: '03',
    id: 'cinematography',
    title: 'CINEMATOGRAPHY',
    label: 'Cinematography',
    coreMedium: 'Light, Optics & Composition',
    manifesto:
      'In college, I came in as a student. Somewhere along the way, people started knowing me as the cinematographer. Light dictates emotion before any dialogue begins.',
    keyTools: ['Camera Rigs', 'Gimbals', 'Prime Lenses', 'Directional Lighting'],
    signatureNote: 'Composing every frame like an oil painting in motion.',
  },
  {
    number: '04',
    id: 'editing',
    title: 'VIDEO EDITING',
    label: 'Post-Production',
    coreMedium: 'Pacing, Cuts & Rhythms',
    manifesto:
      'An edit is not a sequence of clips; it is the deliberate compression and expansion of human time. Where the breath falls, the cut happens.',
    keyTools: ['Premiere Pro', 'DaVinci Resolve', 'Sound Sync', 'Color Grading'],
    signatureNote: 'Finding the musical beat inside visual silence.',
  },
  {
    number: '05',
    id: 'filmmaking',
    title: 'FILMMAKING',
    label: 'Direction & Narrative',
    coreMedium: 'Story, Subtext & Human Tension',
    manifesto:
      'I don’t want to make films people simply watch. I want to make films they remember. Exploring psychological suspense, atmospheric dread, and nuanced human truth.',
    keyTools: ['Scriptwriting', 'Shot Lists', 'Directing', 'Sound Design'],
    signatureNote: 'Building psychological momentum from silence to revelation.',
  },
  {
    number: '06',
    id: 'content',
    title: 'CONTENT CREATION',
    label: 'MontageSanchari',
    coreMedium: 'Visual Experiments & Short-form Film',
    manifesto:
      'MontageSanchari is my visual laboratory—a nomadic journey of frames, street memories, motion edits, and unfiltered storytelling.',
    keyTools: ['Mobile Cinema', 'Reels Crafting', 'Micro-Documentaries', 'Visual Essays'],
    signatureNote: 'Stories distilled into seconds of visual weight.',
  },
  {
    number: '07',
    id: 'art',
    title: 'PORTRAIT ART',
    label: 'Hand-drawn Face Portraits',
    coreMedium: 'Pencil, Charcoal & Anatomic Shadow',
    manifesto:
      'Drawing faces teaches you where shadows actually pool on skin. It is the direct ancestor of how I light a cinematic close-up.',
    keyTools: ['Charcoal', 'Graphite', 'Anatomy Studies', 'High Contrast Chiaroscuro'],
    signatureNote: 'Studying the bone structure of expression.',
  },
  {
    number: '08',
    id: 'cricket',
    title: 'CRICKET',
    label: 'Athletics & Competition',
    coreMedium: 'Reaction Time, Focus & Team Strategy',
    manifesto:
      'Precision under pressure. 2nd Prize in the Intercollege Cricket Tournament taught me that instinct is just preparation made instantaneous.',
    keyTools: ['Batting', 'Match Tactics', 'High-Pressure Decision Making'],
    signatureNote: 'Focus through thirty overs of intense heat.',
  },
  {
    number: '09',
    id: 'guitar',
    title: 'GUITAR',
    label: 'Acoustic & Rhythm',
    coreMedium: 'Fretboard, Chords & Melodic Cadence',
    manifesto:
      'Learning the guitar teaches you how silence works between notes—a direct parallel to pauses in dialogue and pacing in film cuts.',
    keyTools: ['Acoustic Fingerstyle', 'Rhythm Chords', 'Auditory Pacing'],
    signatureNote: 'The cadence that informs film pacing.',
  },
];

export const TECH_PROJECTS: TechProject[] = [
  {
    id: 'claim-estimator',
    title: 'AI INSURANCE CLAIM ESTIMATOR',
    category: 'AI / COMPUTER VISION / FULL STACK',
    shortDesc:
      'An AI-powered system designed to analyze vehicle damage from uploaded images and estimate potential repair costs.',
    fullDesc:
      'Designed to replace tedious manual multi-day vehicular insurance assessments with computer vision. The system processes accident photos, segments damaged body panels (doors, bumper, headlights, hood), predicts severity tiers, and outputs an itemized cost projection.',
    tags: ['Computer Vision', 'PyTorch', 'OpenCV', 'React', 'Vite', 'FastAPI'],
    status: 'ACTIVE BUILD',
    featured: true,
    problem:
      'Traditional vehicle insurance claim inspections take days or weeks, require manual surveyor visits, and suffer from inconsistent, subjective damage estimates.',
    idea:
      'Automate the initial damage inspection using a convolutional neural network pipeline that detects panels, classifies scratch/dent/crumple severity, and generates an immediate repair estimate.',
    approach:
      'Trained convolutional models on vehicular collision datasets; implemented mask-guided panel localization; integrated standard parts and labor rate benchmarks to produce reliable cost ranges.',
    technology: ['Python', 'OpenCV', 'PyTorch', 'React 19', 'FastAPI', 'Tailwind CSS'],
    result:
      'Achieved rapid damage bounding, instant cost breakdown by panel, and an intuitive photo-upload inspection interface for drivers and claims officers.',
    githubUrl: 'https://github.com/Sonicsaga',
    liveDemoAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI Computer Vision Damage Detection & Vehicle Inspection HUD',
  },
  {
    id: 'ai-expense-tracker',
    title: 'AI EXPENSE TRACKER',
    category: 'FULL STACK / AI ASSISTED',
    shortDesc: 'A full-stack AI-assisted expense tracking application that categorizes spending habits and analyzes outflows.',
    tags: ['React', 'Vite', 'Node.js', 'Tailwind CSS', 'AI Classification'],
    status: 'COMPLETED',
    githubUrl: 'https://github.com/Sonicsaga',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'AI Financial Analytics & Expense Forecasting Dashboard',
  },
  {
    id: 'food-spoilage-detection',
    title: 'FOOD SPOILAGE DETECTION',
    category: 'COMPUTER VISION / ML',
    shortDesc: 'Food image capture → AI visual analysis → freshness and spoilage prediction pipeline to curb food waste.',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
    status: 'COMPLETED',
    githubUrl: 'https://github.com/Sonicsaga',
    imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Computer Vision Produce Freshness & Spoilage Classification',
  },
  {
    id: 'movie-recommendation',
    title: 'MOVIE RECOMMENDATION & WATCHLIST',
    category: 'WEB / ALGORITHMIC',
    shortDesc: 'Movie discovery, cinephile genre-based recommendations, and personal watchlist curation platform.',
    tags: ['React', 'Vite', 'TMDB API', 'Tailwind CSS'],
    status: 'COMPLETED',
    githubUrl: 'https://github.com/Sonicsaga',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Cinema Auditorium & Algorithmic Movie Recommendation Engine',
  },
  {
    id: 'weather-forecaster',
    title: 'WEATHER FORECASTER',
    category: 'WEB APPLICATION',
    shortDesc: 'Weather forecasting application with multi-day atmospheric models and responsive meteorological radar metrics.',
    tags: ['React', 'Vite', 'Weather API', 'Geolocation'],
    status: 'COMPLETED',
    githubUrl: 'https://github.com/Sonicsaga',
    imageUrl: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Atmospheric Cloud Radar & Meteorological Forecast Models',
  },
  {
    id: 'emotional-chatbot',
    title: 'AI EMOTIONAL CHATBOT',
    category: 'AI / NLP / INTERACTION',
    shortDesc: 'Conversational agent engineered with sentiment awareness and empathetic tone modulation.',
    tags: ['Python', 'NLP', 'Transformers', 'In Development'],
    status: 'IN DEVELOPMENT',
    githubUrl: 'https://github.com/Sonicsaga',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Neural NLP Sentiment Waveform & Empathetic Chat Agent',
  },
];

export const EXPERIENCE_ITEM = {
  company: 'Accenture',
  role: 'Assistant Frontend Developer',
  period: 'Professional Internship / Exposure',
  summary:
    'Contributed to modern frontend application interfaces, adhering to production web accessibility standards, component modularity, and client-side performance benchmarks.',
  takeaways: [
    'Component-driven architecture with reusable TypeScript UI patterns',
    'Cross-browser fidelity, responsive layouts, and performance profiling',
    'Working within enterprise codebases and agile delivery cycles',
  ],
};

export const FILM_THE_SHADOW: FilmProjectData = {
  id: 'the-shadow',
  title: 'THE SHADOW',
  subtitle: 'HUNTING FROM THE DARK',
  genre: 'Psychological Thriller',
  status: 'ONGOING PROJECT',
  production: 'PSYCHO CREATIONS',
  roles: ['Cinematographer', 'Editor', 'Filmmaker', 'Audio & Sound Artist'],
  director: 'Nikith Kumar M R',
  producer: 'Yashwanth Y S',
  cast: ['Bhanu Prakash G', 'Rohan', 'Yashwanth', 'Nikith', 'Nisarga', 'Adarsh'],
  logline:
    'When the unseen moves closer than your own pulse, darkness becomes both the hunter and the only mirror.',
  visualDirection:
    'Low-key chiaroscuro lighting, deep crimson window backlights, sharp silhouette framing, and claustrophobic anamorphic field depths.',
  synopsisPreview:
    'A taut psychological inquiry into paranoia and consequence. Filmed with calculated shadows, practical rim lights, and intense sonic pressure that keeps the viewer trapped inside the frame.',
  colorPalette: ['#050505', '#B40018', '#1A1A1A', '#5A000C', '#F4F1EA'],
  technicalSpecs: [
    { label: 'Aspect Ratio', value: '2.39:1 Anamorphic Scope' },
    { label: 'Frame Rate', value: '24.000 FPS Cinematic' },
    { label: 'Color Space', value: 'Rec.709 Noir Crimson Grade' },
    { label: 'Sound Mix', value: 'Atmospheric Binaural Soundscape' },
  ],
  productionNotes: {
    concept:
      'Crafted under Psycho Creations as an intense atmospheric character study. The narrative relies on negative space and what is hidden just beyond the frame line.',
    cinematography:
      'Shot primarily with deep crimson rim-lighting, silhouette blocking, and directional practicals. Camera moves are slow, deliberate, and predatory.',
    editing:
      'Cut with rhythmic breathing room. Long held takes build physical tension before quick, disorientation-inducing cuts fragment the spatial logic.',
    sound:
      'Sub-bass drones, heightened breathing frequencies, and metallic reverberations mixed to induce somatic tension.',
    progress:
      'Currently in active production and post-production refinement. Principal photography shots being sequenced and graded.',
  },
};

export const FILM_NIYATI: FilmProjectData = {
  id: 'niyati',
  title: 'NIYATI',
  subtitle: 'A PSYCHOLOGICAL THRILLER',
  genre: 'Psychological Thriller',
  status: 'UPCOMING PROJECT',
  production: 'PSYCHO CREATIONS',
  roles: ['Director', 'Cinematographer', 'Visual World'],
  director: 'Adarsh R Mohithe',
  producer: 'Yashwanth',
  cast: ['Rohan', 'Bhanu Prakash G', 'Yashwanth', 'Nikith', 'Nisarga'],
  logline:
    'Was it ever your choice? Some people are not who they seem.',
  visualDirection:
    'High contrast noir chiaroscuro, surveillance optics, and dual doors (Expose vs Understand).',
  synopsisPreview:
    'Written and directed by Adarsh R Mohithe under Psycho Creations. An exploration of surveillance, guilt, duality, and the psychological trap of choices.',
  colorPalette: ['#050505', '#1A1A1A', '#FF001E', '#E2E8F0'],
  technicalSpecs: [
    { label: 'Director', value: 'Adarsh R Mohithe' },
    { label: 'Assistant Director', value: 'Nikith' },
    { label: 'Producer', value: 'Yashwanth' },
    { label: 'Production', value: 'Psycho Creations' },
  ],
  productionNotes: {
    concept: 'Explores the irrevocable weight of surveillance and identity.',
    cinematography: 'Symmetrical cold corridor architecture split by a solitary beam of light.',
    editing: 'Paced around surveillance camera timing and tension holds.',
    sound: 'Sparse acoustic motifs interrupted by distorted foley and low drone frequencies.',
    progress: 'Script locked; pre-production visual worldbuilding active.',
  },
};

export const FILM_GENRES_INTEREST = [
  { name: 'Psychological', desc: 'Inner torment, paranoia, and fractured realities.' },
  { name: 'Thriller', desc: 'Relentless tempo, razor wire stakes, and breathless tension.' },
  { name: 'Horror', desc: 'Atmospheric dread, shadow lore, and that which remains unseen.' },
  { name: 'Comedy', desc: 'Rhythmic timing, subverted expectations, and character ironies.' },
  { name: 'Romance', desc: 'Intimate visual poetry, warmth, vulnerability, and lingering glances.' },
];

export const MONTAGESANCHARI_GALLERY: GalleryItem[] = [
  {
    id: 'ms-1',
    title: 'THE CRIMSON APERTURE',
    category: 'Cinematic',
    format: '3:4',
    description: 'Backlit silhouette study shot through geometric iron lattice bathed in deep crimson sodium backlight.',
    focalLength: '35mm · f/1.4',
    mood: 'Nocturnal & Intense',
    colorGrade: 'Deep Red & Charcoal Noir',
    cameraRig: 'Sony FX3 · 35mm GM Prime · ISO 800',
    location: 'Bangalore Studio Backlot · Night Setup',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'High contrast backlit silhouette in intense crimson light with geometric grid shadows',
    notes: 'Testing directional rim lights for "The Shadow". I wanted zero fill on the subject’s face—letting the character dissolve into pure shadow against the red glow.',
  },
  {
    id: 'ms-2',
    title: 'STREETS IN SILENCE',
    category: 'Photography',
    format: '16:9',
    description: 'Wet asphalt reflecting amber sodium streetlights at 3:00 AM after a sudden monsoon downpour.',
    focalLength: '50mm · f/1.8',
    mood: 'Solitude & Contemplation',
    colorGrade: 'Muted Amber & Wet Asphalt Noir',
    cameraRig: 'Handheld 50mm Prime · 1/50s Shutter · Natural Light',
    location: 'Urban Alleyway · 03:14 AM',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Atmospheric night street with reflective wet asphalt and glowing distant city lights',
    notes: 'Walked the empty avenues after rain. The streetlights acted as motivated practicals, turning ordinary pavement into a mirror of liquid gold and deep contrast.',
  },
  {
    id: 'ms-3',
    title: 'THE CINEMATIC CUT REEL',
    category: 'Editing',
    format: '4:3',
    description: 'DaVinci Resolve dual-monitor timeline editing suite during a late-night color grading and sound-mix session.',
    focalLength: 'Multi-cam match cut & timeline rhythm',
    mood: 'Dynamic & Kinetic Focus',
    colorGrade: 'Film Emulation Kodak 500T',
    cameraRig: 'DaVinci Resolve Studio · Calibrated Reference Monitor',
    location: 'Psycho Creations Post Suite',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Professional video editing monitor displaying video waveforms and cinematic color grading timeline',
    notes: 'A still from my editing workstation during the rough cut assembly of our college film festival submission. The cut point decides how much tension a viewer can bear.',
  },
  {
    id: 'ms-4',
    title: 'PORTRAIT IN SHADOWS',
    category: 'Reels',
    format: '3:4',
    description: 'Single-source edge lighting catching jawline and eye reflections in total darkness.',
    focalLength: '85mm · f/1.4',
    mood: 'Raw & Direct Intensity',
    colorGrade: 'Monochrome High-Key Chiaroscuro',
    cameraRig: '85mm Portrait Prime · Godox Softbox with Honeycomb Grid',
    location: 'Indie Set Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Dramatic chiaroscuro portrait of a man half-submerged in deep cinematic shadow',
    notes: 'Face study for character development. By restricting the key light strictly to 45 degrees, the eyes carry the entire dramatic weight of the scene.',
  },
  {
    id: 'ms-5',
    title: 'ANAMORPHIC DUSK TEST',
    category: 'Experiments',
    format: '16:9',
    description: 'Horizontal blue flare streaking across warm twilight building contours and vehicle taillights.',
    focalLength: 'Anamorphic 1.33x · f/2.0',
    mood: 'Nostalgic & Expansive',
    colorGrade: 'Teal & Deep Carmine Split Tone',
    cameraRig: 'Sirui Anamorphic 35mm · ND 0.9 Filter',
    location: 'Rooftop Horizon Vantage Point',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Moody evening skyline with neon lights and horizontal anamorphic flare glow',
    notes: 'Lens character test. Testing how anamorphic cylindrical elements handle direct light sources at blue hour without losing shadow detail in the architecture.',
  },
  {
    id: 'ms-6',
    title: 'NOMADIC FRAMES',
    category: 'Photography',
    format: '4:3',
    description: 'Historic stone archway framing the fleeting silhouette of a passing traveler in ancient architecture.',
    focalLength: '24mm · f/2.8',
    mood: 'Timeless & Atmospheric',
    colorGrade: 'Warm Stone & Rich Noir',
    cameraRig: '24mm Ultra-Wide Prime · Natural Low Sun',
    location: 'Hampi Heritage Expedition',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Dramatic architectural archway framing an atmospheric heritage landscape',
    notes: 'Shot while exploring heritage architecture. The geometric arch created a natural vignette that pulls the eye directly toward the vanishing point.',
  },
];

export const ACHIEVEMENTS = [
  {
    year: '2025–2026',
    title: 'VTU SHORT FILM COMPETITION',
    rank: '2nd Prize',
    role: 'Cinematography & Edit',
    context: 'Recognized across collegiate film creators for visual direction, lighting, and narrative editing rhythm.',
  },
  {
    year: '2024',
    title: 'SMART INDIA HACKATHON',
    rank: 'Participant & Builder',
    role: 'Frontend & System Flow',
    context: 'Engineered rapid technical prototype addressing national-scale real-world technological challenges.',
  },
  {
    year: '2024',
    title: 'INTERCOLLEGE CRICKET TOURNAMENT',
    rank: '2nd Prize',
    role: 'Active Player & Strategist',
    context: 'High-stakes athletic discipline, teamwork, and tactical resilience under intense tournament pressure.',
  },
  {
    year: '2023–2026',
    title: 'COLLEGE CREATIVE & TECHNICAL EVENTS',
    rank: 'Key Contributor',
    role: 'Lead Cinematographer & Creator',
    context: 'Visual director for flagship college productions, technical showcases, and cultural documentary reels.',
  },
];

export const JOURNEY_MILESTONES = [
  { step: '01', title: 'STUDENT', desc: 'Curiosity sparked by how machines interpret the physical world.' },
  { step: '02', title: 'AI & ML', desc: 'Diving deep into neural networks, computer vision, and tensor operations.' },
  { step: '03', title: 'DEVELOPMENT', desc: 'Crafting responsive user interfaces with React, Vite, and modern web architectures.' },
  { step: '04', title: 'AI PROJECTS', desc: 'Building practical systems: claim damage estimator, expense AI, spoilage detection.' },
  { step: '05', title: 'ACCENTURE EXPOSURE', desc: 'Assistant frontend developer exposure to enterprise-level web workflows.' },
  { step: '06', title: 'HACKATHONS', desc: 'Testing build speed and pressure resistance at Smart India Hackathon.' },
  { step: '07', title: 'CINEMATOGRAPHY', desc: 'The camera became a second brain; mastering focal lengths, angles, and shadow.' },
  { step: '08', title: 'SHORT FILMS', desc: 'Translating written emotion into screen presence and auditory tension.' },
  { step: '09', title: 'NIYATI', desc: 'Conceptualizing psychological thrillers with high-contrast visual worldbuilding.' },
  { step: '10', title: 'THE SHADOW', desc: 'Active production under Psycho Creations as cinematographer, editor & sound artist.' },
  { step: '11', title: 'YOU’RE HERE', desc: 'Exploring the intersection of code, light, and multidisciplinary craft.' },
];

export const MULTIMIND_WORDS = [
  'CODE',
  'AI',
  'CAMERA',
  'EDIT',
  'STORY',
  'MUSIC',
  'ART',
  'SPORT',
];
