#!/usr/bin/env python3
"""Ecrit src/data/lastmod.json : date du dernier commit de chaque page source (src/pages/**.astro).
Lu par serialize() du sitemap dans astro.config.mjs. A lancer AVANT chaque commit qui touche
des pages (le build Docker de Railway n a pas l historique git).
Cle = chemin d URL sans .html ni barre finale ("" pour l accueil, "/fr/e/blog/x")."""
import json, os, subprocess
racine = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = subprocess.run(["git", "log", "--name-only", "--format=@%cs", "--", "src/pages"],
                     cwd=racine, capture_output=True, text=True, check=True).stdout
dates, jour = {}, None
for ligne in out.splitlines():
    if ligne.startswith("@"):
        jour = ligne[1:]
    elif ligne.strip() and ligne not in dates:
        dates[ligne] = jour  # git log va du plus recent au plus ancien : 1re vue = dernier commit
# fichiers modifies non commites : date du jour
sales = subprocess.run(["git", "status", "--porcelain", "--", "src/pages"], cwd=racine,
                       capture_output=True, text=True).stdout
import datetime
auj = datetime.date.today().isoformat()
for l in sales.splitlines():
    dates[l[3:].strip()] = auj
res = {}
for f, d in dates.items():
    if not f.endswith(".astro") or "[" in f or "/go/" in f:
        continue
    if not os.path.exists(os.path.join(racine, f)):
        continue
    u = f[len("src/pages"):-len(".astro")]
    if u.endswith("/index"):
        u = u[:-len("/index")]
    res[u] = d
json.dump(dict(sorted(res.items())), open(os.path.join(racine, "src/data/lastmod.json"), "w"), indent=0)
print(len(res), "pages datees")
