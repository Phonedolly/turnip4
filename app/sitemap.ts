import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // Dynamically generate URLs for all markdown files in posts directory
  const postsDirectory = path.join(process.cwd(), 'posts')
  const postUrls: MetadataRoute.Sitemap = []

  function getPostUrls(dir: string, basePath: string = ''): void {
    if (!fs.existsSync(dir)) return
    
    const items = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
      if (item.name.startsWith('.') || item.name === '.obsidian') {
        continue
      }
      
      const fullPath = path.join(dir, item.name)
      
      if (item.isDirectory()) {
        // Recursively explore directories
        getPostUrls(fullPath, path.join(basePath, item.name))
      } else if (item.isFile() && (item.name.endsWith('.md') || item.name.endsWith('.mdx'))) {
        // For markdown files
        const relativePath = path.join(basePath, item.name)
        const postId = relativePath.replace(/\.(md|mdx)$/, '')
        
        try {
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data } = matter(fileContents)
          
          // Extract date information from frontmatter
          let lastModified = new Date()
          if (data.date) {
            lastModified = new Date(data.date)
          } else if (data.lastmod) {
            lastModified = new Date(data.lastmod)
          } else {
            // Use file modification time
            const stats = fs.statSync(fullPath)
            lastModified = stats.mtime
          }

          postUrls.push({
            url: `${baseUrl}/post/${postId}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
          })
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error)
        }
      }
    }
  }

  // Generate all post URLs from posts directory
  getPostUrls(postsDirectory)

  return [...staticPages, ...postUrls]
}
