import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://polish-tutor-online.vercel.app'),
  title: 'Online Polish Language Teacher',
  description: 'Polish Language Teacher and Polish Language Tutor Online',
  openGraph: {
    title: 'Online Polish Language Teacher',
    description: 'Polish Language Teacher and Polish Language Tutor Online',
    url: 'https://polish-tutor-online.vercel.app',
    site_name: 'Polish Tutor Online',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 800,
        height: 600,
        alt: 'Polish Tutor Online Logo',
      },
    ],
    locale: 'en_US',
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head></head>
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
