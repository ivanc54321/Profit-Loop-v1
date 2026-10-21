---
name: Profit Loop Electric Grid
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#b9ccb5'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#849581'
  outline-variant: '#3b4b3a'
  surface-tint: '#00e55b'
  primary: '#edffe8'
  on-primary: '#003911'
  primary-container: '#00ff66'
  on-primary-container: '#007128'
  inverse-primary: '#006e27'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#fff9f2'
  on-tertiary: '#3c2f00'
  tertiary-container: '#ffda64'
  on-tertiary-container: '#765f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff83'
  primary-fixed-dim: '#00e55b'
  on-primary-fixed: '#002107'
  on-primary-fixed-variant: '#00531b'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  headline-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-section:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-section-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-card:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  body-lead:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-default:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.04em
  button-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '800'
    lineHeight: 18px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

The design system powers an athletic, high-velocity fintech brand engineered for disciplined matched betting and systematic yield generation. It replaces ambiguous gambling aesthetic tropes with authoritative, quantitative software credibility. The brand evokes calculated precision, continuous positive return, unshakeable trust, and infectious momentum. 

Drawing heavily from modern High-Contrast Fintech and Tactical Dark-Mode SaaS, the system pairs deep, mathematically tuned midnight obsidian canvases (`#0B0F19`, `#111827`) with electric neon green accelerators (`#00FF66`, `#10B981`) and immaculate high-density daylight data tables. Interfaces transition intentionally between high-impact dark promotional or hero blocks and ultra-crisp, white-ground analytical surfaces. Visual weight is direct and sharp: solid borders, strict geometry, clear badge tags, distinct multi-tiered pricing matrices, and prominent social-proof cards.

## Colors

The palette is tuned for high-contrast legible hierarchy across both dark and light contexts:

- **Primary (`#00FF66`)**: The electric profit green. Used for key conversion moments, positive profit badges, primary metrics, active toggle indicators, and highlighted headline accents.
- **Secondary (`#10B981`)**: Grounded emerald green. Used for stable secondary actions, verified trust checks, progress pills, and sustained chart trends.
- **Tertiary (`#FACC15`)**: High-energy warning/gold accent. Retained for critical conversion CTAs ("TRY FREE", "SELECT PLAN") to provide maximum eye-level velocity against dark backgrounds, matching the proven conversion architecture of the reference.
- **Neutral Core (`#0B0F19` & `#111827`)**: The nocturnal foundation. Used across hero headers, testimonials carousel backgrounds, sticky footers, and prominent tier cards.
- **Surface Light (`#FFFFFF` & `#F8FAFC`)**: The analytical foundation. Clean white and slate tones used for educational breakdown cards, step diagrams, and data grids.
- **Semantic Accents**: Deep evergreen container (`#052E16`) for badge surfaces and subtle neon borders (`rgba(0, 255, 102, 0.2)`).

## Typography

The typography uses **Plus Jakarta Sans** uniformly across headlines, copy, metrics, and interactive elements. Its wide geometric stance, sharp punctuation, and ultra-punchy heavy weights deliver contemporary fintech clarity while echoing the friendly consumer accessibility of the original interface.

### Rules of Usage
- **Highlighted Phrases:** Headlines routinely split sentences across two tones: neutral off-white/slate and electric `#00FF66` (or tertiary gold) to steer focal flow directly to ROI concepts (e.g., "Make Some **Profit Today**", "500,000+ **people like you**").
- **Pricing & Figures:** Monetary values use `price-display` paired with `body-sm` subline text (`/ month`) positioned baseline-aligned.
- **Hierarchy Contrast:** Body copy keeps an open 1.6 line height for dense explanatory steps, while headlines remain tight (-0.02em to -0.03em tracking) to create authoritative, punchy impact.

## Layout & Spacing

The layout is built on a structured 12-column responsive fluid grid capped at a maximum width of `1240px` for optimal readability and data density.

### Breakpoints & Adaptive Rhythm
- **Desktop (1024px+)**: 12 columns, `1.5rem` (24px) gutters, `2rem` (32px) side margins. Alternating full-width section canvases (dark hero -> dark social carousel -> white explanatory -> dark banner -> white pricing -> dark footer).
- **Tablet (768px - 1023px)**: 8 columns, `1.5rem` gutters. Pricing cards reflow into a 2-up + 1-down arrangement. Testimonial cards display in a 2-column swipeable band.
- **Mobile (< 768px)**: 4 columns, `1rem` gutters, `1.25rem` canvas margins. Hero CTA buttons stack vertically with full width. Pricing tables convert into horizontal swipe cards or sequential stacked modules.

### Sectional Structure
Sections alternate deliberately between deep midnight navy backgrounds (`#0B0F19`) and pristine white surfaces (`#FFFFFF`). Padding inside cards is standardized to `1.5rem` for standard cards and `2rem` for featured subscription plans.

