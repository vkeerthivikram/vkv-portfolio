# Portfolio design specification

Direction: professional editorial developer portfolio; white background, deep green accent, large Geist sans typography, real work and calm whitespace. Design variance 6, motion 3, density 4. Lead workflow: frontend-app-builder; taste-skill focused direction; imagegen concepts and hero art.

## References

Local concept files: hero-concept.png, work-concept.png, archive-concept.png (design reference only; excluded from published source). Generated with built-in Image Gen, 2026-11-02. The standalone abstract hero art is generated from the first reference and stored in public/images/building-blocks.webp. Public project screenshots are credited in docs/project-research.md.

## System

- Background true white #ffffff; ink #18251e; accent #28644a; muted #66716b; lines #dde2de; sage #e9f0e9.
- Geist self-hosted variable font. Headline 96px desktop, 44–76px mobile; section 34–56px; body 17–22px; labels 12–14px.
- 1392px content maximum, 72px desktop side margin at 1536px; 20px on small mobile.
- Radius 8px surfaces/buttons; tags round; real Android screenshot edges rounded to frame device.
- Phosphor regular-weight icons; no rasterized controls.
- White throughout with sage project and contact panels. No overlay on hero art. Native content and actual source images.

## Structure and states

Header → hero → selected work (Ballnote lead, Taskly and Kilo pair) → searchable/filterable 18-project archive with project detail dialogs → about → LinkedIn contact → footer.

Mobile: stacked hero and projects; visible compact navigation; wrapping filters; single-column index; bounded, scrollable dialog; stacked contact.

Hero allowed copy: vkv.; Work; All projects; About; Let’s talk; Curiosity in. Useful software out.; I’m V Keerthi Vikram. I build apps, developer tools, and small experiments that make everyday things a little better.; Explore my work; GitHub; Independent projects. Openly shared.; Selected work; A few things I’ve built.

## Intentional factual and functional refinements

- Work concept mock app imagery is replaced with verified real Ballnote and Taskly screenshots. Kilo uses its actual yellow launch graphic, explicitly identified in alt text, instead of the concept’s invented dark UI.
- Archive concept descriptions for Sift Agent, Lazysnake, Clipit, and Passage were inaccurate. Research-backed descriptions override them; Passage remains in development.
- Project detail dialogs, result counts and empty state are required for showing complete project context without making the landing page excessively long.
- Featured source/release/website links added for useful next actions; Kilo attribution explicitly unofficial.
- The work-section concept supersedes the hero overview’s incidental three preview tiles.
- Reduced motion disables animation.

## Requested theme update

Vicky requested dark mode and removal of the vkv wordmarks after viewing the first deployment. Header and footer initials are removed, and the favicon uses abstract blocks with no lettering. A 44px sun/moon button switches theme, remembers an explicit choice locally, and otherwise follows the system preference. The document theme is set before rendering to avoid a light-background flash.

Dark tokens: background #111a15, text #e8eee9, accent #aad7b8, sage surface #23352a. Every section, dialog, selected control, and focus state follows the palette. Real project screenshots retain their genuine colors. The hero receives a matching dark studio-art variant at public/images/building-blocks-dark.webp, generated with the built-in Image Gen editing tool from the original standalone asset.
