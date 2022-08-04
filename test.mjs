import st from "http-status-codes";

console.log("import (mjs) test\n");

console.log("404? ", st.StatusCodes.NOT_FOUND);
console.log("Not Found? ", st.getReasonPhrase(st.StatusCodes.NOT_FOUND));

import { StatusCodes } from "http-status-codes";

console.log("404? ", StatusCodes.NOT_FOUND);
