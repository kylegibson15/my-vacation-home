# Complete Redesign: Mountain Retreat Guest Guide

## Visual Identity

### Color Palette
- Primary (mountain slate): `#2B4C5B`
- Secondary (alpine sage): `#6B8F71`
- Accent (warm amber): `#C17B4A`
- Background: `#F7F5F2`
- Surface (cards): `#FFFFFF`
- Text primary: `#1C2B33`
- Text secondary: `#5C5C5C`
- Subtle (borders): `#E5E0DA`

### Typography
- System font stack (Inter-like), bold headings, regular body
- Page titles: large, bold, left-aligned

### Cards
- White, border-radius 16px, shadow `0 2px 8px rgba(0,0,0,0.06)`
- Generous internal padding

## Layout

### Bottom Navigation (4 tabs)
1. Home (cabin icon)
2. Check Out (checklist icon)
3. General Info (info icon)
4. More (grid icon)

### Home Page
- Hero with moose image + gradient overlay + welcome text
- Quick Reference 2-column card grid
- Transit Card

### Content Pages
- White card on warm background
- Title + body + images

### More Page
- Grid of remaining sections: Fireplace, Parking, Kitchen, Entertainment, Trash, Contact

## Implementation Scope
- New MUI theme with custom palette
- New BottomNav component replacing AppBar
- New More page/route
- Restyle all page components
- Update QuickReference cards
- Update Stepper styling
- Update list item styling
