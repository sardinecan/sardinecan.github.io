---
title: 'Localhost'
date: '2023-12-31'
author: 'jmorvan'
keywords: 'python ; julia ; localhost'
---

Several light solutions for running a local HTTP server.

## Python 
```bash
python -V
# or
python3 -V
```

### Python 2
```bash
cd /path/to/directory
python -m SimpleHTTPServer <port>
```

### Python 3
```bash
python3 -m http.server <port> --directory /path/to/directory
```

## Julia
First you need to install `LiveServer`. Just enter following command int the the repl:
```julia
pkg> add LiveServer
```

### Repl
```julia
julia> using LiveServer
julia> serve(host="0.0.0.0", port=8001, dir=".")
```

### Terminal
```bash
julia -e 'using LiveServer; serve(host="0.0.0.0", port=8001, dir=".")'
```
### NB
see also HTTP.jl package 
- [Starting a small local web server with HTTP.jl?](https://discourse.julialang.org/t/starting-a-small-local-web-server-with-http-jl/11668)
- [HTTP.jl Repo](https://github.com/JuliaWeb/HTTP.jl)

## PHP
voir [documentation](https://www.php.net/manual/en/features.commandline.webserver.php)

## NodeJS

## Lectures complémentaires
- https://attacomsian.com/blog/local-web-server
- https://gist.github.com/jgravois/5e73b56fa7756fd00b89
- https://medium.com/@mh_sattarian/how-to-run-a-local-server-and-more-c76dbc58d1b5
- https://tannerdolby.com/writing/build-a-minimal-http-server-with-node/
- https://runjs.app/blog/how-to-start-a-node-server
