import app from "./config/config.js";

const port = process.env.APP_PORT || 8081;

app.http.listen(port, () => { console.log(`Server running on port ${port}`) });
