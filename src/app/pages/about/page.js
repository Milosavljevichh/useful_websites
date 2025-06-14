import Link from "next/link"
import GradientText from "@/app/components/GradientText"

export default function About() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-[Main] text-center">
            <h5 className="mb-5 text-xl/8">
                <strong> Useful Websites</strong> was created as a centralized space to store the various interesting and niche web tools I’ve come across. <br /> While they may not be used every day, many of them prove quite helpful in specific situations.
            </h5>
            <h4 className="text-2xl mt-28"> Other links:</h4>
            <ul className="text-l px-6">
                <li>
                    <Link href={"https://updated-portfolio-two-navy.vercel.app/"} target="_blank">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        Portfolio
                    </GradientText>
                </Link>
                </li>
                <li>
                    <Link href={"https://github.com/Milosavljevichh"} target="_blank">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        Github
                    </GradientText>
                </Link>
                </li>
            </ul>
        </section>
    )
}