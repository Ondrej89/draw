import { nanoid } from 'nanoid'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import ThemeMenuButton from '@/components/ThemeMenuButton'
import CreateRoomForm from '@/components/CreateRoomForm'
import JoinRoomButtoon from '@/components/JoinRoomButton'
import { Button } from '@/components/ui/Button'

export const dynamic = 'force-dynamic'

export default function Home() {
  const roomId = nanoid()

  return (
    <div className='flex h-screen flex-col items-center justify-between pb-5 pt-[13vh]'>
      <ThemeMenuButton className='fixed right-[5vw] top-5 flex-1 md:right-5' />

      <Card className='w-[90vw] max-w-[400px]'>
        <CardHeader>
          <CardTitle>Blackboard</CardTitle>
          <CardDescription>
            Write in your classroom in real-time.
          </CardDescription>
        </CardHeader>

        <CardContent className='flex flex-col space-y-4'>
          <CreateRoomForm roomId={roomId} />

          <div className='flex items-center space-x-2 '>
            <Separator />
            <span className='text-xs text-muted-foreground'>OR</span>
            <Separator />
          </div>

          <JoinRoomButtoon />
        </CardContent>
      </Card>

      <div>
        <p className='text-sm text-muted-foreground'>
          Made by{' '}
          <a>
            LoneWolf
          </a>
          
          .
        </p>
      </div>
    </div>
  )
}
