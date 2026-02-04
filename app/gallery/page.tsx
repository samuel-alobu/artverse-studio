"use client"

import React from 'react'
import UploadForm from '../components/UploadForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';


export async function page() {
    const session = await getServerSession(authOptions)
  return (
    <div>
      <UploadForm user={session?.user} expires={session?.expires as string} />
    </div>
  )
}
