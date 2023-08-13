import './globals.css'

export const metadata = {
  title: 'Full stack Curd',
  description: ' by next 13 js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[#635985]'>
      <body >
        
      <main className='max-w-screen-md m-auto ' >
       {children}
       </main>
        
        </body>
    </html>
  )
}
