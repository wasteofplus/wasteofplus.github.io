import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import React from 'react'
export default function App() {
    console.log(path.resolve('pages'))
    const files = fs.readdirSync(path.resolve('app/docs/pages'))
  const posts = files.map((filename : any) => {
    const markdownWithMeta = fs.readFileSync(path.resolve('app/docs/pages', filename), 'utf-8')
    console.log('front matter', matter(markdownWithMeta))
    const { data: frontMatter } = matter(markdownWithMeta)
    console.log('slug is', filename.split('.')[0])
    console.log('slug is', frontMatter.title)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
    return (
        <>
        {posts.map((post, index) => (
            <Link href={'/blog/' + post.slug} passHref key={index}>
              <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{post.frontMatter.title}</h5>
                      <p className="card-text">{post.frontMatter.description}</p>
                      <p className="card-text">
                        <small className="text-muted">{post.frontMatter.date}</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 m-auto">
                    <Image
                      src={post.frontMatter.thumbnailUrl}
                      className="img-fluid mt-1 rounded-start"
                      alt="thumbnail"
                      width={500}
                      height={400}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </>
    )
}