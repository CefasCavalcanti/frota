import PopoverDemo from './NavigationMenu'
export const NavBar = () => (
  <div className="w-full text-gray-700 bg-orange-400 dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow-md">
    <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="p-4 flex flex-row items-center justify-between">
        Bem vindo de volta cefas
      </div>
      <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
        <PopoverDemo />
      </nav>
    </div>
  </div>
)
