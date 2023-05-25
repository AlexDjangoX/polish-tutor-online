export default async function sitemap() {
  const routes = [
    {
      url: `https://polish-tutor-online-blog.vercel.app/`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...routes];
}
