'use client'

import { ReactNode } from 'react'

type ProfileMenuProps = {
  key: string
  title: string
  icon: ReactNode
}
const profileMenus: ProfileMenuProps[] = [
  {
    key: 'Profile',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    title: 'Profile'
  }
]
export const ProfileMenu = () => {
  return (
    <ul role="list">
      {profileMenus.map((profile) => {
        return (
          <li key={profile.key} className="group/item hover:bg-slate-100 ...">
            {profile.icon}
            <div>
              <p>{profile.title}</p>
            </div>
            <a
              className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
              href="tel:{person.phone}"
            >
              <span className="group-hover/edit:text-gray-700 ...">Call</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
