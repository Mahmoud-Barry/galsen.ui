"use client"
import React from 'react'
import PostPreview from './PostPreview'

function removeHTMLExtension(file: string) {
  return file.split('.html').shift() as string;
}

// PERF: use better names for these props (specially `titles`)
const RenderHTMLFiles = ({ files, componentSlug, components }: { components: Record<number, { title: string }>; files: string[], componentSlug: string }) => {

  return (
    <div className="mt-8 space-y-12">
      {files.map((file) => {
        const title = components[removeHTMLExtension(file) as unknown as number].title

        return (
          <PostPreview key={file} file={file} title={title} componentSlug={componentSlug} />
        )
      })}
    </div>
  )
}

export default RenderHTMLFiles
