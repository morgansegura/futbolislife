import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { ProfileMenu, RoleGuardLayout } from 'components/layouts'
import { paths } from 'components/config/PathConfig'
// [Styles]
import { ProfileNavItem } from 'styles/layouts/ProfileMenu'
import { alertService, authService } from 'api'
import { ToggleColorMode } from 'components/providers'

type NavLinksProps = {}

const NavLinks: React.FC<NavLinksProps> = () => {
  const router = useRouter()
  const { getStorage, setStorage, removeStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))
  const [theme, setTheme] = React.useState(getStorage('theme') || 'light')

  type LinkType = {
    path: string
    label: string
    title: string
    level: string
  }

  const { base, account, admin, auth } = paths

  const isActive = (route: string) => {
    return router.pathname === route
  }

  const signout = () => {
    authService.signout()
    router.push(`${auth.signin.path}`)
    setUser(false)
    removeStorage('user')
    alertService.success(`👍🏽  &nbsp Catch you later!`, {
      keepAfterRouteChange: true
    })
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setStorage('theme', 'dark')
    } else {
      setTheme('light')
      setStorage('theme', 'light')
    }
    router.reload()
  }

  return (
    <>
      <ProfileMenu>
        <RoleGuardLayout level='guest'>
          <>
            {console.log({ paths })}
            {!isActive(`${base.landing.path}`) && (
              <Link href={base.landing.path}>
                <a>
                  <ProfileNavItem>{base.landing.label}</ProfileNavItem>
                </a>
              </Link>
            )}

            {!isActive(`${auth.signin.path}`) && (
              <Link href={`${auth.signin.path}`}>
                <a>
                  <ProfileNavItem>{auth.signin.label}</ProfileNavItem>
                </a>
              </Link>
            )}

            {!isActive(`${auth.register.path}`) && (
              <Link href={auth.register.path}>
                <a>
                  <ProfileNavItem>{auth.register.label}</ProfileNavItem>
                </a>
              </Link>
            )}
            {/* Admin Links */}
            <hr />
            {Object.keys(admin).map((key, { label, path, title }: LinkType) => (
              <Link data-title={admin[key].title} href={admin[key].path}>
                <a>
                  <ProfileNavItem>{admin[key].label}</ProfileNavItem>
                </a>
              </Link>
            ))}
          </>
        </RoleGuardLayout>
        <RoleGuardLayout level='member'>
          <Link href={account.dashboard.path}>
            <a>
              <ProfileNavItem>{account.dashboard.label}</ProfileNavItem>
            </a>
          </Link>
          <Link href={account.profile.path}>
            <a>
              <ProfileNavItem>{account.profile.label}</ProfileNavItem>
            </a>
          </Link>
        </RoleGuardLayout>
        <ToggleColorMode />
        {user ? <ProfileNavItem onClick={signout}>Signout</ProfileNavItem> : ``}
      </ProfileMenu>
    </>
  )
}

type NavigationProps = {}

const Navigation: React.FC<NavigationProps> = () => {
  return <NavLinks />
}

export default Navigation
