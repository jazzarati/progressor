# Progressor
Shows progress

## Dev

#### Setup github oauth app
- Log in to your github account
- Settings
- OAuth applications
- Developer applications
- Register a new application
-- Set callback url to be `http://localhost:3000/users/dashboard` (matches GITHUB_REDIRECT_URL in Envfile)
-- Register
- Copy Client Id (as GITHUB_CLIENT_ID) and Client Secret (as GITHUB_CLIENT_SECRET) into .env
