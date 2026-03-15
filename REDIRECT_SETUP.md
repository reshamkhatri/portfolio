# Domain Redirect Setup Guide

## Current Setup
- **New Domain**: reshamkc.com.np (or your chosen domain)
- **Old Domain**: [YOUR OLD DOMAIN HERE] (the one you gave to university)

## Method 1: Vercel Dashboard (Recommended)

### Steps:
1. **Add Old Domain to Vercel:**
   - Go to: https://vercel.com/dashboard → Your Project → Settings → Domains
   - Click "Add Domain"
   - Enter your old domain (e.g., `olddomain.com`)
   - Follow DNS setup instructions

2. **Set Up Redirect:**
   - In Vercel Dashboard → Your Project → Settings → Domains
   - Find your old domain
   - Click "..." → "Redirect"
   - Enter your new domain: `reshamkc.com.np`
   - Select "Permanent (301)" for SEO benefits

## Method 2: Using vercel.json (If you prefer code)

Update `vercel.json` with this configuration (replace OLD-DOMAIN with your actual old domain):

```json
{
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "framework": "vite",
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "installCommand": "npm install",
    "redirects": [
        {
            "source": "/(.*)",
            "destination": "https://reshamkc.com.np/$1",
            "permanent": true,
            "has": [
                {
                    "type": "host",
                    "value": "OLD-DOMAIN.com"
                }
            ]
        }
    ]
}
```

## Method 3: Nameserver Configuration (Current Step)

### What to Enter on Nameserver Page:

**Primary name server:** `ns1.vercel-dns.com`  
**Secondary name server:** `ns2.vercel-dns.com`

### Important Steps:
1. **First**: Add domain in Vercel Dashboard → Settings → Domains → "Add Domain"
2. **Then**: Enable Vercel DNS (if option appears)
3. **Finally**: Enter nameservers above in your domain registrar's page

### Alternative: Use CNAME Instead (Easier)
If you don't want to change nameservers, you can use DNS records instead:
- Go to your domain registrar's DNS management
- Add CNAME record:
  - Name: `@` (or leave blank for root)
  - Value: `cname.vercel-dns.com`
- Add A record (if CNAME doesn't work for root):
  - Name: `@`
  - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)

## Method 4: DNS-Level Redirect (If domain is not on Vercel)

If your old domain is hosted elsewhere:

1. **At your domain registrar:**
   - Log into your domain registrar (where you bought the domain)
   - Find DNS settings
   - Add a CNAME record:
     - Name: `@` (or root)
     - Value: `cname.vercel-dns.com`
   - OR use URL forwarding/redirect feature if available

2. **Or use a redirect service:**
   - Services like Cloudflare, Namecheap, or GoDaddy offer URL forwarding
   - Set it to redirect to: `https://reshamkc.com.np`

## Testing

After setup, test the redirect:
1. Visit: `http://OLD-DOMAIN.com`
2. Should automatically redirect to: `https://reshamkc.com.np`
3. Check with: https://www.redirect-checker.org/

## SEO Benefits

- **301 Redirect**: Tells search engines the site has permanently moved
- **Preserves SEO**: Search rankings transfer to new domain
- **Link Preservation**: Old links still work

## Important Notes

- **301 (Permanent)**: Best for SEO, tells search engines this is permanent
- **302 (Temporary)**: Use only if temporary redirect
- **DNS Propagation**: Can take 24-48 hours to fully work globally
- **SSL Certificate**: Vercel automatically provides SSL for both domains
