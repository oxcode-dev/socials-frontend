import { ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

export const Logo = () => {
    return (
        <div className="inline-flex space-x-2 items-center text-gray-600">
            <div>
                <ChatBubbleLeftRightIcon className="size-8" />
            </div>
            <div className="text-lg font-semibold">
                <p>SOCIALS</p>
            </div>
        </div>
    )
}

