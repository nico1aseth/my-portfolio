import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '..//components/HomepageFeatures'

import styles from './index.module.css'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Socials } from '../components/Socials'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <Box sx={{ display: 'flex' }}>
          <Box m='auto'>
            <Avatar
              alt='Nicolas Wang'
              src={useBaseUrl('/img/dog.png')}
              sx={{ width: 150, height: 150, m: 2 }}
            />
          </Box>
        </Box>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <Socials />
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout title='Home' description='Blog of Nicolas Wang'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
