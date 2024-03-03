// external libs
import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import path from "path";

// internal libs
import { generate } from "./utils";
import { getAllFiles } from "./file";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // critical to have this if you want to read JSON in the body of your request

app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl;
    
    //STEP 1: Clone repo from the user in local file
    const id = generate();
    await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

    //STEP 2: Get all files from the repo into an array
    const files = getAllFiles(path.join(__dirname, `output/${id}`));
    console.log(files);

    res.json({
        id
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});