import express from "express";
import routes from "./routes/index";
import { createResizedPath } from "./file";

const app = express();
const PORT = 4000;

app.use(routes);

app.listen(PORT, async (): Promise<void> => {
    await createResizedPath();

    const url: string = `http://localhost:${PORT}`;
    console.log(`Open ${url} to view the project ...`);
});

export default app;
