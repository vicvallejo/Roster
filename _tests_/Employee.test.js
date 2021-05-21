const Employee = require("../lib/Employee");

// Employee tests

test("Employee object exists", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Employee has a name", () => {
  const name = "Victor";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Employee has id", () => {
  const testValue = 1977;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Employee has email", () => {
  const testValue = "victor@victor.com";
  const e = new Employee("XXXXX", 1, testValue);
  expect(e.email).toBe(testValue);
});


test("getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Victor", 40, "victor@victor.com");
  expect(e.getRole()).toBe(testValue);
});
