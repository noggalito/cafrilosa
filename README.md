# cafrilosa webapp

built using [ghost](https://ghost.org/)

## development

```
$ gulp
```

## deployment

```
./deploy.bash production
```

### required env

some env variables are required in order to run smoothly

these setup the database, smtp credentials and google search engine:

- `GCSE_CX` is the Google Custom Search Engine key for the searchbox
- `GOOGLE_SITE_VERIFICATION` is the id Google requires to validate the live site for indexing
- `RECAPTCHA_KEY` is the google's recaptcha key for the client
