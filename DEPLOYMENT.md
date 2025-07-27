# Deployment Instructions

## Local Development Setup

1. Copy `.env.example` to `.env.local`
2. Fill in your actual EmailJS credentials in `.env.local`
3. Run `npm start`

## Vercel Deployment Setup

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables:

```
REACT_APP_EMAILJS_SERVICE_ID = your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID = your_template_id
REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID = your_autoreply_template_id
REACT_APP_EMAILJS_PUBLIC_KEY = your_public_key
```

4. Redeploy your application

## Security Notes

- Never commit `.env.local` to Git
- The `.env.example` file is safe to commit (contains no real credentials)
- EmailJS public keys are meant to be public, but using environment variables is still best practice
- Make sure all environment variables start with `REACT_APP_` in React applications
