import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'
import Date from 'components/date'
import { GetStaticProps } from 'next'

// [Components]
import HeadContent from 'components/layouts/HeadContent'
import { siteMetadata } from 'utils'
import { Base } from 'components/layouts'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <>
      <HeadContent
        title='Home Page'
        description='This is the Home Page'
        canonicalUrl={`${siteMetadata.siteUrl}/`}
      />
      <Base>
        <section className=''>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this in{' '}
            <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
          </p>
        </section>
        <section className=''>
          <h2 className=''>Blog</h2>
          <ul className=''>
            {allPostsData.map(({ id, date, title }) => (
              <li className='' key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className=''>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Base>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
