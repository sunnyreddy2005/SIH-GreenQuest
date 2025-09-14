export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  userType: 'student' | 'teacher' | 'admin';
  school: string;
  grade?: string;
  class?: string;
  avatar?: string;
  points: number;
  level: number;
  badges: string[];
  completedModules: string[];
  completedChallenges: string[];
  joinedDate: string;
  lastActive: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  duration: string;
  category: 'water' | 'energy' | 'waste' | 'biodiversity';
  content: {
    lessons: Lesson[];
    quiz: Quiz;
  };
  prerequisites?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'interactive';
  duration: string;
}

export interface Quiz {
  id: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'water' | 'energy' | 'waste' | 'biodiversity' | 'climate';
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  duration: string;
  requirements: string[];
  verificationMethod: 'photo' | 'video' | 'teacher' | 'self';
  badge?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'water' | 'energy' | 'waste' | 'biodiversity' | 'climate' | 'achievement';
  requirement: string;
  points: number;
}

// Demo Users
export const demoUsers: User[] = [
  {
    id: 'student1',
    name: 'Arjun Patel',
    email: 'arjun.patel@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '10',
    class: '10-A',
    avatar: 'AP',
    points: 1420,
    level: 5,
    badges: ['water-saver', 'eco-warrior', 'leak-detective'],
    completedModules: ['water-basics', 'water-conservation'],
    completedChallenges: ['save-water-week', 'leak-detection'],
    joinedDate: '2024-08-15',
    lastActive: '2025-09-14'
  },
  {
    id: 'student2',
    name: 'Maya Singh',
    email: 'maya.singh@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '10',
    class: '10-A',
    avatar: 'MS',
    points: 1850,
    level: 6,
    badges: ['water-saver', 'forest-guardian', 'eco-champion', 'water-harvester'],
    completedModules: ['water-basics', 'water-conservation'],
    completedChallenges: ['save-water-week', 'rain-harvest', 'leak-detection'],
    joinedDate: '2024-07-20',
    lastActive: '2025-09-14'
  },
  {
    id: 'student3',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '10',
    class: '10-B',
    avatar: 'RS',
    points: 950,
    level: 3,
    badges: ['water-saver', 'eco-warrior'],
    completedModules: ['water-basics'],
    completedChallenges: ['save-water-week'],
    joinedDate: '2024-09-01',
    lastActive: '2025-09-13'
  },
  {
    id: 'student4',
    name: 'Ananya Reddy',
    email: 'ananya.reddy@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '9',
    class: '9-A',
    avatar: 'AR',
    points: 1200,
    level: 4,
    badges: ['water-saver', 'leak-detective', 'eco-warrior'],
    completedModules: ['water-basics'],
    completedChallenges: ['save-water-week', 'leak-detection'],
    joinedDate: '2024-08-25',
    lastActive: '2025-09-14'
  },
  {
    id: 'student5',
    name: 'Karan Joshi',
    email: 'karan.joshi@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '9',
    class: '9-B',
    avatar: 'KJ',
    points: 750,
    level: 3,
    badges: ['water-saver'],
    completedModules: ['water-basics'],
    completedChallenges: ['save-water-week'],
    joinedDate: '2024-09-05',
    lastActive: '2025-09-12'
  },
  {
    id: 'student6',
    name: 'Sneha Gupta',
    email: 'sneha.gupta@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '11',
    class: '11-A',
    avatar: 'SG',
    points: 1650,
    level: 5,
    badges: ['water-saver', 'water-harvester', 'eco-champion', 'forest-guardian'],
    completedModules: ['water-basics', 'water-conservation'],
    completedChallenges: ['save-water-week', 'rain-harvest'],
    joinedDate: '2024-06-15',
    lastActive: '2025-09-14'
  },
  {
    id: 'student7',
    name: 'Vikram Das',
    email: 'vikram.das@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '8',
    class: '8-A',
    avatar: 'VD',
    points: 600,
    level: 2,
    badges: ['water-saver'],
    completedModules: ['water-basics'],
    completedChallenges: [],
    joinedDate: '2024-09-10',
    lastActive: '2025-09-13'
  },
  {
    id: 'student8',
    name: 'Ishita Verma',
    email: 'ishita.verma@greenwood.edu',
    password: 'demo123',
    userType: 'student',
    school: 'Greenwood High School',
    grade: '11',
    class: '11-B',
    avatar: 'IV',
    points: 1100,
    level: 4,
    badges: ['water-saver', 'eco-warrior', 'leak-detective'],
    completedModules: ['water-basics'],
    completedChallenges: ['save-water-week', 'leak-detection'],
    joinedDate: '2024-08-01',
    lastActive: '2025-09-14'
  },
  {
    id: 'teacher1',
    name: 'Dr. Priya Agarwal',
    email: 'priya.agarwal@greenwood.edu',
    password: 'demo123',
    userType: 'teacher',
    school: 'Greenwood High School',
    class: 'Environmental Science',
    avatar: 'PA',
    points: 0,
    level: 1,
    badges: [],
    completedModules: [],
    completedChallenges: [],
    joinedDate: '2024-06-01',
    lastActive: '2025-09-14'
  },
  {
    id: 'admin1',
    name: 'Mr. Rajesh Kumar',
    email: 'rajesh.kumar@greenquest.com',
    password: 'admin123',
    userType: 'admin',
    school: 'GreenQuest Platform',
    avatar: 'RK',
    points: 0,
    level: 1,
    badges: [],
    completedModules: [],
    completedChallenges: [],
    joinedDate: '2024-01-01',
    lastActive: '2025-09-14'
  }
];

