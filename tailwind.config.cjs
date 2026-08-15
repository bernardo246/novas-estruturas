module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        brand: 'var(--brand-blue)',
        ink: 'var(--brand-black)'
      }
    }
  },
  plugins: []
}
