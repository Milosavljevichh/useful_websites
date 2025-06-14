import Link from "next/link"

export default function About(){
    return(
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h5 className="mb-5 text-xl/8">
            <strong> Useful Websites</strong> was created as a centralized space to store the various interesting and niche web tools I’ve come across. <br /> While they may not be used every day, many of them prove quite helpful in specific situations.
            </h5>
            <h4 className="text-xl"> Other links:</h4>
            <ul className="text-l px-6">
                <li className="underline">Game development: <span className="italic">Coming Soon</span></li>
                <li className="underline"><Link href={"https://updated-portfolio-two-navy.vercel.app/"} target="_blank">Portfolio</Link></li>
                <li className="underline"><Link href={"https://github.com/Milosavljevichh"} target="_blank">Github</Link></li>
                <li className="underline"><Link href={"#"} target="_blank">Buy me a coffee</Link></li>
            </ul>
        </section>
    )
}