// Water Conservation Modules
export const waterModules: Module[] = [
  {
    id: 'water-basics',
    title: 'Water Conservation Basics',
    description: 'Learn the fundamentals of water conservation and why it matters for our planet.',
    difficulty: 'beginner',
    points: 100,
    duration: '30 minutes',
    category: 'water',
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'The Water Cycle',
          content: 'Water is constantly moving through the environment in what we call the water cycle. This includes evaporation from oceans, condensation into clouds, and precipitation as rain or snow. Understanding this cycle helps us appreciate how precious and limited our freshwater resources are.',
          type: 'text',
          duration: '10 minutes'
        },
        {
          id: 'lesson2',
          title: 'Global Water Crisis',
          content: 'Over 2 billion people worldwide lack access to safely managed drinking water. Climate change, pollution, and overconsumption are making this crisis worse. Every drop we save can help ensure water security for future generations.',
          type: 'text',
          duration: '10 minutes'
        },
        {
          id: 'lesson3',
          title: 'Simple Water Saving Tips',
          content: 'Small actions make a big difference: Turn off the tap while brushing teeth (saves 8 liters), take shorter showers (saves 50+ liters), fix leaky faucets, and collect rainwater for plants.',
          type: 'interactive',
          duration: '10 minutes'
        }
      ],
      quiz: {
        id: 'water-basics-quiz',
        questions: [
          {
            id: 'q1',
            question: 'How much water can you save by turning off the tap while brushing your teeth?',
            options: ['2 liters', '8 liters', '15 liters', '20 liters'],
            correctAnswer: 1,
            explanation: 'Turning off the tap while brushing teeth can save up to 8 liters of water each time!'
          },
          {
            id: 'q2',
            question: 'What percentage of Earth\'s water is freshwater available for human use?',
            options: ['30%', '10%', '3%', 'Less than 1%'],
            correctAnswer: 3,
            explanation: 'Less than 1% of Earth\'s water is freshwater that humans can easily access and use.'
          },
          {
            id: 'q3',
            question: 'Which activity typically uses the most water in a household?',
            options: ['Drinking and cooking', 'Washing clothes', 'Showering and bathing', 'Washing dishes'],
            correctAnswer: 2,
            explanation: 'Showering and bathing typically account for the largest portion of household water use.'
          }
        ],
        passingScore: 70
      }
    }
  },
  {
    id: 'water-conservation',
    title: 'Advanced Water Conservation',
    description: 'Dive deeper into water conservation techniques and technologies.',
    difficulty: 'intermediate',
    points: 150,
    duration: '45 minutes',
    category: 'water',
    prerequisites: ['water-basics'],
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'Water Harvesting Techniques',
          content: 'Rainwater harvesting, greywater recycling, and other innovative methods to capture and reuse water in our homes and communities.',
          type: 'text',
          duration: '15 minutes'
        },
        {
          id: 'lesson2',
          title: 'Smart Water Technologies',
          content: 'Learn about smart irrigation systems, water-efficient appliances, and monitoring devices that help optimize water usage.',
          type: 'video',
          duration: '15 minutes'
        },
        {
          id: 'lesson3',
          title: 'Community Water Projects',
          content: 'How schools and communities can work together to implement water conservation initiatives and create lasting impact.',
          type: 'interactive',
          duration: '15 minutes'
        }
      ],
      quiz: {
        id: 'water-conservation-quiz',
        questions: [
          {
            id: 'q1',
            question: 'What is greywater?',
            options: ['Dirty rainwater', 'Water from sinks and showers', 'Industrial wastewater', 'Contaminated groundwater'],
            correctAnswer: 1,
            explanation: 'Greywater is wastewater from sinks, showers, and washing machines that can be recycled for other uses.'
          },
          {
            id: 'q2',
            question: 'How much water can smart irrigation systems save compared to traditional sprinklers?',
            options: ['10-20%', '30-50%', '60-80%', '90-95%'],
            correctAnswer: 1,
            explanation: 'Smart irrigation systems can save 30-50% of water compared to traditional sprinkler systems.'
          }
        ],
        passingScore: 80
      }
    }
  }
];

