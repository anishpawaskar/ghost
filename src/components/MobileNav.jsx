import React from 'react'
import { SiteNavigation } from './SiteNavigation'

export const MobileNav = ({ setSiteNav }) => {
  return (
    <div className='mobile-nav'>
        <SiteNavigation setSiteNav = {setSiteNav} />
    </div>
  )
}
