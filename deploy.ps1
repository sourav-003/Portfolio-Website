# Stop on errors
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting deployment..." -ForegroundColor Cyan

# Remove old dist folder
if (Test-Path dist) {
    Remove-Item -Recurse -Force dist
    Write-Host "🗑️ Old dist folder removed." -ForegroundColor Yellow
}

# Build project
Write-Host "🏗️ Building project..." -ForegroundColor Cyan
npm run build

# Navigate into dist folder
Set-Location dist

# Remove any old git history inside dist
if (Test-Path .git) {
    Remove-Item -Recurse -Force .git
    Write-Host "🧹 Old Git history removed from dist." -ForegroundColor Yellow
}

# Initialize new Git repo for deployment only
git init
git add -A
git commit -m "🚀 Deploy to GitHub Pages"

# Rename branch and push ONLY dist contents to gh-pages
git branch -M main
git remote add origin https://github.com/sourav-003/Portfolio-Website.git
git push -f origin main:gh-pages

# Return to root folder
Set-Location ..

Write-Host "✅ Deployment complete! Your site should be live soon." -ForegroundColor Green