// Energy Conservation Modules
export const energyModules: Module[] = [
  {
    id: 'energy-basics',
    title: 'Energy Conservation Fundamentals',
    description: 'Understand the importance of energy conservation and simple ways to reduce energy consumption.',
    difficulty: 'beginner',
    points: 100,
    duration: '35 minutes',
    category: 'energy',
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'Types of Energy Sources',
          content: 'Learn about renewable energy sources like solar, wind, and hydroelectric power, and non-renewable sources like coal, oil, and natural gas. Understanding the difference helps us make better energy choices.',
          type: 'text',
          duration: '12 minutes'
        },
        {
          id: 'lesson2',
          title: 'Energy Crisis and Climate Impact',
          content: 'Burning fossil fuels contributes to climate change and air pollution. Energy conservation reduces our carbon footprint and helps protect the environment for future generations.',
          type: 'text',
          duration: '12 minutes'
        },
        {
          id: 'lesson3',
          title: 'Home Energy Saving Tips',
          content: 'Simple actions like switching to LED bulbs, unplugging devices when not in use, using natural light, and adjusting thermostat settings can significantly reduce energy consumption.',
          type: 'interactive',
          duration: '11 minutes'
        }
      ],
      quiz: {
        id: 'energy-basics-quiz',
        questions: [
          {
            id: 'q1',
            question: 'Which type of light bulb is most energy efficient?',
            options: ['Incandescent', 'CFL', 'LED', 'Halogen'],
            correctAnswer: 2,
            explanation: 'LED bulbs use up to 80% less energy than incandescent bulbs and last much longer.'
          },
          {
            id: 'q2',
            question: 'What percentage of electricity can you save by unplugging electronics when not in use?',
            options: ['5-10%', '10-15%', '15-20%', '20-25%'],
            correctAnswer: 1,
            explanation: 'Unplugging electronics can save 10-15% on your electricity bill by eliminating phantom loads.'
          }
        ],
        passingScore: 70
      }
    }
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Technologies',
    description: 'Explore different renewable energy technologies and their applications.',
    difficulty: 'intermediate',
    points: 140,
    duration: '40 minutes',
    category: 'energy',
    prerequisites: ['energy-basics'],
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'Solar Energy Systems',
          content: 'How solar panels work, different types of solar installations, and the benefits of solar energy for homes and communities.',
          type: 'video',
          duration: '15 minutes'
        },
        {
          id: 'lesson2',
          title: 'Wind and Hydroelectric Power',
          content: 'Understanding wind turbines and hydroelectric dams, their environmental impact, and where they work best.',
          type: 'text',
          duration: '12 minutes'
        },
        {
          id: 'lesson3',
          title: 'Future Energy Technologies',
          content: 'Emerging technologies like battery storage, smart grids, and hydrogen fuel cells that will shape our energy future.',
          type: 'interactive',
          duration: '13 minutes'
        }
      ],
      quiz: {
        id: 'renewable-energy-quiz',
        questions: [
          {
            id: 'q1',
            question: 'What is the main advantage of battery storage for renewable energy?',
            options: ['Cheaper installation', 'Stores energy for later use', 'Produces more energy', 'Requires less maintenance'],
            correctAnswer: 1,
            explanation: 'Battery storage allows renewable energy to be stored when production is high and used when needed.'
          },
          {
            id: 'q2',
            question: 'Which factor is most important for solar panel efficiency?',
            options: ['Color of the panel', 'Direction and angle', 'Brand name', 'Size of the panel'],
            correctAnswer: 1,
            explanation: 'The direction and angle of solar panels relative to the sun is crucial for maximum efficiency.'
          }
        ],
        passingScore: 75
      }
    }
  }
];

// Waste Management Modules
export const wasteModules: Module[] = [
  {
    id: 'waste-basics',
    title: 'Waste Management Fundamentals',
    description: 'Learn the basics of waste reduction, recycling, and responsible disposal.',
    difficulty: 'beginner',
    points: 100,
    duration: '30 minutes',
    category: 'waste',
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'The 5 Rs of Waste Management',
          content: 'Refuse, Reduce, Reuse, Recycle, and Rot - the hierarchy of waste management that helps minimize environmental impact.',
          type: 'text',
          duration: '10 minutes'
        },
        {
          id: 'lesson2',
          title: 'Types of Waste and Their Impact',
          content: 'Understanding different types of waste: organic, recyclable, hazardous, and electronic waste, and their environmental effects.',
          type: 'text',
          duration: '10 minutes'
        },
        {
          id: 'lesson3',
          title: 'Home Waste Reduction Strategies',
          content: 'Practical tips for reducing waste at home: buying in bulk, using reusable bags, composting, and choosing products with minimal packaging.',
          type: 'interactive',
          duration: '10 minutes'
        }
      ],
      quiz: {
        id: 'waste-basics-quiz',
        questions: [
          {
            id: 'q1',
            question: 'What is the first R in the waste management hierarchy?',
            options: ['Reduce', 'Reuse', 'Refuse', 'Recycle'],
            correctAnswer: 2,
            explanation: 'Refuse is the first step - avoiding unnecessary items prevents waste from being created.'
          },
          {
            id: 'q2',
            question: 'How long does it take for a plastic bottle to decompose?',
            options: ['50 years', '100 years', '450 years', '1000 years'],
            correctAnswer: 2,
            explanation: 'Plastic bottles can take up to 450 years to decompose in landfills.'
          }
        ],
        passingScore: 70
      }
    }
  },
  {
    id: 'recycling-composting',
    title: 'Recycling and Composting',
    description: 'Master the art of recycling and composting to minimize waste.',
    difficulty: 'intermediate',
    points: 130,
    duration: '40 minutes',
    category: 'waste',
    prerequisites: ['waste-basics'],
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'Effective Recycling Practices',
          content: 'Learn proper sorting techniques, what can and cannot be recycled, and how to prepare materials for recycling.',
          type: 'interactive',
          duration: '15 minutes'
        },
        {
          id: 'lesson2',
          title: 'Home Composting Systems',
          content: 'Setting up composting systems at home, what materials to compost, and maintaining healthy compost for your garden.',
          type: 'text',
          duration: '12 minutes'
        },
        {
          id: 'lesson3',
          title: 'Community Recycling Programs',
          content: 'How to organize recycling drives, e-waste collection events, and community composting initiatives.',
          type: 'video',
          duration: '13 minutes'
        }
      ],
      quiz: {
        id: 'recycling-composting-quiz',
        questions: [
          {
            id: 'q1',
            question: 'Which items should NOT go in compost?',
            options: ['Fruit peels', 'Coffee grounds', 'Meat and dairy', 'Dried leaves'],
            correctAnswer: 2,
            explanation: 'Meat and dairy products should not be composted as they can attract pests and create odors.'
          },
          {
            id: 'q2',
            question: 'What does the number inside the recycling symbol on plastic items indicate?',
            options: ['How many times it can be recycled', 'The type of plastic', 'The recycling facility', 'The manufacturing date'],
            correctAnswer: 1,
            explanation: 'The number indicates the type of plastic, which determines how it should be recycled.'
          }
        ],
        passingScore: 75
      }
    }
  }
];

