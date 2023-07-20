import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header';
import Title from '@/components/Title';

export const metadata = {
  title: 'Jova Software',
  description: 'Jasa Pembuatan Website dan Aplikasi di Batam - Jovasoftware',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Title />
        {children}
        <Footer />
      </body>
    </html>
  )
}
