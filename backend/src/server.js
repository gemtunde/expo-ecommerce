import express from "express";
import path from "path";
import { ENV } from "./Config/env.js";

const app = express();

const __dirname = path.resolve();

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello from the backend!" });
});

// Serve static files from the React app
if (ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../admin/dist')));
  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, '../admin/', 'dist' , 'index.html'));
  });
}

app.listen(ENV.PORT, () => console.log("Server get is running on port 4000"));
