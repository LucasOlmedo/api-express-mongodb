require("dotenv/config");
const app = require("./src/app.js");

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));