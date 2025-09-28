import { ComputerDesktopIcon, Square3Stack3DIcon, PuzzlePieceIcon } from '@heroicons/react/20/solid'

const IconMap: any = {
    "ComputerDesktopIcon": <ComputerDesktopIcon aria-hidden="true" className="size-10 stroke-black dark:stroke-purple-400" />,
    "Stack": <Square3Stack3DIcon aria-hidden="true" className="size-10 stroke-black dark:stroke-purple-400" />,
    "Puzzle": <PuzzlePieceIcon aria-hidden="true" className="size-10 stroke-black dark:stroke-purple-400" />, 
}

function HomePageCard(props: any) {
    return (
        <article
            className="rounded-lg border border-gray-10 bg-white dark:bg-transparent p-4 shadow-xs transition hover:shadow-lg sm:p-6"
        >
            <div className="flex flex-row items-center gap-2">
                {IconMap[props.icon]}
                <p className="line-clamp-3 text-md/relaxed text-black dark:text-white font-bold">{props.title}</p>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-400">
                {props.subtitle}
            </p>
            <ul className="w-full mt-2 list-disc pl-6 marker:text-blue-500">
                {props.content.map((item:any) => 
                 <li>
                    <p className="line-clamp-3 text-sm/relaxed text-black dark:text-white font-bold-100">{item.heading}</p>
                    <p className="line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-400">{item.desc}</p>
                 </li>
                
                )}
            </ul>

        </article>

    )
}

export default HomePageCard