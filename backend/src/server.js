import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello from the backend!" });
});

app.listen(4000, () => console.log("Server get is running on port 4000"));
