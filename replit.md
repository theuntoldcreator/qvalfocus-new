# Overview

TalentForge is a premium staffing and consulting services website built with modern web technologies. The application serves as a comprehensive platform for connecting exceptional talent with visionary companies through strategic staffing, consulting services, and managed services. The site features a sophisticated, image-heavy design with smooth animations and glassmorphism effects, targeting technology, financial services, healthcare, retail, manufacturing, and public sector industries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring glassmorphism effects
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interfaces
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Theme System**: Dark/light mode support with CSS variables for dynamic theming

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for cloud-native data storage
- **API Design**: RESTful endpoints with proper error handling and request logging
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **Development**: Hot module replacement with Vite middleware integration

## Data Layer
- **Schema Design**: Comprehensive database schema covering:
  - User management and authentication
  - Job postings with detailed filtering capabilities
  - Job applications with file upload support
  - Contact forms for client and candidate inquiries
  - Newsletter subscriptions
  - Case studies for showcasing success stories
- **Type Safety**: Drizzle-Zod integration for runtime validation and TypeScript inference
- **Migrations**: Drizzle Kit for database schema migrations and management

## Key Features
- **Multi-Service Platform**: Staffing, consulting, and managed services with dedicated pages
- **Industry Specialization**: Targeted content for six major industry verticals
- **Job Portal**: Advanced job search with filtering, application system, and featured listings
- **Case Studies**: Success story showcase with rich media content
- **Contact System**: Separate contact flows for clients and candidates
- **Newsletter Integration**: Email subscription system for marketing communications
- **Responsive Design**: Mobile-first approach with progressive enhancement

## Design System
- **Visual Identity**: Modern enterprise aesthetic with creative agency elements
- **Animation**: Smooth hover states, section reveals, and micro-interactions
- **Typography**: Inter for UI elements and Playfair Display for headlines
- **Color Scheme**: Primary blue (#3b82f6) and accent purple (#8b5cf6) with neutral backgrounds
- **Glass Effects**: Backdrop blur and transparency effects for modern visual appeal

# External Dependencies

## Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **Database**: Drizzle ORM, Drizzle Kit, @neondatabase/serverless
- **Validation**: Zod for schema validation and type inference

## UI/UX Libraries
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS, class-variance-authority, clsx for conditional styling
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel React for content sliders
- **Command Interface**: cmdk for command palette functionality

## Data Management
- **HTTP Client**: Native Fetch API with TanStack Query for caching and synchronization
- **Form Validation**: @hookform/resolvers for React Hook Form integration
- **Date Handling**: date-fns for date manipulation and formatting

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development debugging
- **Session Storage**: connect-pg-simple for PostgreSQL session management

## Third-Party Services
- **Database Hosting**: Neon serverless PostgreSQL database
- **Image Assets**: Unsplash for high-quality stock photography
- **Font Loading**: Google Fonts for typography (Inter and Playfair Display)

The application follows modern web development best practices with a focus on performance, accessibility, and user experience while maintaining type safety throughout the stack.