# Krishna Traders - Go-Live Verification Checklist

This checklist ensures the production deployment is complete and all critical functionality works as expected.

## Pre-Deployment

- [ ] **Build Success**: Run `npm run build` (or equivalent) and verify no build errors
- [ ] **TypeScript Check**: Run `npm run typescript-check` and verify no type errors
- [ ] **Linting**: Run `npm run lint` and verify no critical issues

## Post-Deployment Verification

### 1. Site Accessibility
- [ ] **Public Site Loads**: Navigate to the production URL and verify the site loads without errors
- [ ] **No Console Errors**: Open browser DevTools and check for JavaScript errors in the console

### 2. Header Branding
- [ ] **Brand Name Visible**: Verify "Krishna Traders" text is prominently displayed in the header on all pages
- [ ] **Logo Display**: Confirm the logo image loads correctly in the header
- [ ] **Responsive Header**: Test header display on mobile, tablet, and desktop viewports

### 3. Route Accessibility
Test that all main routes are reachable and render correctly:
- [ ] **Home Page** (`/` or `/#/`): Loads with hero section, features, and categories
- [ ] **Products Page** (`/products` or `/#/products`): Displays all four product categories
- [ ] **About Page** (`/about` or `/#/about`): Shows company information and values
- [ ] **Contact Page** (`/contact` or `/#/contact`): Displays contact information and inquiry form
- [ ] **Admin Page** (`/admin` or `/#/admin`): Accessible and shows authentication gate

### 4. SEO Files
- [ ] **robots.txt**: Navigate to `/robots.txt` and verify it loads with correct content
- [ ] **sitemap.xml**: Navigate to `/sitemap.xml` and verify it loads with all main routes listed

### 5. Contact CTAs
Test all contact call-to-action buttons/links:
- [ ] **Call Button (Primary)**: Click and verify it opens phone dialer with +91-9970279004
- [ ] **Call Button (Secondary)**: Click and verify it opens phone dialer with +91-9921624211
- [ ] **Email Link**: Click and verify it opens email client with traderskrishna682@gmail.com
- [ ] **WhatsApp Link**: Click and verify it opens WhatsApp with pre-filled message

### 6. Inquiry Form
- [ ] **Form Submission**: Fill out and submit the inquiry form on the Contact page
- [ ] **Success Feedback**: Verify success message appears after submission
- [ ] **Admin View**: Log in to admin panel and verify the inquiry appears in the list

### 7. Authentication
- [ ] **Login Flow**: Test Internet Identity login from the admin page
- [ ] **Logout Flow**: Test logout functionality
- [ ] **Session Persistence**: Refresh page after login and verify session persists

### 8. Responsive Design
- [ ] **Mobile View**: Test all pages on mobile viewport (320px - 767px)
- [ ] **Tablet View**: Test all pages on tablet viewport (768px - 1023px)
- [ ] **Desktop View**: Test all pages on desktop viewport (1024px+)

### 9. Performance
- [ ] **Page Load Speed**: Verify pages load within 3 seconds on standard connection
- [ ] **Image Loading**: Confirm all product category images load correctly
- [ ] **No Layout Shift**: Check for minimal cumulative layout shift during page load

### 10. Footer
- [ ] **Contact Information**: Verify both phone numbers, email, and WhatsApp link in footer
- [ ] **Navigation Links**: Test all footer navigation links work correctly
- [ ] **Attribution**: Confirm "Built with love using caffeine.ai" link with UTM tracking is present

## Browser Compatibility
Test on the following browsers:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Final Sign-Off
- [ ] All checklist items completed
- [ ] No critical issues found
- [ ] Site ready for public use

**Deployment Date**: _________________

**Verified By**: _________________

**Notes**: 
_________________________________________________________________________________
_________________________________________________________________________________
