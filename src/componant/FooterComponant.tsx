import SocialLinks from './SocialLinks'

function FooterComponant() {
    return (
        <footer className="bg-background">
            <div className="border-t-1 border-border text-foreground pt-8 pb-4 px-5 sm:px-20 xl:px-52">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-2">
                            <div><h2 className="text-xl font-bold">Kapil Keshav Khursade</h2>
                                <div className="flex gap-2 items-center">
                                    {/* <image alt="Algerian Flag" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" style="color:transparent" src="/algeria.svg"> */}
                                    <p className="text-gray-700 dark:text-gray-400">Based In Pune, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <p className="text-gray-700 dark:text-gray-400 max-w-md">Website Designed in Figma. Built with Next.js, Typescript and Tailwind CSS.</p>
                    </div>
                </div>
            </div>
            <div className="text-foreground pb-6 px-5 sm:px-20 xl:px-52">
                <div className="mx-auto flex justify-between items-center">
                    <p className="text-xs sm:text-sm">© 2024 Kapil. All rights are reserved.</p>
                    <div className="flex items-center gap-8 text-xl text-gray-700 dark:text-gray-500">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponant