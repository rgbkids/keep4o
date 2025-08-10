import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { IconUser } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Are you GPT-4',
    message: 'and what are your capabilities?'
  },
  {
    heading: 'Plan a trip',
    message: 'to see the best of New York in 3 days'
  },
  {
    heading: 'Tell me a fun fact',
    message: 'about the Golden State Warriors'
  },
  {
    heading: 'Tell me a fun fact',
    message: 'about the Roman Empire'
  }
]

export function EmptyScreen({ setInput, append }: Pick<UseChatHelpers, 'setInput' | 'append'>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8">
      <div className="text-center mb-8">
        <div className="p-8 rounded-full flex items-center justify-center">
          <IconUser />
        </div>
        
        <h1 className="text-2xl font-medium mb-12">
          How can I help you today?
        </h1>
      </div>

      <div className="w-full max-w-2xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-4 text-left justify-start rounded-lg border border-gray-600/50 hover:border-gray-500 transition-all duration-200"
              onClick={() => {
                const fullMessage = `${message.heading} ${message.message}`
                append({ role: 'user', content: fullMessage })
              }}
            >
              <div className="flex flex-col w-full text-left">
                <div className="font-medium mb-1 text-sm">
                  {message.heading}
                </div>
                <div className="text-sm">
                  {message.message}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