## Elevation & Depth

Visual depth is achieved through high-contrast boundary definition, rich container fills, and hyper-subtle luminous edge highlights rather than heavy muddy dropshadows.

### Elevation Levels
- **Tier 0 (Flat Ground)**: Base background canvases `#0B0F19` for nocturnal blocks or `#FFFFFF` for daylight analysis blocks.
- **Tier 1 (Surface Containers)**: White card modules (`#FFFFFF`) with solid `1px solid #E2E8F0` borders on light backgrounds, or deep panels (`#111827`) on dark canvases with a razor-thin border of `1px solid rgba(255, 255, 255, 0.08)`.
- **Tier 2 (Interactive Floating Elements)**: Floating profit badges, pill filters, and active tab triggers carry crisp zero-spread elevation: `0 4px 14px -2px rgba(0, 0, 0, 0.12)`.
- **Tier 3 (Active Glow & Focus Tiers)**: Active pricing cards and conversion banners utilize an inner-glow neon border: `0 0 0 1px #00FF66, 0 12px 32px -8px rgba(0, 255, 102, 0.15)`.
- **Pill Badges**: Solid `#00FF66` or deep emerald `#052E16` fills with high-contrast text tags, creating immediate semantic standout without relying on elevation blur.

## Shapes

The interface embraces a balanced modern radius convention (`roundedness: 2`, base `0.5rem` / 8px) paired with pill-shaped control elements (`9999px`) for high-utility interactions.

### Shape Hierarchy
- **Standard Cards & Data Grids**: `0.75rem` (12px) to `1rem` (16px) corners. Clean, structural, and professional.
- **Call-to-Action Buttons & Chips**: Fully rounded pill shapes (`9999px` / `rounded-full`) for all primary conversion buttons, tab filters, and status badges, maintaining the recognizable athletic friendly shape profile of the reference.
- **Interactive Form Inputs**: `0.5rem` (8px) for input boxes, segmented toggles, and dropdown triggers.
- **Avatar & Social Proof Pins**: Circular (`9999px`) badges and circular step node indicators (`step 1`, `step 2`) connected with thin rhythmic dashed vector paths.

## Components

### Buttons
- **Primary Conversion CTA**: Pill shape (`rounded-full`), solid bright energetic gold/amber `#FACC15` fill, bold black `#0B0F19` uppercase text, subtle micro-scale on hover. Example: "TRY THE **PROVEN METHOD FREE**".
- **Secondary Ghost Action**: Pill shape, transparent surface, `1.5px solid #00FF66` border, `#00FF66` text, electric green glow hover state (`box-shadow: 0 0 16px rgba(0,255,102,0.3)`).
- **Secondary Surface Action**: Solid `#052E16` with neon `#00FF66` text for low-friction secondary clicks within dark modules.

### Pricing Cards
- **Structure**: 3-column comparative matrix. Clean white cards for base tiers, dark obsidian card (`#111827`) with neon `#00FF66` accents and badge for the highlighted Pro tier.
- **Headers**: Big tier name, short subline, massive price metric (`£39.99 / month`), followed immediately by a pill saving badge (`SAVE 48% WITH AN ANNUAL PLAN`).
- **Feature Lists**: Left-aligned checklist entries with circular green checkmark icons (`#00FF66` or `#10B981`) and concise feature statements.
- **Action Placement**: Full-width button placed directly above the checklist specifications to anchor primary intent before detail evaluation.

### Tabs & Segmented Toggles
- **Pill Tab Group**: Segmented container with light pill wrapper (`#F1F5F9`), containing pill buttons. Active state switches to primary dark fill (`#0B0F19`) or bright electric green (`#00FF66`) with inverted high-contrast text.
- **Billing Period Switcher**: Centered toggle slider flanked by "MONTHLY" and "ANNUAL", adorned with a floating mini discount pill badge (`SAVE 45%`).

### Badges & Pill Chips
- **Profit Pill**: Pill-shaped status indicator pinned to the top-left of user cards: deep forest background (`#052E16`) with electric green text (`#00FF66`) stating the user's verified earnings (e.g. `£15,109 profit`).
- **Trust Badges**: Circular metallic and monochromatic guarantee seals positioned adjacent to conversion forms and footer margins.

### Testimonial & Milestone Cards
- White ground cards set over the dark `#0B0F19` canvas. Contains user name, milestone badge, real-world snippet copy, and a 2x2 compact metric breakdown grid (`TODAY: £0`, `THIS MONTH: £308`, `LAST MONTH: £809`, `TOTAL PROFIT: £15,109`) rendered with light green background fills (`#F0FDF4`) and bold dark green figures.

### Data Tables & Step Sequence
- Step diagrams feature interconnected circular nodes labeled `STEP 1` and `STEP 2` tied together with directional dashed paths, terminating in a highlighted profit summary card (`Profit: £37.50+`).