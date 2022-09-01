exports.bind = (server) => {
  server.get("/", (_, res) => {
    res.send("hello world");
  });

  server.get("/alex", (_, res) => {
    res.send("Hey Alex!");
  });
};