// Biodiversity Modules
export const biodiversityModules: Module[] = [
  {
    id: 'biodiversity-basics',
    title: 'Understanding Biodiversity',
    description: 'Explore the importance of biodiversity and ecosystem conservation.',
    difficulty: 'beginner',
    points: 110,
    duration: '35 minutes',
    category: 'biodiversity',
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'What is Biodiversity?',
          content: 'Biodiversity refers to the variety of life on Earth - from genes to species to ecosystems. It includes all living things and their interactions.',
          type: 'text',
          duration: '12 minutes'
        },
        {
          id: 'lesson2',
          title: 'Threats to Biodiversity',
          content: 'Climate change, habitat destruction, pollution, and invasive species are major threats to biodiversity worldwide.',
          type: 'video',
          duration: '12 minutes'
        },
        {
          id: 'lesson3',
          title: 'Protecting Local Wildlife',
          content: 'Simple actions to protect local wildlife: creating habitat gardens, reducing pesticide use, and supporting conservation efforts.',
          type: 'interactive',
          duration: '11 minutes'
        }
      ],
      quiz: {
        id: 'biodiversity-basics-quiz',
        questions: [
          {
            id: 'q1',
            question: 'Which ecosystem has the highest biodiversity?',
            options: ['Desert', 'Tropical rainforest', 'Grassland', 'Tundra'],
            correctAnswer: 1,
            explanation: 'Tropical rainforests contain more than half of the world\'s species despite covering only 2% of Earth\'s surface.'
          },
          {
            id: 'q2',
            question: 'What is the main cause of species extinction today?',
            options: ['Climate change', 'Disease', 'Habitat loss', 'Natural disasters'],
            correctAnswer: 2,
            explanation: 'Habitat loss due to human activities is the primary cause of species extinction today.'
          }
        ],
        passingScore: 70
      }
    }
  },
  {
    id: 'ecosystem-conservation',
    title: 'Ecosystem Conservation',
    description: 'Learn about different ecosystems and conservation strategies.',
    difficulty: 'intermediate',
    points: 150,
    duration: '45 minutes',
    category: 'biodiversity',
    prerequisites: ['biodiversity-basics'],
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'Forest Ecosystems',
          content: 'Understanding forest ecosystems, their role in climate regulation, and conservation efforts like reforestation and sustainable forestry.',
          type: 'text',
          duration: '15 minutes'
        },
        {
          id: 'lesson2',
          title: 'Marine and Wetland Conservation',
          content: 'Protecting ocean and wetland ecosystems through marine protected areas, coral reef restoration, and pollution reduction.',
          type: 'video',
          duration: '15 minutes'
        },
        {
          id: 'lesson3',
          title: 'Urban Biodiversity',
          content: 'Creating green spaces, wildlife corridors, and habitat gardens in urban areas to support biodiversity.',
          type: 'interactive',
          duration: '15 minutes'
        }
      ],
      quiz: {
        id: 'ecosystem-conservation-quiz',
        questions: [
          {
            id: 'q1',
            question: 'What percentage of marine areas are currently protected?',
            options: ['Less than 10%', '20-30%', '40-50%', 'More than 60%'],
            correctAnswer: 0,
            explanation: 'Less than 10% of marine areas are currently protected, though conservation targets aim for 30%.'
          },
          {
            id: 'q2',
            question: 'Which practice helps create wildlife corridors in cities?',
            options: ['Building taller buildings', 'Connecting green spaces', 'Increasing traffic', 'Paving more roads'],
            correctAnswer: 1,
            explanation: 'Connecting green spaces creates wildlife corridors that allow animals to move safely through urban areas.'
          }
        ],
        passingScore: 75
      }
    }
  }
];

