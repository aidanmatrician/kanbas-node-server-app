import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import express from 'express';
const app = express();
app.use(express.json());
Lab5(app);
Hello(app);
app.listen(4000);
