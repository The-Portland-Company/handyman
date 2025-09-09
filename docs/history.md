# Project History

## Booking Calendar System Requirements & Implementation Plan

### Date: 2025-09-09

#### Gathered Requirements:

**Core Functionality:**
- Customers can see availability and book appointments directly
- 1 hour minimum booking slots
- $75 consultation fee (payment collection postponed for now)
- Paginated booking experience with smooth transitions

**Drive Time Management:**
- Automatic drive time buffer calculation from home base: 17035 Kasserman Drive, Sunriver, Oregon 97707
- Dynamic buffer calculation between appointments
- Example: 9AM appointment in Bend (30m drive) → 2PM appointment in LaPine (40m from Bend) → 20m drive home

**Customer Information Form:**
- Required Fields:
  - First Name (separate field)
  - Last Name (separate field)
  - Phone
  - Email
  - Street Address
  - City
  - State (auto-filled with Oregon)
  - Zip Code
  - Description of work needed
- Optional Fields:
  - Photos (max 5, auto-convert to WebP on upload)
  - Budget range dropdown:
    - $50-150
    - $300-500
    - $500-1,000
    - $1,000-3,000
    - $3,000+

**Schedule & Availability:**
- Monday-Friday: 8am-5pm
- Saturday: 9am-2pm
- Sunday: Closed
- Holidays: Blocked out

**Google Calendar Integration:**
- Use existing Google Calendar
- Two-way sync (website bookings ↔ Google Calendar events)
- Manual Google Calendar entries block website availability

**Notifications:**
- Immediate email confirmation to:
  - Customer
  - Admin (spencerhill@theportlandcompany.com)
- 24-hour reminder emails to customers
- SMS notifications (future roadmap item)

---

## Implementation Plan

### Phase 1: Core Booking System
1. **Set up database schema** (Supabase)
   - Bookings table (customer info, appointment details, status)
   - Availability rules table (working hours, holidays)
   - Service locations table (for drive time calculations)

2. **Google Calendar API Integration**
   - OAuth setup for existing Google Calendar
   - Two-way sync functionality
   - Event creation/update/deletion handlers

3. **Drive Time Calculation Service**
   - Integrate Google Maps API for distance/time calculations
   - Auto-calculate buffers from home base
   - Dynamic buffer calculation between appointments

### Phase 2: Customer Booking Interface
4. **Multi-step booking form**
   - Step 1: Service type & description
   - Step 2: Location details (address fields)
   - Step 3: Calendar availability view
   - Step 4: Contact information
   - Step 5: Optional photos & budget
   - Step 6: Confirmation

5. **Calendar UI Component**
   - Display available time slots (1-hour minimum)
   - Show blocked times (existing bookings + drive time)
   - Respect working hours

6. **Photo Upload System**
   - Accept up to 5 images
   - Auto-convert to WebP format
   - Optimize for web delivery

### Phase 3: Notifications & Admin
7. **Email System**
   - Immediate confirmation to customer & admin
   - 24-hour reminder emails
   - Integration with email service (SendGrid/Resend)

8. **Admin Dashboard**
   - View upcoming appointments
   - Manage availability/holidays
   - Edit/cancel bookings

### Phase 4: Future Enhancements (Roadmap)
- SMS notifications
- Payment processing integration ($75 consultation fee)
- Mobile app
- Customer portal for managing bookings
- Advanced route optimization for multiple appointments

### Technical Stack Recommendation:
- **Frontend**: Next.js (existing) with React
- **Database**: Supabase 
- **Calendar**: Google Calendar API
- **Maps**: Google Maps API for drive times
- **Email**: Resend or SendGrid
- **Image Processing**: Sharp for WebP conversion
- **Hosting**: Current Cloudflare Pages setup

---

## Implementation Tasks (for future development):
1. Set up Supabase database schema for bookings
2. Create bookings table with customer info and appointment details
3. Create availability rules table for working hours and holidays
4. Create service locations table for drive time calculations
5. Set up Google Calendar API integration with OAuth
6. Implement two-way sync with Google Calendar
7. Integrate Google Maps API for drive time calculations
8. Build multi-step booking form UI
9. Create calendar availability component
10. Implement photo upload with WebP conversion
11. Set up email notifications system
12. Create admin dashboard for managing bookings

---

## Previous Updates

### 2025-09-09
- Fixed profile photo positioning to properly center face in circle
- Updated hourly rate from $35-50 to $50-75
- Changed "Contact Us" heading to "Contact"
- Removed "I can build your dream project." from Custom Builds description
- Updated Animal Care description to end with ", pigs, etc..."
- Added licensed electrician partnership note to solar panel services
- Changed "Our Services" heading to "Services"