// Climate and Sustainability Modules
export const climateModules: Module[] = [
  {
    id: 'climate-change',
    title: 'Climate Change and Action',
    description: 'Understanding climate change causes, effects, and solutions.',
    difficulty: 'intermediate',
    points: 160,
    duration: '50 minutes',
    category: 'energy',
    prerequisites: ['energy-basics'],
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'The Science of Climate Change',
          content: 'How greenhouse gases trap heat, the role of human activities, and evidence of global climate change through temperature records and ice core data.',
          type: 'video',
          duration: '18 minutes'
        },
        {
          id: 'lesson2',
          title: 'Climate Impacts on Communities',
          content: 'How climate change affects agriculture, water resources, coastal areas, and human health around the world.',
          type: 'text',
          duration: '16 minutes'
        },
        {
          id: 'lesson3',
          title: 'Individual and Collective Action',
          content: 'Personal actions to reduce carbon footprint and how communities can work together for climate solutions.',
          type: 'interactive',
          duration: '16 minutes'
        }
      ],
      quiz: {
        id: 'climate-change-quiz',
        questions: [
          {
            id: 'q1',
            question: 'Which greenhouse gas is most abundant in the atmosphere?',
            options: ['Carbon dioxide', 'Methane', 'Water vapor', 'Nitrous oxide'],
            correctAnswer: 2,
            explanation: 'Water vapor is the most abundant greenhouse gas, though CO2 is the most significant human-caused one.'
          },
          {
            id: 'q2',
            question: 'What is the main cause of sea level rise?',
            options: ['Melting ice caps', 'Thermal expansion', 'Ocean currents', 'Underwater earthquakes'],
            correctAnswer: 1,
            explanation: 'Thermal expansion of seawater as it warms is the primary cause of sea level rise.'
          }
        ],
        passingScore: 75
      }
    }
  },
  {
    id: 'sustainable-lifestyle',
    title: 'Sustainable Living Practices',
    description: 'Integrate sustainability into daily life and decision-making.',
    difficulty: 'intermediate',
    points: 140,
    duration: '40 minutes',
    category: 'waste',
    prerequisites: ['waste-basics'],
    content: {
      lessons: [
        {
          id: 'lesson1',
          title: 'Sustainable Consumption Choices',
          content: 'Making environmentally conscious choices about food, clothing, and products. Understanding labels, certifications, and supply chains.',
          type: 'interactive',
          duration: '15 minutes'
        },
        {
          id: 'lesson2',
          title: 'Minimalism and Circular Economy',
          content: 'Reducing consumption, extending product lifecycles, and participating in sharing economies and circular business models.',
          type: 'text',
          duration: '12 minutes'
        },
        {
          id: 'lesson3',
          title: 'Community Engagement',
          content: 'Getting involved in local environmental initiatives, advocacy, and building sustainable communities.',
          type: 'video',
          duration: '13 minutes'
        }
      ],
      quiz: {
        id: 'sustainable-lifestyle-quiz',
        questions: [
          {
            id: 'q1',
            question: 'What does "fast fashion" refer to?',
            options: ['Quick tailoring services', 'Rapid production of cheap clothing', 'Designer fashion shows', 'Online clothing sales'],
            correctAnswer: 1,
            explanation: 'Fast fashion refers to the rapid production of inexpensive clothing that often leads to waste and poor labor conditions.'
          },
          {
            id: 'q2',
            question: 'Which diet has the lowest environmental impact?',
            options: ['High meat consumption', 'Plant-based diet', 'Processed foods only', 'Imported foods only'],
            correctAnswer: 1,
            explanation: 'Plant-based diets generally have a much lower environmental impact than meat-heavy diets.'
          }
        ],
        passingScore: 75
      }
    }
  }
];

// Combined modules array for easy access
export const allModules: Module[] = [
  ...waterModules,
  ...energyModules,
  ...wasteModules,
  ...biodiversityModules,
  ...climateModules
];

