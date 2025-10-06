import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

function ResumeBtn() {
    return (
        <a target="_blank" href="https://raw.githubusercontent.com/kapil-khursade/kapil-khursade.github.io/refs/heads/master/src/assets/resume.pdf"
            className='gap-2 border-black dark:border-white border rounded-md inline-flex items-center justify-center py-1 px-3 text-center text-base font-medium text-black dark:text-white hover:bg-white/10 dark:hover:bg-white/10 cursor-pointer'>
            <CodeBracketSquareIcon aria-hidden="true" className="size-6 stroke-black dark:stroke-white" /> Resume
        </a>
    )
}

export default ResumeBtn