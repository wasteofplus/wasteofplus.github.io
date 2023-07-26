import { redirect } from 'next/navigation'

export default function DocsHome () {
    redirect('/docs/getting-started')
    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    )
}