// Water Conservation Challenges
export const waterChallenges: Challenge[] = [
  {
    id: 'save-water-week',
    title: 'Save 10 Liters a Day Challenge',
    description: 'For one week, implement water-saving techniques to save at least 10 liters of water each day. Document your methods and results.',
    category: 'water',
    points: 200,
    difficulty: 'easy',
    duration: '7 days',
    requirements: [
      'Track daily water usage',
      'Implement at least 3 water-saving techniques',
      'Take before/after photos of changes made',
      'Log daily water savings'
    ],
    verificationMethod: 'photo',
    badge: 'water-saver'
  },
  {
    id: 'rain-harvest',
    title: 'Rainwater Harvesting Setup',
    description: 'Set up a rainwater harvesting system at home or school to collect and use rainwater for plants or cleaning.',
    category: 'water',
    points: 300,
    difficulty: 'medium',
    duration: '2 weeks',
    requirements: [
      'Design a rainwater collection system',
      'Install collection containers',
      'Use collected water for intended purpose',
      'Measure amount of water collected'
    ],
    verificationMethod: 'photo',
    badge: 'water-harvester'
  },
  {
    id: 'leak-detection',
    title: 'Home Water Leak Detective',
    description: 'Conduct a thorough inspection of your home or school for water leaks and help fix any issues found.',
    category: 'water',
    points: 150,
    difficulty: 'easy',
    duration: '3 days',
    requirements: [
      'Check all faucets, toilets, and pipes',
      'Document any leaks found',
      'Help repair or report leaks',
      'Calculate water savings after repairs'
    ],
    verificationMethod: 'photo',
    badge: 'leak-detective'
  }
];

// Energy Conservation Challenges
export const energyChallenges: Challenge[] = [
  {
    id: 'energy-audit',
    title: 'Home Energy Audit',
    description: 'Conduct a comprehensive energy audit of your home to identify where energy is being wasted.',
    category: 'energy',
    points: 200,
    difficulty: 'medium',
    duration: '1 week',
    requirements: [
      'Check all light bulbs and replace inefficient ones',
      'Test for air leaks around windows and doors',
      'Monitor electricity usage for 3 days',
      'Create an action plan to reduce energy consumption'
    ],
    verificationMethod: 'photo',
    badge: 'energy-auditor'
  },
  {
    id: 'solar-cooking',
    title: 'Solar Cooking Experiment',
    description: 'Build a simple solar cooker and use it to prepare a meal using only solar energy.',
    category: 'energy',
    points: 250,
    difficulty: 'medium',
    duration: '2 days',
    requirements: [
      'Build a solar cooker using cardboard, aluminum foil, and plastic wrap',
      'Cook a simple meal (like heating water or cooking rice)',
      'Document temperature readings during cooking',
      'Share the experience with family or friends'
    ],
    verificationMethod: 'photo',
    badge: 'solar-chef'
  },
  {
    id: 'energy-saving-week',
    title: 'Energy Saving Challenge Week',
    description: 'Reduce your household energy consumption by 20% for one week through conscious actions.',
    category: 'energy',
    points: 180,
    difficulty: 'easy',
    duration: '1 week',
    requirements: [
      'Track daily electricity usage',
      'Implement 5 energy-saving practices',
      'Involve family members in the challenge',
      'Calculate total energy and cost savings'
    ],
    verificationMethod: 'photo',
    badge: 'energy-saver'
  }
];

// Waste Management Challenges
export const wasteChallenges: Challenge[] = [
  {
    id: 'zero-waste-day',
    title: 'Zero Waste Challenge',
    description: 'Spend an entire day producing absolutely no waste by reusing, composting, and avoiding disposables.',
    category: 'waste',
    points: 220,
    difficulty: 'hard',
    duration: '1 day',
    requirements: [
      'Plan all meals to avoid food waste',
      'Use only reusable containers and bags',
      'Compost all organic waste',
      'Document everything you would have thrown away'
    ],
    verificationMethod: 'photo',
    badge: 'zero-waste-warrior'
  },
  {
    id: 'upcycling-project',
    title: 'Creative Upcycling Project',
    description: 'Transform at least 5 waste items into useful or decorative objects through creative upcycling.',
    category: 'waste',
    points: 160,
    difficulty: 'medium',
    duration: '3 days',
    requirements: [
      'Collect 5 different waste items',
      'Transform them into useful or beautiful objects',
      'Document the before and after',
      'Teach someone else your upcycling technique'
    ],
    verificationMethod: 'photo',
    badge: 'upcycle-artist'
  },
  {
    id: 'compost-system',
    title: 'Home Composting System',
    description: 'Set up a composting system at home and maintain it for 2 weeks to create rich soil.',
    category: 'waste',
    points: 190,
    difficulty: 'medium',
    duration: '2 weeks',
    requirements: [
      'Set up a compost bin or pile',
      'Add organic waste daily (fruit peels, vegetable scraps)',
      'Monitor temperature and moisture levels',
      'Turn the compost regularly and document progress'
    ],
    verificationMethod: 'photo',
    badge: 'compost-master'
  },
  {
    id: 'plastic-free-week',
    title: 'Plastic-Free Living Week',
    description: 'Live completely plastic-free for one week by finding alternatives to all plastic items.',
    category: 'waste',
    points: 200,
    difficulty: 'hard',
    duration: '1 week',
    requirements: [
      'Identify all plastic items you normally use',
      'Find sustainable alternatives for each item',
      'Track plastic items avoided',
      'Calculate environmental impact saved'
    ],
    verificationMethod: 'photo',
    badge: 'plastic-free-champion'
  }
];

