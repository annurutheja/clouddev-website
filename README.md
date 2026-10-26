# CloudDev Website — AWS DevOps Practice Project

A responsive sample company website built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — page structure and content
- `style.css` — responsive layout and styling
- `script.js` — mobile navigation, current year and demo contact form

## Run locally
1. Extract this folder.
2. Open `index.html` in a browser, or use VS Code with the Live Server extension.
3. Test the navigation at desktop and mobile widths.

## Next deployment steps
1. Create a GitHub repository and push these files.
2. Create an S3 bucket for static assets.
3. Configure CloudFront for HTTPS delivery.
4. Set up GitHub Actions with AWS OIDC and least-privilege IAM permissions.
5. Add a workflow that uploads the files to S3 and invalidates CloudFront after successful deployment.

## Notes
- The contact form is front-end only. It does not send or store messages.
- This is a fictional sample brand, not a real business.
- Review AWS pricing before creating resources.
