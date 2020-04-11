@app
sing-4ci

@static

@http
get /keyboards
get /keyboards/:keyboardID
post /keyboards
post /keyboards/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
