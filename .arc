@app
sing-4ci

@static

@http
get /login
get /logout

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
