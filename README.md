# Daksh Bhatia — Portfolio Website

## Files
- `index.html` — all page content (text, projects, links). Edit this to change words.
- `style.css` — colors, fonts, layout. Colors are variables at the top (`--purple`, `--gold`, etc.).
- `script.js` — click-to-enlarge image viewer.
- `images/` — all photos and renders. Replace a file with the same name to swap a picture.
- `resume.pdf` — the file the Resume buttons open. Replace it to update your resume.

## Preview on your computer
Open the folder in VS Code, install the "Live Server" extension, right-click `index.html` → "Open with Live Server".
The page reloads every time you save.

## Put it online with GitHub Pages (free)
1. Create a GitHub account, then a new repository named `yourusername.github.io` (public).
2. Upload everything in this folder (keep the `images` folder structure) and commit.
3. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)` → Save.
4. After a minute or two the site is live at `https://yourusername.github.io`.
5. To update: edit files and commit again (on github.com, or push from VS Code).

## Adding a new project
Copy an entire `<section class="project" ...>` block in `index.html`, change its `id`, text and image paths,
and add a matching card inside `<nav class="index">` that links to `#your-new-id`.

## Callout labels on images
Each callout uses percentages of the image: the `.dot` sits at `left:X%; top:Y%`,
the line is an SVG path in the same 0–100 coordinates, and the `.lab` label is placed with `left/right/top`.
