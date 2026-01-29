const { port, app } = require("./app");


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});