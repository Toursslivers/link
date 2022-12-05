import { Composer } from 'components'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello, Next.js!
        <Link href="/web">213</Link>
      </h1>
    </div>
  )
}
