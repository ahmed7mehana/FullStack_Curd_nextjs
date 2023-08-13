/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#bcf4f4",
                    
            "secondary": "#34b21e",
                    
            "accent": "#e58714",
                    
            "neutral": "#2c1b2d",
                    
            "base-100": "#e8e6ea",
                    
            "info": "#74d6f6",
                    
            "success": "#61eaa3",
                    
            "warning": "#f3db72",
                    
            "error": "#eb1940",
        },
      },
    ],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
