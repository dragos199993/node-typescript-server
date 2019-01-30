"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const app_1 = require("./app");
const PORT = process.env.PORT || 5000;
app_1.default.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map