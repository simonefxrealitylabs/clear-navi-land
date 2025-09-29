# ClearPlot - Land Management Platform

A comprehensive land management platform built with React, TypeScript, and Supabase for managing land listings, user authentication, and admin operations.

## Features

### 🔐 Authentication System
- User registration and login with Supabase Auth
- Role-based access control (User, Agent, Admin)
- Password validation and security
- Session management

### 🏘️ Land Listings
- Search and filter land listings
- Real-time search suggestions
- Advanced filtering by location, price, area, FSI, zoning
- Grid and map view options
- Detailed plot information

### 👥 User Management
- User profiles with contact information
- Role management (User/Agent/Admin)
- Status management (Active/Inactive/Suspended)
- User activity tracking

### 🛠️ Admin Dashboard
- Comprehensive dashboard with statistics
- User management and role assignment
- Listing approval and status management
- Inquiry management
- Real-time data updates

### 🔍 Search & Discovery
- Intelligent search with suggestions
- Location-based filtering
- Price range filtering
- FSI and zoning filters
- Sort by various criteria

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Shadcn/ui, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router v6
- **Icons**: Lucide React

## Setup Instructions

### 1. Prerequisites
- Node.js 18+ and npm
- Supabase account

### 2. Database Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Run Database Schema**
   - Copy the contents of `supabase-schema.sql`
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Paste and run the schema SQL

3. **Update Supabase Configuration**
   - Update `src/integrations/supabase/client.ts` with your project URL and anon key

### 3. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Create Admin User

1. **Sign up through the application**
   - Go to `/signup`
   - Create a new account
   - Note the user ID from Supabase Auth dashboard

2. **Make user admin**
   - Go to Supabase dashboard → Authentication → Users
   - Find your user and note the UUID
   - Go to SQL Editor and run:
   ```sql
   UPDATE public.users 
   SET role = 'admin' 
   WHERE id = 'your-user-uuid-here';
   ```

### 5. Access Admin Dashboard

- Login with your admin account
- Click "Admin" button in the header
- Or navigate to `/admin`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing page hero
│   └── SearchWithSuggestions.tsx
├── hooks/              # Custom React hooks
│   ├── useAuth.ts      # Authentication hook
│   └── use-mobile.tsx
├── integrations/       # External service integrations
│   └── supabase/       # Supabase client and types
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Login.tsx       # Login page
│   ├── Signup.tsx      # Registration page
│   ├── AdminDashboard.tsx # Admin panel
│   ├── Listings.tsx    # Property listings
│   └── ...
├── services/           # API and database services
│   └── database.ts     # Database operations
└── lib/                # Utility functions
    └── utils.ts
```

## Database Schema

### Tables
- **users**: Extended user profiles with roles and status
- **listings**: Property listings with detailed information
- **inquiries**: Customer inquiries and contact requests
- **favorites**: User's favorite listings

### Security
- Row Level Security (RLS) enabled on all tables
- Role-based access policies
- Automatic user profile creation on signup

## Environment Variables

Create a `.env.local` file:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Build: `npm run build`
- Serve the `dist` folder with any static hosting service

## Features in Detail

### Authentication Flow
1. User signs up with email/password
2. Supabase creates auth user and triggers profile creation
3. User can login and access role-based features
4. Admin users can access admin dashboard

### Search System
1. Real-time search suggestions as user types
2. URL parameter persistence for search state
3. Advanced filtering and sorting options
4. Cross-component search integration

### Admin Dashboard
1. Overview with key statistics
2. User management with role/status controls
3. Listing approval workflow
4. Inquiry management system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation
- Review the Supabase documentation for backend questions









