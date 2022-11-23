import React, { useEffect } from 'react'
import { loadCSS } from 'fg-loadcss'
import { useColorMode } from '@docusaurus/theme-common'
import Icon from '@mui/material/Icon'

const socialDetails = [
  {
    name: 'linkedin',
    classname: 'fab fa-linkedin fa-fw',
    link: 'https://www.linkedin.com/in/%E9%8F%A1%E6%BA%8F-%E7%8E%8B-a20400222/',
  },
  {
    name: 'github',
    classname: 'fab fa-github fa-fw',
    link: 'https://github.com/nico1aseth',
  },
]

const getHoverIconColor = (site: string): string => {
  switch (site) {
    case 'linkedin':
      return '#0a66c2'
    case 'github':
      return 'purple'
    default:
      return 'blue'
  }
}

export const Socials = () => {
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChilde(node)
      }
    }
  }, [])

  return (
    <div>
      {socialDetails.map((cn) => {
        return (
          <a
            href={cn.link}
            target='_blank'
            rel='noopener noreferrer'
            key={cn.classname}
          >
            <Icon
              className={cn.classname}
              sx={{
                color: colorMode === 'dark' ? 'on' : 'off',
                fontSize: 30,
                marginTop: 1,
                marginRight: 1,
                '&:hover': {
                  color: `${getHoverIconColor(cn.name)}`,
                },
              }}
            />
          </a>
        )
      })}
    </div>
  )
}
