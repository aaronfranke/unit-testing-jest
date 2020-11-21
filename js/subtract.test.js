const subtract = require("./subtract");

test("Properly subtracts two numbers", () => {
	expect(subtract(1, 2)).toBe(-1);
});
