# Authentication Flow Documentation

## Overview
A complete authentication and research platform for EnnovatingX with a beautiful UI matching the existing design system.

## Features Implemented

### 🔐 Authentication Flow
1. **Splash Screen** - Beautiful loading animation with EnnovatingX branding
2. **Who Are You** - Name and email collection with form validation
3. **OTP Verification** - 6-digit code input with auto-focus and paste support
4. **Persistent Sessions** - User data saved to localStorage

### 📊 Dashboard
- **Two Tabs**: Drafts and Published articles
- **Search Functionality**: Filter articles by title or content
- **File-like Display**: Clean card layout with article previews
- **Article Metadata**: Word count, last modified, status badges
- **Quick Actions**: Create new research button in header

### ✍️ Research Editor
- **Rich Text Editing**: Microsoft Word-like experience
- **Formatting Tools**:
  - Bold, Italic, Underline
  - Text alignment (left, center, right)
  - Bullet and numbered lists
  - Links and images
  - Font size selector
- **Word Counter**: Real-time word count display
- **Auto-save**: Draft and publish options
- **Clean Interface**: Distraction-free writing environment

## Routes

- `/` - Home page
- `/auth` - Authentication flow (Splash → Login → OTP → Dashboard → Editor)
- `/projects` - Projects page

## How to Use

### Access the Auth Flow
Navigate to `/auth` to see the complete authentication experience:

```tsx
// Visit in browser
http://localhost:5173/auth
```

### Flow Steps
1. **Splash Screen** (2 seconds) - Displays logo and loading bar
2. **Who Are You** - Enter name and email
3. **OTP Verification** - Enter 6-digit code (any code works in demo)
4. **Dashboard** - View and manage articles
5. **Editor** - Click "Create Research" or any article to edit

### Components Location

```
src/
├── components/
│   ├── auth/
│   │   ├── SplashScreen.tsx
│   │   ├── WhoAreYou.tsx
│   │   └── OTPVerification.tsx
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   └── editor/
│       └── ResearchEditor.tsx
└── pages/
    └── auth/
        └── page.tsx (Main auth flow orchestrator)
```

## Design Features

### Color Scheme
- Uses existing theme system (dark/light mode)
- Primary accent: `#9DA7D0` (purple-blue)
- Consistent with EnnovatingX branding

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly OTP input
- Responsive grid layouts

### Animations & Transitions
- Smooth 300-500ms transitions
- Hover effects on interactive elements
- Loading states and progress indicators
- Auto-focus management

## User Experience

### OTP Input Features
- Auto-advance to next digit
- Backspace navigation
- Paste support (full 6-digit codes)
- Auto-submit when complete
- Resend with 60s cooldown

### Dashboard Features
- Tab switching (Drafts/Published)
- Real-time search filtering
- Empty states with CTAs
- Article click-to-edit
- Responsive card grid

### Editor Features
- Clean, distraction-free writing
- Sticky toolbar
- Word count tracking
- Save draft / Publish options
- Back to dashboard navigation

## Mock Data

The dashboard includes sample articles for demonstration:
- 2 drafts
- 2 published articles
- Different word counts and timestamps

## LocalStorage Keys

- `enx_user` - Stores user authentication data
  ```json
  {
    "name": "User Name",
    "email": "user@email.com"
  }
  ```

## Future Enhancements

### Backend Integration
- [ ] Real OTP generation and verification
- [ ] User registration/authentication API
- [ ] Article CRUD operations
- [ ] File upload for images
- [ ] Auto-save functionality

### Features
- [ ] Rich text editor improvements (headings, code blocks, tables)
- [ ] Collaborative editing
- [ ] Version history
- [ ] Export to PDF/Word
- [ ] Article sharing
- [ ] Comments and feedback
- [ ] Analytics dashboard

### UI/UX
- [ ] Keyboard shortcuts
- [ ] Drag-and-drop image upload
- [ ] Article templates
- [ ] Dark mode toggle in editor
- [ ] Full-screen writing mode
- [ ] Focus mode

## Testing the Flow

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Navigate to Auth Flow**
   ```
   http://localhost:5173/auth
   ```

3. **Complete Authentication**
   - Wait for splash screen
   - Enter any name and email
   - Enter any 6 digits for OTP
   - Explore dashboard and editor

4. **Test Features**
   - Switch between tabs
   - Search articles
   - Create new research
   - Use formatting tools
   - Save drafts and publish

## Notes

- All components use the existing theme context
- Fully TypeScript typed
- No external rich text editor dependencies (uses contentEditable)
- Mobile responsive
- Accessible form inputs
- Loading states for better UX
