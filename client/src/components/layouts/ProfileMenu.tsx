import React from 'react'
import { useClickAway } from 'react-use'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Avatar, OpenMenu } from 'components/icons'
// [Styles]
import { Menu, MenuSelector, Tab } from 'styles/layouts/ProfileMenu'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
}

const ProfileMenu: React.FC<Props> = ({ children }) => {
  const { getStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))
  const [showMenu, setShowMenu] = React.useState(false)
  const [focus, setFocus] = React.useState(false)

  const profileMenuRef = React.useRef(null)

  useClickAway(profileMenuRef, () => {
    setShowMenu(false)
    setFocus(false)
  })

  const toggleMenu = (e: any) => {
    setShowMenu(!showMenu)
    setFocus(!focus)
  }

  const keyPressToggleMenu = () => {
    setFocus(false)
    setShowMenu(false)
  }

  React.useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        keyPressToggleMenu()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [user])

  return (
    <div ref={profileMenuRef}>
      <MenuSelector onClick={toggleMenu}>
        {user ? (
          <>
            <OpenMenu open={showMenu} />
            <Avatar size='sm' />
          </>
        ) : (
          <OpenMenu open={showMenu} />
        )}
      </MenuSelector>
      <Menu isVisible={showMenu}>
        <Tab></Tab>
        {children}
      </Menu>
    </div>
  )
}

export default ProfileMenu