// Biodiversity Conservation Challenges
export const biodiversityChallenges: Challenge[] = [
  {
    id: 'wildlife-habitat-garden',
    title: 'Wildlife Habitat Garden',
    description: 'Create a small garden space that provides food, water, and shelter for local wildlife.',
    category: 'biodiversity',
    points: 250,
    difficulty: 'medium',
    duration: '2 weeks',
    requirements: [
      'Plant native flowers and plants',
      'Provide a water source (bird bath or small pond)',
      'Create shelter using natural materials',
      'Document wildlife visitors over time'
    ],
    verificationMethod: 'photo',
    badge: 'habitat-creator'
  },
  {
    id: 'species-survey',
    title: 'Local Species Survey',
    description: 'Conduct a biodiversity survey of your local area and document different species found.',
    category: 'biodiversity',
    points: 180,
    difficulty: 'easy',
    duration: '1 week',
    requirements: [
      'Survey a local park, garden, or natural area',
      'Identify and photograph at least 15 different species',
      'Research each species and their role in the ecosystem',
      'Create a species identification guide'
    ],
    verificationMethod: 'photo',
    badge: 'species-explorer'
  },
  {
    id: 'pollinator-support',
    title: 'Pollinator Support Project',
    description: 'Create a pollinator-friendly space to support bees, butterflies, and other important pollinators.',
    category: 'biodiversity',
    points: 200,
    difficulty: 'medium',
    duration: '10 days',
    requirements: [
      'Plant pollinator-friendly flowers',
      'Avoid using pesticides in the area',
      'Provide nesting sites for bees',
      'Monitor and document pollinator activity'
    ],
    verificationMethod: 'photo',
    badge: 'pollinator-protector'
  },
  {
    id: 'seed-bomb-campaign',
    title: 'Seed Bomb Guerrilla Gardening',
    description: 'Create seed bombs and plant them in appropriate public spaces to increase local plant diversity.',
    category: 'biodiversity',
    points: 160,
    difficulty: 'easy',
    duration: '1 week',
    requirements: [
      'Make seed bombs with native plant seeds',
      'Get permission to plant in appropriate areas',
      'Plant seed bombs in suitable locations',
      'Return to check germination progress'
    ],
    verificationMethod: 'photo',
    badge: 'guerrilla-gardener'
  }
];

// Climate Action and Sustainability Challenges
export const climateChallenges: Challenge[] = [
  {
    id: 'carbon-footprint-tracking',
    title: 'Personal Carbon Footprint Challenge',
    description: 'Track and reduce your personal carbon footprint for one month through lifestyle changes.',
    category: 'climate',
    points: 300,
    difficulty: 'hard',
    duration: '1 month',
    requirements: [
      'Calculate your baseline carbon footprint',
      'Implement at least 5 carbon-reducing strategies',
      'Track transportation, energy, and food choices',
      'Achieve at least 25% reduction in carbon footprint'
    ],
    verificationMethod: 'photo',
    badge: 'carbon-reducer'
  },
  {
    id: 'climate-advocacy',
    title: 'Climate Action Advocacy',
    description: 'Organize or participate in a climate action event to raise awareness in your community.',
    category: 'climate',
    points: 280,
    difficulty: 'hard',
    duration: '2 weeks',
    requirements: [
      'Plan a climate awareness event or join existing initiative',
      'Educate at least 10 people about climate change',
      'Collect commitments for climate action',
      'Document the impact of your advocacy work'
    ],
    verificationMethod: 'photo',
    badge: 'climate-advocate'
  },
  {
    id: 'sustainable-transport',
    title: 'Sustainable Transportation Month',
    description: 'Use only sustainable transportation methods (walking, cycling, public transport) for one month.',
    category: 'climate',
    points: 250,
    difficulty: 'medium',
    duration: '1 month',
    requirements: [
      'Eliminate use of personal cars for one month',
      'Use walking, cycling, or public transport only',
      'Track distances and calculate CO2 savings',
      'Encourage family/friends to join the challenge'
    ],
    verificationMethod: 'photo',
    badge: 'sustainable-commuter'
  },
  {
    id: 'green-lifestyle',
    title: 'Complete Green Lifestyle Makeover',
    description: 'Adopt 10 sustainable living practices and maintain them for 3 weeks.',
    category: 'climate',
    points: 320,
    difficulty: 'hard',
    duration: '3 weeks',
    requirements: [
      'Implement 10 sustainable practices (diet, transport, consumption, etc.)',
      'Track environmental impact of each change',
      'Calculate total resource savings',
      'Inspire others to adopt similar practices'
    ],
    verificationMethod: 'photo',
    badge: 'green-lifestyle-champion'
  }
];

// Combined challenges array for easy access
export const allChallenges: Challenge[] = [
  ...waterChallenges,
  ...energyChallenges,
  ...wasteChallenges,
  ...biodiversityChallenges,
  ...climateChallenges
];

