import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.post("/deploy", (req, res) => {
    const repoUrl = req.body.repoUrl;
    console.log(repoUrl);
    res.json({});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});