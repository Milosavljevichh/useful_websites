import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Make my day', href: '#', current: false },
]
const websiteCategories = [
  {
    name: 'AI Tools',
    cards: [
      { name: 'Auto draw', href: 'https://autodraw.com/', description: 'AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast.', icon: 'pen.png' },
      { name: 'PicWish', href: 'https://picwish.com', description: 'AI-powered background remover and image editing tool.', icon: 'picwish.png' },
      { name: 'WebGremlin', href: 'https://webgremlin.ai', description: 'AI assistant to automate your agency website.', icon: 'webgremlin.png' },
      { name: 'ChatLLM by Abacus', href: 'https://chatllm.abacus.ai', description: 'Chat with customizable LLMs using Abacus.', icon: 'chatllm.png' },
      { name: 'Napkin', href: 'https://napkin.ai', description: 'AI tool for generating visuals.', icon: 'napkin.png' },
      { name: 'Chef by Convex', href: 'https://chef.convex.dev', description: 'AI to generate backend logic for Convex apps.', icon: 'chef.png' },
      { name: 'Gamma', href: 'https://gamma.app', description: 'Create beautiful presentations with AI assistance.', icon: 'gamma.png' }
    ]
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
    ]
  },
  {
    name: 'Developer Tools',
    cards: [
      { name: 'SEO Studio Tools', href: 'https://seostudio.tools', description: 'Free SEO tools like meta analyzers, keyword checkers.', icon: 'seotools.png' },
      { name: 'QuickRef', href: 'https://quickref.me', description: 'Fast-access cheat sheets for devs.', icon: 'quickref.png' },
      { name: 'Watabou Tools', href: 'https://watabou.github.io', description: 'RPG tools like fantasy map generators and dungeon generators.', icon: 'map.png' }
    ]
  },
  {
    name: 'Entertainment & Fun',
    cards: [
      { name: 'GetYarn', href: 'https://getyarn.io', description: 'Search quotes from movies and shows with video snippets.', icon: 'yarn.png' },
      { name: 'AirConsole', href: 'https://airconsole.com', description: 'Play multiplayer games using your phone as a controller.', icon: 'airconsole.png' },
      { name: 'Tools', href: 'https://tooooools.app', description: 'Apply image effects.', icon: 'tools.png' },
    ]
  },
  {
    name: 'Career & Productivity',
    cards: [
      { name: 'FlowCV', href: 'https://flowcv.com', description: 'Build and share beautiful resumes easily.', icon: 'flowcv.png' },
      { name: 'Ssemble', href: 'https://ssemble.com', description: 'Online collaborative video editor.', icon: 'ssemble.png' },
      { name: 'Weights', href: 'https://weights.com', description: 'Create any content with AI and train your models.', icon: 'weights.png' }
    ]
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>

        <header className="bg-[#393E46] shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FEF3E2]">Useful Websites</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {
              websiteCategories.map(category => (
                <section key={category.name} className='mt-5'>
                  <h2 className='text-2xl w-full border-b pb-3'>{category.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-6 w-full">
                  {category.cards.map(card => (
                    <article
                      key={card.name}
                      className="bg-[#94897990] text-white rounded-xl p-4 flex flex-col justify-between gap-4 shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={`/icons/${card.icon}`}
                          alt={card.name}
                          className="w-15 h-15 rounded-md object-fit"
                        />
                        <div>
                          <h5 className="text-lg font-semibold">{card.name}</h5>
                          <p className="text-sm text-zinc-300">{card.description}</p>
                        </div>
                      </div>
                      <nav className='flex justify-center'>
                        <a href={card.href} className='text-[#222831] bg-[#DFD0B8] text-center px-4 py-2 rounded-full hover:bg-violet-400 transition w-full mx-auto cursor-pointer' target='_blank'>
                          Visit
                        </a>
                      </nav>
                    </article>

                  ))}
                  </div>
                </section>
              ))
            }
          </div>
        </main>
      </div>
    </>
  )
}
