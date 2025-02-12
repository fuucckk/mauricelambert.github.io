from os.path import splitext, basename, getmtime
from datetime import datetime
from glob import glob

sitemaps = []
readmes_pyz = []
readmes_html = []

sitemap_url = """  <url>
    <loc>https://mauricelambert.github.io/{path}</loc>
    <lastmod>{date}</lastmod>
  </url>"""

link_html = ' - [{module} Documentation](https://mauricelambert.github.io/{path})'
link_pyz = ' - [{module} Python Executable](https://mauricelambert.github.io/{path})'

with open("sitemap.xml") as file:
    sitemap = file.read()

with open("README.md") as file:
    readme = file.read()

for file in glob("**", recursive=True):
    filepath, extension = splitext(file)
    if extension in (".html", ".pdf", ".md", ".txt", ".pyz"):
        filename = basename(file)
        if filename not in readme:
            if extension == ".html":
                readmes_html.append(link_html.format(module=basename(filepath), path=file.replace("\\", "/")))
            elif extension == ".pyz":
                readmes_pyz.append(link_pyz.format(module=basename(filepath), path=file.replace("\\", "/")))
        if filename not in sitemap:
            date = datetime.fromtimestamp(getmtime(file)).strftime("%Y-%m-%d")
            sitemaps.append(sitemap_url.format(date=date, path=file.replace("\\", "/")))

print("\n".join(sitemaps))
print("\n".join(readmes_pyz))
print("\n".join(readmes_html))