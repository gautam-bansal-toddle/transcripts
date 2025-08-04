# @gautam-bansal-toddle/transcripts

A React component library built with TypeScript, providing reusable UI components for Toddle applications.

## Overview

This is a component library that exports React components with TypeScript support and CSS modules. The library is designed to be consumed by other projects in the Toddle ecosystem, including web applications and PDF generation services.

## Features

- **TypeScript Support**: Full TypeScript definitions and type safety
- **CSS Modules**: Scoped styling with SCSS support
- **React Components**: Reusable UI components
- **Multiple Output Formats**: CommonJS, ES Modules, and UMD builds
- **Development Workflow**: Hot reload support for local development

## Installation

```bash
npm install @gautam-bansal-toddle/transcripts
```

## Usage

### Importing Components

```tsx
import { Button } from "@gautam-bansal-toddle/transcripts";
import "@gautam-bansal-toddle/transcripts/styles.css";

function App() {
  return (
    <div>
      <Button />
    </div>
  );
}
```

### Available Components

- **Button**: A basic button component with custom styling

## Development

### Prerequisites

- Node.js (>=16.8.0)
- React (>=16.8.0) as peer dependency

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

- `npm run build` - Build the library for production
- `npm run watch:web` - Watch mode for web application development
- `npm run watch:pdf` - Watch mode for PDF generation service development

### Project Structure

```
src/
├── index.ts              # Main entry point
├── declarations.d.ts     # TypeScript declarations
└── components/
    ├── index.ts          # Component exports
    └── Button/
        ├── Button.tsx    # Button component
        ├── Button.scss   # Button styles
        └── index.ts      # Button exports

build/                    # Compiled output
├── index.js             # CommonJS build
├── index.es.js          # ES Modules build
├── index.d.ts           # TypeScript definitions
└── styles.css           # Compiled CSS
```

### Build System

The project uses **Rollup** as the build system with the following plugins:

- **TypeScript**: Compiles TypeScript to JavaScript
- **PostCSS**: Processes SCSS files and creates CSS modules
- **Peer Dependencies External**: Excludes React from the bundle
- **Node Resolve & CommonJS**: Handles module resolution

### Development Workflow

The library supports hot reloading during development. When running in watch mode, built files are automatically copied to consuming projects:

- **Web App**: `/Users/gautambansal/Coding/Toddle/web-app`
- **PDF Generator**: `/Users/gautambansal/Coding/Toddle/pdf-gen`

Use the appropriate watch command based on your target project:

```bash
# For web application development
npm run watch:web

# For PDF generation service development
npm run watch:pdf
```

## Package Exports

The library provides multiple export formats:

```json
{
  ".": {
    "types": "./build/index.d.ts",
    "require": "./build/index.js",
    "import": "./build/index.es.js"
  },
  "./styles.css": "./build/styles.css"
}
```

## Technology Stack

- **React**: UI library
- **TypeScript**: Type safety and development experience
- **SCSS**: Styling with CSS modules
- **Rollup**: Build system and bundler
- **PostCSS**: CSS processing and optimization

## Contributing

1. Add new components in `src/components/`
2. Export them from `src/components/index.ts`
3. Include proper TypeScript types
4. Add SCSS modules for styling
5. Test the component in the consuming applications using watch mode

## License

ISC
