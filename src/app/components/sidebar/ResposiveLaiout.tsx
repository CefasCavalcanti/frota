'use client'
import useSidbar from '@/app/hooks/useSidebar'
import { MdOutlineSpeed, MdPerson, MdBarChart } from 'react-icons/md'
import {
  FaClipboardCheck,
  FaTools,
  FaTruck,
  FaStore,
  FaBell,
  FaQuestionCircle
} from 'react-icons/fa'
import { BsFuelPumpFill } from 'react-icons/bs'
import { IconType } from 'react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export const ResposiveLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  console.log(pathname)
  const sidebar = useSidbar()
  const Menus: {
    title: string
    src: string
    icon: IconType
    gap?: boolean
    activate: boolean
    router: string
  }[] = [
    {
      title: 'Dashboard',
      src: 'Chart_fill',
      icon: MdOutlineSpeed,
      activate: false,
      router: '/asset'
    },
    {
      title: 'Inspections',
      src: 'Chat',
      icon: FaClipboardCheck,
      activate: false,
      router: '/asset'
    },
    {
      title: 'Maintenance',
      src: 'User',
      gap: true,
      icon: FaTools,
      activate: false,
      router: '/asset'
    },

    {
      title: 'Assets ',
      src: 'Calendar',
      icon: FaTruck,
      activate: pathname.includes('/asset'),
      router: '/asset'
    },
    {
      title: 'Vendors',
      src: 'Search',
      icon: FaStore,
      activate: false,
      router: '/asset'
    },
    {
      title: 'Fuel',
      src: 'Chart',
      icon: BsFuelPumpFill,
      activate: false,
      router: '/asset'
    },
    {
      title: 'Reminders ',
      src: 'Folder',
      gap: true,
      icon: FaBell,
      activate: false,
      router: '/asset'
    },
    {
      title: 'People',
      src: 'Setting',
      icon: MdPerson,
      activate: false,
      router: '/asset'
    },
    {
      title: 'Reports',
      src: 'Setting',
      icon: MdBarChart,
      activate: false,
      router: '/asset'
    },
    {
      title: 'Heupe & suport',
      src: 'Setting',
      icon: FaQuestionCircle,
      activate: false,
      router: '/asset'
    }
  ]
  return (
    <div className=" ">
      <div className="fixed h-screen bg-sky-950 p-3 overflow-y-auto overflow-x-hidden z-50 pt-8">
        <div
          onMouseOver={() => sidebar.onOpen()}
          onMouseOut={() => sidebar.onClose()}
          className={` ${
            sidebar.isOpen ? 'w-60' : 'w-14'
          } bg-dark-purple duration-150 justify-cente`}
        >
          {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!sidebar.isOpen && 'rotate-180'}`}
          onClick={
            sidebar.isOpen ? () => sidebar.onClose() : () => sidebar.onOpen()
          }
        /> */}
          <div
            className={`flex  gap-4 items-center  duration-300${
              sidebar.isOpen ?? 'justify-center '
            }  `}
          >
            <Image
              src="/logo.png"
              className={'object-contain '}
              width={50}
              height={50}
              alt={'log 4°GB'}
            />
            <h1
              className={`text-white block font-medium w-0  text-xl ease-in-out  duration-300 ${
                !sidebar.isOpen && 'scale-0'
              }`}
            >
              Designer
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <Link href={Menu.router} key={index}>
                <li
                  className={`flex  rounded-md p-2 
             cursor-pointer hover:bg-sky-800 text-sm  items-center gap-x-4 
          ${Menu.gap ? 'mt-9' : 'mt-2'} ${
            Menu.activate ? 'text-white bg-sky-800' : 'text-cyan-400 '
          } `}
                >
                  <div className="flex flex-row gap-3">
                    <Menu.icon className="font-thin origin-left " size={20} />
                    <span
                      className={`${
                        !sidebar.isOpen && 'hidden'
                      } origin-left duration-300 truncate font-bold`}
                    >
                      {Menu.title}
                    </span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="pl-20">{children}</div>
    </div>
  )
}
