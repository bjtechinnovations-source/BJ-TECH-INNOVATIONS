// generate-sitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const { Readable } = require('stream');

// 1. Aapki Website Ke Sabhi URLs
const links = [
  { url: '/',  priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.8, changefreq: 'monthly' },
  { url: '/courses', priority: 0.8, changefreq: 'monthly' },
  { url: '/full-stack-development', priority: 0.8, changefreq: 'monthly' },
  { url: '/digital-marketing', priority: 0.8, changefreq: 'monthly' },
  { url: '/contact', priority: 0.6, changefreq: 'yearly' },
];

async function generateSitemap() {
    // 2. Streams se Sitemap banaayein
    const stream = new SitemapStream({ 
        hostname: 'https://bjtechinnovations.com/' 
    });

    const sitemapPromise = streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    const xml = await sitemapPromise;

    // 3. Sitemap File Ko 'public' Folder mein Save Karein (Yahi Zaroori Badlav Hai)
    // Yeh file ab seedhe public folder mein likhi jaayegi.
    const path = './public/sitemap.xml'; 

    fs.writeFileSync(path, xml);

    console.log(`Sitemap successfully generated at ${path}`);
}

generateSitemap();