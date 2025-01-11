import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageFooter, PageHeader } from '@/utils/components'

const App = () => {
  return (
    <div>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </div>
  )
}

export default App