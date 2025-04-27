# React TypeScript Learning Project

> **Note**: This project is created by a ReactJS learner for other beginners. It's a starter version that will be completed during the formation. While I'm not a ReactJS expert, this project demonstrates basic concepts and patterns that are essential for getting started with React development. The project will evolve as we learn more about ReactJS with TypeScript.

## Tech Stack

- **React** - Frontend library
- **TypeScript** - For type safety and better development experience
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library for TailwindCSS

## Project Structure

The project is organized into separate components:

- `Navbar` - Top navigation bar with search and basket functionality
- `Sidebar` - Side navigation menu with responsive design
- `Main` - Main content area
- `Footer` - Bottom section of the page
- `Basket` - Shopping cart component with modal
- `SearchBar` - Search input component

## Features

- Responsive design (mobile and desktop layouts)
- Component-based architecture
- TypeScript integration
- Modern UI with DaisyUI components
- Mobile-first approach
- Interactive sidebar with toggle functionality
- Shopping cart with modal view
- Search functionality

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Setup

This project was created using Vite with the following steps:

1. Create a new Vite project:

   ```bash
   npm create vite@latest [Name of the app] -- --template react-ts
   ```

2. Install TailwindCSS and DaisyUI:

   ```bash
   npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
   ```

3. Configure Vite to use TailwindCSS in `vite.config.js`:

   ```js
   import { defineConfig } from "vite";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [tailwindcss()],
   });
   ```

4. Add TailwindCSS and DaisyUI to your CSS file (`src/style.css`):
   ```css
   @import "tailwindcss";
   @plugin "daisyui";
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── Main.tsx
│   ├── Footer.tsx
│   ├── Basket.tsx
│   └── SearchBar.tsx
├── App.tsx
└── main.tsx
```

## Contributing

Feel free to use this project as a learning resource or starting point for your own React TypeScript applications.

## License

This project is open source and available under the MIT License.
