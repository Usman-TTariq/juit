# Design System Document: Precision Tech Editorial

## 1. Overview & Creative North Star: "The Architectural Monolith"
This design system is built upon the concept of **Architectural Monolithism**. We are moving away from the cluttered, "boxy" nature of standard SaaS platforms to create a high-end, editorial experience for Juit Technologies. The system treats the screen not as a webpage, but as a physical space defined by light, shadow, and absolute precision.

**The Creative North Star:** 
We utilize intentional asymmetry, dramatic typographic scales, and extreme high-contrast "moments" to command authority. By stripping away decorative elements (lines, borders, excessive iconography), we allow the content to breathe within a framework of "Negative Space as Luxury." Every pixel must feel intentional, as if carved from obsidian and marble.

---

## 2. Colors: High-Contrast Obsidian & Crimson
The palette adheres to a strict 60-30-10 distribution: 60% White/Neutral, 30% Deep Black, and 10% Crimson Red for surgical precision in CTAs.

### The "No-Line" Rule
**Lines are a failure of layout.** To section content, you are prohibited from using 1px solid borders. Boundaries must be defined through:
1.  **Background Shifts:** Transitioning from `surface` (#f9f9f9) to `surface-container-low` (#f3f3f3).
2.  **Generous Gaps:** Using white space as a structural beam.
3.  **Tonal Stacking:** Using slightly different shades of grey to imply separation.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Depth is achieved by nesting container tiers:
*   **Base Layer:** `surface` (#f9f9f9).
*   **Secondary Sectioning:** `surface-container-low` (#f3f3f3) for subtle content grouping.
*   **Interactive/Elevated Elements:** `surface-container-lowest` (#ffffff) for cards to create a "lift" against the off-white background.

### The "Glass & Gradient" Rule
While the system is minimalist, we avoid "flatness." Use **Signature Textures** for depth:
*   **Primary CTAs:** Instead of flat `#af101a`, use a subtle linear gradient from `primary` (#af101a) to `primary_container` (#d32f2f) at a 135-degree angle.
*   **Floating Navigation:** Apply `backdrop-blur: 20px` with a semi-transparent `surface` color (e.g., 80% opacity) to create a frosted glass effect that integrates with the content behind it.

---

## 3. Typography: Bold Authority
We utilize **Inter** for its mathematical precision and neutral, tech-forward stance.

*   **Display (Display-LG/MD):** Use these sparingly for hero sections. They should be set to `font-weight: 800` (Extra Bold) with a slightly tighter letter-spacing (-0.02em) to create a "wall of text" impact.
*   **Headlines (Headline-LG/MD):** These are the structural anchors of your pages. They should always be in `on_background` (#1b1b1b).
*   **The Label Contrast:** Use `label-md` and `label-sm` in `primary` (#af101a) and Uppercase for overlines or small "Tech Specs" to provide a vibrant, crimson rhythm to the page.
*   **Body Copy:** Maintain `body-lg` (1rem) for readability. Ensure line-height is at least 1.6 to maintain the "editorial" feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows and borders are replaced by light physics and stacking.

### The Layering Principle
Do not use shadows for static content. If a card needs to stand out, place a `surface-container-lowest` (#ffffff) card on a `surface-container` (#eeeeee) background. The contrast between the pure white and the light grey provides all the "lift" required.

### Ambient Shadows
For floating elements (Modals, Dropdowns), use "Atmospheric Shadows":
*   **Color:** Use a tinted shadow based on `on_surface` (#1b1b1b) but at 4-6% opacity.
*   **Blur:** High diffusion (30px to 60px) with 0 offset. This mimics a soft, natural ambient light rather than a harsh artificial lamp.

### The "Ghost Border" Fallback
If a visual divider is legally or functionally required for accessibility, use the **Ghost Border**:
*   Token: `outline_variant` (#e4beba) at **15% opacity**.
*   Weight: 1px.
*   *Note: If the border is clearly visible at a glance, it is too heavy.*

---

## 5. Components: Minimalist Primitives

### Buttons
*   **Primary:** Sharp corners (`0px`), `primary` gradient background, `on_primary` (#ffffff) text. Height: 48px or 56px for impact.
*   **Secondary:** Sharp corners (`0px`), `on_secondary_fixed` (#1b1b1b) background, `on_secondary` (#ffffff) text.
*   **Tertiary:** No background. Bold `primary` (#af101a) text with an animated 1px underline that expands on hover.

### Cards & Lists
*   **NO DIVIDERS:** Never use a horizontal line to separate list items. Use 24px–32px of vertical padding and a subtle `surface_container` background on hover.
*   **Structure:** Use `surface_container_lowest` for the card body. Use `display-sm` for large numerical data points within cards.

### Input Fields
*   **Style:** Underline-only or subtle background fill. Forbid the "box" look.
*   **States:** On focus, the bottom border transitions from `outline` to a 2px `primary` (#af101a) line. Label floats upward in `label-sm` sizing.

### Signature Imagery: Duotone Tech
All imagery must be processed as high-contrast Black and White. Apply a "Crimson Accent" by masking specific tech elements (e.g., a server light, a wire, or a focal point) in `#D32F2F`. This ensures imagery feels like an extension of the UI, not an external asset.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Place a headline on the left and the body copy on the far right to create dynamic tension.
*   **Use 0px Roundedness:** All corners must be sharp. This is a "Corporate-Tech" system; it should feel engineered and precise, not "friendly" or "bubbly."
*   **Exaggerate Scale:** Make titles significantly larger than you think they should be. High-end design thrives on typographic hierarchy.

### Don’t:
*   **Don't use "Grey" text for body copy:** Use `on_surface` (#1b1b1b). Legibility and high contrast are paramount for authority.
*   **Don't use 1px borders:** If you feel the need to separate two things, increase the `padding` or change the `background-color` token.
*   **Don't use icons as decoration:** Icons should be functional only. If an icon doesn't trigger an action, remove it. Use typography to tell the story instead.