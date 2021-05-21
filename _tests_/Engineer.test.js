const Engineer = require("../lib/Engineer");

// Engineer Tests

test("GitHUb account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("XXXX", 40, "victor@victor.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Victor", 40, "victor@victor.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

