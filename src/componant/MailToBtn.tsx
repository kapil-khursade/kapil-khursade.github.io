import { AtSymbolIcon } from "@heroicons/react/24/outline";

function MailToBtn() {
    return (
        <a target="_blank" href="mailto:kapilkhursade.210@gmail.com"
            className='gap-2 border-black dark:border-white border rounded-md inline-flex items-center justify-center py-1 px-3 text-center text-base font-medium text-black dark:text-white hover:bg-white/10 dark:hover:bg-white/10 cursor-pointer'>
            <AtSymbolIcon aria-hidden="true" className="size-4 stroke-black dark:stroke-white" /> E-Mail Me
        </a>
    )
}

export default MailToBtn