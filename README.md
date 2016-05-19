# Progressor
Shows progress

## Dev

#### Setup github oauth app
- Log in to your github account
- Settings
- OAuth applications
- Developer applications
- Register a new application
  - Set callback url to be `http://localhost:3000/dashboard` (matches GITHUB_REDIRECT_URL in Envfile)
  - Fill in whatever you want for the rest of the fields
  - Register
- Copy Client Id (as GITHUB_CLIENT_ID) and Client Secret (as GITHUB_CLIENT_SECRET) into .env

.env file
```
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

#### Install
- bundle install
- bundle exec rake db:create db:migrate

#### Run
- bundle exec rails s
