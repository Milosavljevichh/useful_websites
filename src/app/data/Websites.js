import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import ApiIcon from '@mui/icons-material/Api';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import WorkIcon from '@mui/icons-material/Work';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';

export const websiteCategories = [
  {
    name: 'AI Tools',
    cards: [
      { name:'Relume', href:'https://www.relume.io/?via=filatovdesign', description:'Use AI as your design support, not replacement.', icon:'relume.png'},
      { name: 'Auto draw', href: 'https://autodraw.com/', description: 'AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast.', icon: 'pen.png' },
      { name: 'PicWish', href: 'https://picwish.com', description: 'AI-powered background remover and image editing tool.', icon: 'picwish.png' },
      { name: 'WebGremlin', href: 'https://webgremlin.ai', description: 'AI assistant to automate your agency website.', icon: 'webgremlin.png' },
      { name: 'ChatLLM by Abacus', href: 'https://chatllm.abacus.ai', description: 'Chat with customizable LLMs using Abacus.', icon: 'chatllm.png' },
      { name: 'Napkin', href: 'https://napkin.ai', description: 'AI tool for generating visuals.', icon: 'napkin.png' },
      { name: 'Chef by Convex', href: 'https://chef.convex.dev', description: 'AI to generate backend logic for Convex apps.', icon: 'chef.png' },
      { name: 'Emergnet', href: 'https://app.emergent.sh/', description: 'AI to build your app ideas.', icon: 'emergent.png' },
      { name: 'Gamma', href: 'https://gamma.app', description: 'Create beautiful presentations with AI assistance.', icon: 'gamma.png' }
    ],
    icon: <SmartToyIcon />
  },
  {
    name: 'Learning Platforms',
    cards: [
      { name: 'HackSplaining', href: 'https://www.hacksplaining.com', description: 'Interactive tutorials on web security threats.', icon: 'hacker.png' },
      { name: 'Spoken.io', href: 'https://spoken.io', description: 'Compare prices for the product you want to buy.', icon: 'spoken.png' },
      { name: 'SchoolGoat', href: 'https://schoolgoat.com', description: 'An all-in-one AI-powered study assistant.', icon: 'schoolgoat.png' },
      { name: 'Sesame', href: 'https://sesame.com', description: 'Start a call with a life-like AI.', icon: 'sesame.png' },
      { name: 'Imagine Explainers', href: 'https://imagineexplainers.com', description: 'Generate an interactive video on any topic.', icon: 'imagine.png' },
      { name: 'Class Central', href: 'https://classcentral.com', description: 'Aggregator for online courses and MOOCs.', icon: 'classcentral.png' },
      { name: 'AlgoMap.io', href: 'https://algomap.io/', description: 'Free Data Structures & Algorithms Roadmap.', icon: 'algorithm.png' },
      { name: 'Learn Git Branching', href: 'https://learngitbranching.js.org/', description: 'Interactive online tool to help you visually understand how git branching works.', icon: 'gitbranching.png' },
    ],
    icon: <SchoolIcon />
  },
  {
    name: 'Developer Tools',
    cards: [
      { name: 'SEO Studio Tools', href: 'https://seostudio.tools', description: 'Free SEO tools like meta analyzers, keyword checkers.', icon: 'seotools.png' },
      { name: 'QuickRef', href: 'https://quickref.me', description: 'Fast-access cheat sheets for devs.', icon: 'quickref.png' },
      { name: 'Watabou Tools', href: 'https://watabou.github.io', description: 'RPG tools like fantasy map generators and dungeon generators.', icon: 'map.png' },
      { name: 'FSM Visualizer', href: 'https://fsm.alhassan.dev/', description: 'A tool to help you visualize your fsm & states.', icon: 'configurations.png' },
      { name: 'State Diagram Generator', href: 'https://www.eraser.io/ai/state-diagram-generator', description: 'AI State Diagram Generator.', icon: 'configurations.png' },
      { name: 'Stay', href: 'https://staying.fun/en', description: 'Visualize Data Structures & Algorithms in Real Time, an  interactive tool for students, educators, and developers.', icon: 'stay.png' },
      { name: 'Snazzy Maps', href: 'https://snazzymaps.com/', description: 'Snazzy Maps is a repository of different styles for Google Maps aimed towards web designers and developers.', icon: 'snazzymaps.png' },
    ],
    icon: <CodeIcon />
  },
  {
    name: 'API',
    cards: [
      { name: 'Api Vault', href: 'https://apivault.dev/', description: 'Your Gateway To A World Of Public APIs.', icon: 'apivault.png' },
      
    ],
    icon: <ApiIcon />
  },
  {
    name: 'Entertainment & Fun',
    cards: [
      { name: 'GetYarn', href: 'https://getyarn.io', description: 'Search quotes from movies and shows with video snippets.', icon: 'yarn.png' },
      { name: 'AirConsole', href: 'https://airconsole.com', description: 'Play multiplayer games using your phone as a controller.', icon: 'airconsole.png' },
      { name: 'Tools', href: 'https://tooooools.app', description: 'Apply image effects.', icon: 'tools.png' },
    ],
    icon: <VideogameAssetIcon />
  },
  {
    name: 'Career & Productivity',
    cards: [
      { name: 'FlowCV', href: 'https://flowcv.com', description: 'Build and share beautiful resumes easily.', icon: 'flowcv.png' },
      { name: 'Ssemble', href: 'https://ssemble.com', description: 'Online collaborative video editor.', icon: 'ssemble.png' },
      { name: 'Mindcraftor', href: 'https://mindcraftor.ai/', description: 'AI that helps you come up with business ideas.', icon: 'mindcraftor.png' },
      { name: 'Weights', href: 'https://weights.com', description: 'Create any content with AI and train your models.', icon: 'weights.png' }
    ],
    icon: <WorkIcon />
  },
  {
    name: 'PDF Books',
    cards: [
      { name: 'AI Agents - Open AI', href: '/pdf/apracticalguidetobuildingagents_copy.pdf', description: 'Understand what AI agents are and how to build them.', icon: 'pdf.png' },
      { name: 'Game AI Pro', href: 'https://www.gameaipro.com/', description: 'Understand AI behaviour in video games and learn to implement them.', icon: 'pdf.png' },
      { name: 'Sumreads', href: 'https://www.sumreads.com/index.html', description: 'Website which holds a collection of summarized books.', icon: 'sumreads.png' },
      { name: 'The Linux Command Line', href: '/pdf/TLCL-19.01.pdf', description: 'Helps you to start out with linux.', icon: 'pdf.png' },
    ],
    icon: <PictureAsPdfIcon />
  },
  {
    name: 'Guides & Ideas',
    cards: [
      { name:'Real Portfolio Projects', href: 'https://www.notion.so/Real-Portfolio-Projects-2064506bf391808b9d56c655b742671d', description:'Project ideas that employers actually want to see.', icon:'online.png'},
      { name:'Streamline your web design process', href:'https://chipped-hurricane-6fb.notion.site/Streamline-your-web-design-process-with-Relume-AI-1ae4c03f852a802b98b1f0894c4d5daa', description:'With Relume AI, you can go from idea to fully structured wireframe and visual concepts in just minutes.', icon:'online.png'}
      
    ],
    icon: <DescriptionIcon />
  }
]