// Achievement Badges
export const badges: Badge[] = [
  {
    id: 'water-saver',
    name: 'Water Saver',
    description: 'Completed your first water conservation challenge',
    icon: '💧',
    category: 'water',
    requirement: 'Complete any water conservation challenge',
    points: 50
  },
  {
    id: 'water-harvester',
    name: 'Water Harvester',
    description: 'Successfully set up a rainwater harvesting system',
    icon: '🌧️',
    category: 'water',
    requirement: 'Complete the rainwater harvesting challenge',
    points: 100
  },
  {
    id: 'leak-detective',
    name: 'Leak Detective',
    description: 'Found and helped fix water leaks',
    icon: '🔍',
    category: 'water',
    requirement: 'Complete the leak detection challenge',
    points: 75
  },
  {
    id: 'eco-warrior',
    name: 'Eco Warrior',
    description: 'Earned 500+ points in environmental activities',
    icon: '⚔️',
    category: 'achievement',
    requirement: 'Accumulate 500 or more points',
    points: 100
  },
  {
    id: 'forest-guardian',
    name: 'Forest Guardian',
    description: 'Participated in tree planting activities',
    icon: '🌳',
    category: 'biodiversity',
    requirement: 'Complete a tree planting challenge',
    points: 150
  },
  {
    id: 'eco-champion',
    name: 'Eco Champion',
    description: 'Completed challenges in multiple categories',
    icon: '🏆',
    category: 'achievement',
    requirement: 'Complete challenges in 3 different categories',
    points: 200
  },
  // Energy Conservation Badges
  {
    id: 'energy-auditor',
    name: 'Energy Auditor',
    description: 'Conducted a comprehensive home energy audit',
    icon: '🔍',
    category: 'energy',
    requirement: 'Complete the home energy audit challenge',
    points: 100
  },
  {
    id: 'solar-chef',
    name: 'Solar Chef',
    description: 'Successfully cooked a meal using solar energy',
    icon: '☀️',
    category: 'energy',
    requirement: 'Complete the solar cooking challenge',
    points: 120
  },
  {
    id: 'energy-saver',
    name: 'Energy Saver',
    description: 'Reduced household energy consumption by 20%',
    icon: '⚡',
    category: 'energy',
    requirement: 'Complete the energy saving week challenge',
    points: 100
  },
  // Waste Management Badges
  {
    id: 'zero-waste-warrior',
    name: 'Zero Waste Warrior',
    description: 'Achieved zero waste for an entire day',
    icon: '🌱',
    category: 'waste',
    requirement: 'Complete the zero waste challenge',
    points: 150
  },
  {
    id: 'upcycle-artist',
    name: 'Upcycle Artist',
    description: 'Transformed waste into beautiful useful objects',
    icon: '🎨',
    category: 'waste',
    requirement: 'Complete the upcycling project challenge',
    points: 100
  },
  {
    id: 'compost-master',
    name: 'Compost Master',
    description: 'Successfully maintained a composting system',
    icon: '🌿',
    category: 'waste',
    requirement: 'Complete the composting system challenge',
    points: 110
  },
  {
    id: 'plastic-free-champion',
    name: 'Plastic-Free Champion',
    description: 'Lived plastic-free for an entire week',
    icon: '🚫',
    category: 'waste',
    requirement: 'Complete the plastic-free week challenge',
    points: 130
  },
  // Biodiversity Conservation Badges
  {
    id: 'habitat-creator',
    name: 'Habitat Creator',
    description: 'Created a wildlife habitat garden',
    icon: '🦋',
    category: 'biodiversity',
    requirement: 'Complete the wildlife habitat garden challenge',
    points: 140
  },
  {
    id: 'species-explorer',
    name: 'Species Explorer',
    description: 'Documented local biodiversity through survey',
    icon: '🔬',
    category: 'biodiversity',
    requirement: 'Complete the species survey challenge',
    points: 100
  },
  {
    id: 'pollinator-protector',
    name: 'Pollinator Protector',
    description: 'Created a pollinator-friendly environment',
    icon: '🐝',
    category: 'biodiversity',
    requirement: 'Complete the pollinator support challenge',
    points: 110
  },
  {
    id: 'guerrilla-gardener',
    name: 'Guerrilla Gardener',
    description: 'Increased plant diversity through seed bombing',
    icon: '💣',
    category: 'biodiversity',
    requirement: 'Complete the seed bomb campaign challenge',
    points: 90
  },
  // Climate Action Badges
  {
    id: 'carbon-reducer',
    name: 'Carbon Reducer',
    description: 'Significantly reduced personal carbon footprint',
    icon: '🌍',
    category: 'climate',
    requirement: 'Complete the carbon footprint tracking challenge',
    points: 200
  },
  {
    id: 'climate-advocate',
    name: 'Climate Advocate',
    description: 'Organized or participated in climate action',
    icon: '📢',
    category: 'climate',
    requirement: 'Complete the climate advocacy challenge',
    points: 180
  },
  {
    id: 'sustainable-commuter',
    name: 'Sustainable Commuter',
    description: 'Used only sustainable transport for a month',
    icon: '🚲',
    category: 'climate',
    requirement: 'Complete the sustainable transport challenge',
    points: 160
  },
  {
    id: 'green-lifestyle-champion',
    name: 'Green Lifestyle Champion',
    description: 'Adopted comprehensive sustainable living practices',
    icon: '♻️',
    category: 'climate',
    requirement: 'Complete the green lifestyle makeover challenge',
    points: 220
  }
];