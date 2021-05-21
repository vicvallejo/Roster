const Intern = require("../lib/Intern");

// Intern Tests

test("Returns School for Intern", () => {
  const testValue = "TEC de Monterrey";
  const e = new Intern("Victor", 40, "victor@victor.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Victor", 40, "victor@victor.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

