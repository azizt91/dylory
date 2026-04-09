```markdown
# Design System Strategy: The Cinematic Muse

This design system is a comprehensive framework for 'DYLORY,' a luxury perfume brand. It is engineered to transcend the transactional nature of e-commerce, transforming the digital experience into a sensory, editorial journey. We reject the "template" aesthetic in favor of high-fashion layouts, intentional asymmetry, and a tonal depth that mimics the physical layering of fine fragrance notes.

---

## 1. Creative North Star: "The Digital Curator"
The Creative North Star for this system is **The Digital Curator**. Every screen should feel like a page from a high-end, limited-edition fragrance monograph. We achieve this by:
*   **Intentional Asymmetry:** Breaking the traditional 12-column grid to allow imagery and typography to "breathe" like a physical editorial layout.
*   **Cinematic Pacing:** Using generous white space (`surface`) to slow the user down, encouraging them to linger on the visual storytelling.
*   **Tactile Layering:** Using soft shifts in tone rather than lines to define space, creating a UI that feels "soft to the touch."

---

## 2. Color & Tonal Architecture

Our palette is rooted in the romance of the rose and the coolness of sterling silver. We do not use color to decorate; we use it to direct emotion.

### Surface Hierarchy & The "No-Line" Rule
**Rule:** 1px solid borders are strictly prohibited for sectioning. 
Boundaries must be defined through background color shifts or tonal nesting.
*   **The Foundation:** Use `surface` (#f9f9f9) for global backgrounds.
*   **The Nest:** To highlight a product story or a testimonial, place a `surface_container_low` (#f3f3f3) section on top of the `surface`.
*   **The Focus:** Use `surface_container_lowest` (#ffffff) for card elements to create a subtle "lift" against the off-white background.

### The "Glass & Silver" Execution
To honor the "Silver Accents" requirement, floating elements (like navigation bars or quick-buy overlays) should utilize **Glassmorphism**:
*   **Surface:** `surface` with 70% opacity.
*   **Backdrop Blur:** 20px - 32px.
*   **The Silver Edge:** Instead of a border, use a 1px stroke of `outline_variant` (#debfc2) at 30% opacity to mimic a polished silver reflection.

### Signature Textures
For primary calls to action or high-impact hero sections, use a subtle radial gradient:
*   **From:** `primary` (#6d0026) 
*   **To:** `primary_container` (#8e1b3b) 
This prevents the "flat" look of standard buttons and adds a velvety, petal-like depth.

---

## 3. Typography: The Editorial Voice

The contrast between the romantic Serif and the technical Sans-Serif represents the intersection of art and olfactory science.

*   **The Display Scale (Noto Serif):** Use `display-lg` through `display-sm` for perfume names and romantic taglines. These should often be used with increased letter-spacing (0.02em) to enhance the "luxury" feel.
*   **The Body Scale (Manrope):** This is our "technical" voice. Use `body-md` for product descriptions. It must remain clean and legible, providing a neutral anchor to the expressive headlines.
*   **The Title Scale (Manrope):** Use `title-sm` in **all-caps** for navigation items and labels to instill an authoritative, architectural feel.

---

## 4. Elevation & Depth: Tonal Layering

We move away from the "drop shadow" era. Depth in this system is organic and atmospheric.

*   **The Layering Principle:** To elevate a product card, do not add a shadow. Instead, place a `surface_container_lowest` (#ffffff) card on a `surface_container` (#eeeeee) background. The contrast creates the elevation.
*   **Ambient Shadows:** Where a floating effect is vital (e.g., a "Cart" modal), use an ultra-diffused shadow:
    *   `X: 0, Y: 12, Blur: 40, Spread: 0`
    *   Color: `on_surface` (#1a1c1c) at **4% opacity**. It should be felt, not seen.
*   **The Ghost Border:** If accessibility requires a container boundary, use the `outline_variant` (#debfc2) at 15% opacity. It should look like a faint silver thread.

---

## 5. Components

### Buttons (The "Jewelry" of the UI)
*   **Primary:** Filled with the `primary` to `primary_container` gradient. Text in `on_primary`. Corner radius: **0px**.
*   **Secondary (Silver):** A `surface` background with a 1px border of `outline` (#8a7174) at 50% opacity. This creates the "Silver Border" requested, appearing as a metallic frame.
*   **Tertiary:** Text-only in `primary` (#6d0026) with a `label-md` style, underlined by a 1px silver stroke that expands on hover.

### Cinematic Imagery Containers
*   **The Rule of 0:** All containers (cards, buttons, images) must have a **0px border radius**. The luxury is in the sharpness and the precision of the grid.
*   **Visual Treatment:** Images should have a slight `surface_dim` tint to ensure white typography remains legible when overlaid.

### Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines to separate list items. Use 48px or 64px of vertical white space (Spacing Scale) to separate fragrance families or product categories.
*   **Card Interaction:** On hover, a card should shift from `surface_container_lowest` to `surface_container_low`, creating a "pressed-in" tactile feel rather than a "pop-out" shadow.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins (e.g., 10% left margin, 20% right margin) for headline text to create an editorial look.
*   **Do** use `primary_fixed_dim` (#ffb2bc) for subtle background accents behind product photography to evoke "soft pink" rose petals.
*   **Do** prioritize "Cinematic Pacing"—ensure every product image has at least 120px of breathing room from the next element.

### Don't:
*   **Don't** use "Standard" icons. If an icon is needed, it must be ultra-thin (0.5pt to 1pt stroke) to match the silver accent aesthetic.
*   **Don't** use any rounded corners. Even a 2px radius breaks the architectural "DYLORY" elegance.
*   **Don't** use pure black (#000000). Always use `on_surface` (#1a1c1c) for text to maintain a softer, high-end ink-on-paper feel.

---

## Director's Closing Note
This system relies on the **tension between the sharp (0px corners) and the soft (tonal pinks and rose reds).** Treat the screen not as a container for data, but as a gallery wall. If a layout feels too "busy," increase the white space and remove a border. The fragrance is the star; the UI is the invisible, elegant glass bottle that holds it.```