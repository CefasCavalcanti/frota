'use client'
import useSidbar from '@/app/hooks/useSidebar'
export const ResposiveLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const sidebar = useSidbar()
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedule ', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Setting', src: 'Setting' }
  ]
  return (
    <div className="flex ">
      <div
        onMouseOver={() => sidebar.onOpen()}
        onMouseOut={() => sidebar.onClose()}
        className={`bg-cyan-900 ${
          sidebar.isOpen ? 'w-72' : 'w-20 '
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!sidebar.isOpen && 'rotate-180'}`}
          onClick={
            sidebar.isOpen ? () => sidebar.onClose() : () => sidebar.onOpen()
          }
        />
        <div className="flex gap-x-4 items-cente ">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              sidebar.isOpen && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !sidebar.isOpen && 'scale-0'
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}
            >
              <span
                className={`${
                  !sidebar.isOpen && 'hidden'
                } origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1">{children}</div>
    </div>
  )
}
