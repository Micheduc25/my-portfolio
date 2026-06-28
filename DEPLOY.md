# Deploy — replace the live site via GitHub

Your Vercel project `micheduc25-syvg` is connected to GitHub repo
**`Micheduc25/my-portfolio`** (branch `main`) and serves:

- `micheduc25.vercel.app`
- `ndjockcodes.com` + `www.ndjockcodes.com`

Pushing the new app to `main` makes Vercel rebuild and replace all of the above
automatically. Run these on **your Mac** (it has your GitHub credentials — I don't).

---

## Step 1 — Replace the repo contents with the new app

This keeps the same repo and Git history (one new commit swaps the old static
site for the Next.js app).

```bash
# Clone a fresh copy of your repo to your Desktop
cd ~/Desktop
git clone https://github.com/Micheduc25/my-portfolio.git my-portfolio-deploy
cd my-portfolio-deploy

# Remove the old static site (the .git folder is preserved)
git rm -rf . > /dev/null

# Copy in the new Next.js app (skips node_modules / .next / git metadata)
rsync -a \
  --exclude node_modules --exclude .next --exclude .git --exclude .DS_Store \
  "/Users/ndjockmicheljunior/Desktop/Job Srch/portfolio/" .

# Stage, commit, push
git add -A
git commit -m "Rebuild portfolio as Next.js app (brutalist redesign v2)"
git push origin main
```

The moment the push lands, Vercel starts a production build. Watch it at
vercel.com → project `micheduc25-syvg` → Deployments.

---

## Step 2 — Confirm Vercel build settings (one-time)

The old project was a static site (no framework). Vercel auto-detects Next.js
from `package.json`, but verify once so the first build doesn't use stale static
settings:

Vercel → project `micheduc25-syvg` → **Settings → Build & Deployment**

- **Framework Preset:** `Next.js`
- **Build Command:** default (`next build`) — leave the override **off**
- **Output Directory:** default — leave the override **off**
- **Install Command:** default (`npm install`)
- **Root Directory:** empty / repo root
- **Node.js Version:** 18.x or newer (24.x is already set — fine)

If the first deploy fails because an old static override is still set (e.g. an
output directory of `.` or "Other" framework), clear the overrides above and
redeploy.

---

## Step 3 — Verify

After the build goes green, hard-refresh:

- https://micheduc25.vercel.app
- https://ndjockcodes.com

Check: hero name decode animation, the live clock in the top status bar, the
Web/Mobile work filter, and project screenshots loading.

---

## Alternative — fast force-push (replaces Git history)

If you'd rather not keep the old static-site history, you can push this folder
directly as the new `main`:

```bash
cd "/Users/ndjockmicheljunior/Desktop/Job Srch/portfolio"
git init -b main
git remote add origin https://github.com/Micheduc25/my-portfolio.git
git add -A
git commit -m "Rebuild portfolio as Next.js app (brutalist redesign v2)"
git push --force origin main
```

`.gitignore` already excludes `node_modules`, `.next`, and `.DS_Store`, so only
source is pushed.

---

## Rollback

If anything looks wrong, Vercel keeps every prior deployment:
project → Deployments → find the last good static deployment → **⋯ → Promote to
Production**. Instant revert, no code changes needed.
