'use client'

import { Popover } from "radix-ui"


export default function Page() {
  return (
    <div>
      <p>This is the home page!</p>
    <Popover.Root>
      {/* button to click on to make the popover to show up */}
        <Popover.Trigger className="PopoverTrigger text-black">More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={200} className="PopoverContent bg-red-500">
            Some more info…
            <Popover.Arrow className="PopoverArrow bg-blue-500" />
          </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
    </div>
  )
}