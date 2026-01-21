# Security Policy

## Security Measures Implemented

### Server-Side Security

#### HTTP Security Headers (Helmet)

- **Content-Security-Policy (CSP)**: Restricts resource loading to trusted domains
- **HSTS**: Enforces HTTPS in production (1 year max-age, includes subdomains)
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Legacy XSS filter enabled
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Disables unnecessary browser features

#### Rate Limiting

- **General API**: Rate limited per IP
- **YouTube API**: Stricter limits to preserve quota
- **Contact Form**: Limited submissions to prevent spam

#### Input Validation & Sanitization

- All user inputs validated with Zod schemas
- String inputs sanitized to prevent XSS attacks
- HTML tags stripped from user-provided content
- Email addresses normalized (lowercase, trimmed)
- Request body size limited

#### CORS Configuration

- Allowed origins explicitly defined
- Credentials support enabled
- Methods restricted to necessary HTTP verbs

#### Error Handling

- Production errors don't leak stack traces
- Generic error messages for 500-level errors
- All errors logged server-side with timestamps

### Client-Side Security

#### Form Handling

- Client-side validation with Zod (matches server)
- Rate limit error handling
- Form reset on successful submission

#### Content Security

- CSP configured with trusted script sources
- External resources loaded over HTTPS only
- YouTube embeds restricted to trusted domains

## Environment Variables

Required environment variables (never commit these):

- `YOUTUBE_API_KEY`: Google API key for YouTube Data API
- `YOUTUBE_CHANNEL_ID`: Combat Zone MMA channel ID
- `NODE_ENV`: Set to "production" in production

## Reporting Security Issues

If you discover a security vulnerability, please email security@combatzonemma.com rather than opening a public issue.

## Best Practices for Development

1. **Never commit secrets** - Use environment variables
2. **Validate all inputs** - Both client and server side
3. **Sanitize outputs** - Prevent XSS in rendered content
4. **Use parameterized queries** - When database is added
5. **Keep dependencies updated** - Regular `npm audit` checks
6. **Review PRs for security** - Check for hardcoded secrets

## Audit Checklist

- [ ] `npm audit` passes with no high/critical vulnerabilities
- [ ] All environment variables properly configured
- [ ] Rate limiting functional
- [ ] Error messages don't leak sensitive info
- [ ] CSP headers properly set
- [ ] HTTPS enforced in production
