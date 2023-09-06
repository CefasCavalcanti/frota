import { forwardRef } from 'react'

interface FancyButtonProps {
  children?: React.ReactNode
  fooBar?: string // my custom prop
}

export const FancyButton = forwardRef<HTMLButtonElement, FancyButtonProps>(
  (props, ref) => (
    <button type="button" ref={ref} className="bg-red-600 ">
      {props.children}
      {props.fooBar}
    </button>
  )
)

FancyButton.displayName = 'FancyButton'
