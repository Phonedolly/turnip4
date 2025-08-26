# Google Search Console Setup Guide

This document explains how to register your Next.js blog with Google Search Console.

## 1. Environment Variables Setup

Create a `.env.local` file in your project root and add the following content:

```bash
# Site URL (change to your actual domain)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Google Analytics Measurement ID (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 2. Google Search Console Registration

### 2.1 Access Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account

### 2.2 Add New Property
1. Click "Add Property" button
2. Choose Domain or URL prefix
   - **Domain**: `yourdomain.com` (recommended)
   - **URL prefix**: `https://yourdomain.com`

### 2.3 Ownership Verification
Verify ownership using one of the following methods:

#### Method 1: HTML File Upload (Recommended)
1. Download the HTML file provided by Search Console
2. Upload it to the `public/` folder
3. Verify it's accessible on your site
4. Click "Verify" button

#### Method 2: HTML Tag
1. Copy the meta tag provided by Search Console
2. Add it to the `<head>` section of `app/layout.tsx`

#### Method 3: DNS Record
1. Copy the TXT record provided by Search Console
2. Add it to your domain provider's DNS settings

## 3. Sitemap Submission

### 3.1 Verify Sitemap
Check if the sitemap is generated correctly:
```
https://yourdomain.com/sitemap.xml
```

### 3.2 Submit Sitemap to Search Console
1. In Search Console, select "Sitemaps" menu
2. Click "Add new sitemap"
3. Enter `sitemap.xml` and submit

## 4. Google Analytics Integration (Optional)

### 4.1 Create Analytics Account
1. Create an account at [Google Analytics](https://analytics.google.com/)
2. Copy the Measurement ID (G-XXXXXXXXXX)

### 4.2 Add to Environment Variables
Add the Measurement ID to your `.env.local` file:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4.3 Link with Search Console
1. In Search Console, go to "Settings" → "Connections"
2. Connect your Google Analytics account

## 5. Verification and Monitoring

### 5.1 Indexing Request
1. Use the "URL Inspection" tool in Search Console
2. Enter main page URLs and request indexing

### 5.2 Performance Monitoring
- **Search Performance**: Clicks, impressions, CTR, etc.
- **Indexing**: Number of indexed pages
- **Core Web Vitals**: Core Web Vitals performance

## 6. Troubleshooting

### 6.1 Sitemap Errors
- Check `.next/server/app/sitemap.xml` file after build
- Verify environment variable `NEXT_PUBLIC_SITE_URL` is set

### 6.2 Indexing Issues
- Check robots.txt settings
- Verify page accessibility
- Check meta tags and structured data

## 7. Useful Tools

- [Google PageSpeed Insights](https://pagespeed.web.dev/): Page performance analysis
- [Google Rich Results Test](https://search.google.com/test/rich-results): Structured data testing
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly): Mobile optimization testing

## 8. Regular Maintenance

- Check sitemap updates monthly
- Review search performance reports
- Monitor indexing status
- Improve Core Web Vitals performance

---

**Note**: This setup is based on Next.js 15 and App Router.
