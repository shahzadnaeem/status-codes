const st = require("http-status-codes");

console.log("require test\n");

console.log("404? ", st.StatusCodes.NOT_FOUND);
console.log("Not Found? ", st.getReasonPhrase(st.StatusCodes.NOT_FOUND));

const { StatusCodes } = require("http-status-codes");

console.log("404? ", StatusCodes.NOT_FOUND);
