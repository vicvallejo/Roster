const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// Manager Tests

test("Returns Office Number", () => {
  const testValue = 200;
  const e = new Manager("Victor", 40, "victor@victor.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("XXXX", 40, "victor@victor.com", 200);
  expect(e.getRole()).toBe(testValue);
});

