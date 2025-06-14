import { Typography } from "@mui/material"
import { websiteCategories } from "./data/Websites"
import GlareHover from "./components/GlareHover"

export default function Home() {
  return (
    <div className="min-h-full">
      <Typography variant="h4" className="px-4 sm:px-6 lg:px-8" fontFamily={'Main'}>Explore tools, resources, and inspiration in one place.</Typography>
      <Typography variant="h5" className="px-4 sm:px-6 lg:px-8" fontFamily={'Main'}>A curated collection of useful websites, organized by category.</Typography>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {
          websiteCategories.map(category => (
            <section key={category.name} id={category.name} className='mt-8 scroll-m-[80px]'>
              <h2 className='text-2xl w-full border-b pb-3'>{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-6 w-full">
                {category.cards.map(card => (
                  <GlareHover
                  key={card.name+"glare"}
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    background="#0A0A0A"
                  >
                    <article
                      key={card.name}
                      className="h-full w-full bg-[transparent] border-solid border-1 border-[#948979] text-white rounded-xl p-4 flex flex-col justify-between gap-4 shadow-md"
                    >
                      <div className="h-full flex items-center gap-4 items-center">
                        <img
                          src={`/icons/${card.icon}`}
                          alt={card.name}
                          className="w-15 h-15 rounded-md object-fit"
                        />
                        <div>
                          <h5 className="text-lg font-semibold font-[Main]">{card.name}</h5>
                          <p className="text-sm text-zinc-300 font-[Main]">{card.description}</p>
                        </div>
                      </div>
                      <nav className='flex justify-center'>
                        <a href={card.href} className='relative font-[Main] z-2 text-[#222831] bg-[#DFD0B8] text-center px-4 py-2 rounded-full hover:bg-[#FFDBFB] transition w-full mx-auto cursor-pointer' target='_blank'>
                          Visit
                        </a>
                      </nav>
                    </article>
                  </GlareHover>
                ))}
              </div>
            </section>
          ))
        }
      </div>
    </div>
  )
}
