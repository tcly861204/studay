function route(pathname, response) {
  if (pathname === '/') {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }
}

exports.route = route;