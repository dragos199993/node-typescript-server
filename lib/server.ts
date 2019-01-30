import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening on port ${PORT}`);
});
