import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function ModeDropdown() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const storedMode = localStorage.getItem('kapil_portfolio_theme') || mode
    document.documentElement.setAttribute("data-theme", storedMode);
    setMode(storedMode)
  }, [mode])

  const handleModeChange = (modevar: string) => {
    setMode(modevar)
    document.documentElement.setAttribute("data-theme", modevar);
    localStorage.setItem('kapil_portfolio_theme', modevar)
  }

  const ModeItemsButton = ({modeVar}: any) => {
    return (
      <MenuItem>
        <button
          onClick={() => handleModeChange(modeVar.toLocaleLowerCase())}
          className="block px-4 py-2 text-sm text-gray-300 data-focus:w-full data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
        >
          {modeVar}
        </button>
      </MenuItem>
    )
  }

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-white/10">
        {mode==='dark' ? <MoonIcon aria-hidden="true" className="size-6 stroke-white" /> :
          <SunIcon aria-hidden="true" className="stroke-black size-6" />}
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-25 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
            <ModeItemsButton modeVar={'Dark'}/>
            <ModeItemsButton modeVar={'Light'}/>
            {/* <ModeItemsButton modeVar={'System'}/> */}
        </div>
      </MenuItems>
    </Menu>
  )
}
