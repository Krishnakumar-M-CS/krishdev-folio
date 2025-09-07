# Krishnakumar M. - Portfolio Website

A modern, clean, and responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Smooth Scrolling**: Seamless navigation between sections
- **Modern UI**: Clean design with subtle animations and shadows
- **Performance Optimized**: Lazy loading images and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📱 Sections

1. **Hero Section** - Introduction with profile picture and call-to-action
2. **About Me** - Professional bio and background
3. **Skills** - Technical skills and technologies
4. **Projects** - Showcase of 4 key projects with links
5. **Resume** - Download section for CV/Resume
6. **Contact** - Email and social media links
7. **Footer** - Copyright information

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

## 🏃‍♂️ Running Locally

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the portfolio

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Follow the prompts** to complete deployment

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify via their web interface or CLI

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script** to package.json:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   └── portfolio/          # Portfolio-specific components
│       ├── Header.tsx      # Navigation header
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills section
│       ├── Projects.tsx    # Projects section
│       ├── Resume.tsx      # Resume section
│       ├── Contact.tsx     # Contact section
│       └── Footer.tsx      # Footer
├── pages/
│   ├── Index.tsx          # Main portfolio page
│   ├── Portfolio.tsx      # Portfolio layout
│   └── NotFound.tsx       # 404 page
├── assets/                # Images and static assets
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── styles/
    └── index.css          # Global styles and design tokens
```

## 🎨 Customization

### Colors and Theming

The design system is defined in `src/index.css`. Key color variables:

- `--primary`: Teal accent color (HSL: 179, 85%, 36%)
- `--navy`: Dark navy for text (HSL: 215, 86%, 14%)
- `--background`: Dynamic background (light/dark)

### Content Updates

1. **Personal Information**: Update content in each component file
2. **Projects**: Modify the projects array in `Projects.tsx`
3. **Skills**: Update the skills array in `Skills.tsx`
4. **Profile Image**: Replace `src/assets/profile.jpg`
5. **Resume**: Add your resume PDF to `public/assets/resume.pdf`

### Adding New Sections

1. Create a new component in `src/components/portfolio/`
2. Import and add it to `src/pages/Portfolio.tsx`
3. Update navigation in `src/components/portfolio/Header.tsx`

## 🔧 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Add any environment variables here
# VITE_API_URL=your-api-url
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues-url).

## 📧 Contact

Krishnakumar M. - [krish@example.com](mailto:krish@example.com)

Project Link: [Repository URL]

---

⭐ Star this repo if you find it helpful!