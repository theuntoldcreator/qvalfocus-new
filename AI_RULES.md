# AI Rules for QvalFocus Application

This document outlines the technical stack and specific guidelines for using libraries within the QvalFocus application. Adhering to these rules ensures consistency, maintainability, and leverages the strengths of our chosen technologies.

## Tech Stack Overview

*   **Frontend Framework**: React 18 with TypeScript and Vite for a fast and type-safe development experience.
*   **Routing**: React Router DOM for client-side navigation and route management.
*   **Styling**: Tailwind CSS is used exclusively for all styling, including a custom design system with glassmorphism effects.
*   **UI Components**: Shadcn/ui components, built on Radix UI primitives, provide accessible and customizable UI elements.
*   **Server State Management**: TanStack Query (React Query) handles data fetching, caching, and synchronization with the backend.
*   **Form Handling**: React Hook Form is used for form state management, paired with Zod for robust schema validation.
*   **Backend/Database**: Supabase serves as the primary backend for authentication and data storage (PostgreSQL).
*   **Icons**: Lucide React provides a comprehensive set of vector icons.
*   **Animations**: Framer Motion is used for advanced animations and transitions.
*   **Date Utilities**: Date-fns is used for all date manipulation and formatting.

## Library Usage Rules

To maintain a consistent and efficient codebase, please follow these guidelines for library usage:

*   **UI Components**:
    *   **Always** prioritize `shadcn/ui` components for building the user interface.
    *   If a specific `shadcn/ui` component is not available or requires significant customization, create a **new, separate component** using Radix UI primitives and style it with Tailwind CSS.
    *   **Never** directly modify files within the `shadcn/ui` directory.
*   **Styling**:
    *   **Exclusively** use Tailwind CSS for all styling. Avoid custom CSS files or inline styles unless absolutely necessary for unique, non-Tailwind-compatible scenarios (which should be rare).
    *   Utilize the `cn` utility function (from `clsx` and `tailwind-merge`) for conditionally applying and merging Tailwind classes.
*   **Icons**:
    *   **Always** use icons from the `lucide-react` library.
*   **Form Management**:
    *   Use `react-hook-form` for managing form state, validation, and submission.
    *   Use `zod` for defining and validating form schemas to ensure type safety and robust input handling.
*   **Data Fetching & Server State**:
    *   **Always** use `TanStack Query` (React Query) for fetching, caching, and updating server-side data (e.g., from Supabase).
*   **Routing**:
    *   Use `react-router-dom` for all client-side routing and navigation.
*   **Authentication**:
    *   Use `@supabase/auth-ui-react` for pre-built authentication UI components and `@supabase/supabase-js` for direct Supabase client interactions.
*   **Date Handling**:
    *   Use `date-fns` for all date-related operations, such as formatting, parsing, and calculations.
*   **Animations**:
    *   For complex, interactive animations and transitions, use `framer-motion`.