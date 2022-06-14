import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addComments, getAllComments } from "./src/comments.js";
import {getOilComments, addOilComments} from "./src/oilComments.js"

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.get("/comments", getAllComments);
app.post("/comments", addComments);
app.get("/oilcomments", getOilComments);
app.post("/oilcomments", addOilComments);



export const api = functions.https.onRequest(app);
