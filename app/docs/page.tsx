import { redirect } from 'next/navigation'
import React from 'react'

export default function DocsHome () {
    redirect('/docs/getting-started')
}