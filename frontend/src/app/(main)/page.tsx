import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Link className='text-indigo-500 underline' href={'/admin-panel/dashboard'}>
        پنل ادمین
      </Link>
    </div>
  )
}
