import { defaultFormatter } from "./formatters";

describe("test power_grid", function () {
  it("test power-grid.defaultFormatter for Integer", function (done) {
    expect(defaultFormatter(1, "Integer")).toBe("1");
    done();
  });

  it("test defaultFormatter for Float", function (done) {
    expect(defaultFormatter(1.1, "Float")).toBe("1.1");
    done();
  });

  it("test defaultFormatter for Decimal", function (done) {
    expect(defaultFormatter(1.2, "Decimal")).toBe("1.2");
    done();
  });

  it("test defaultFormatter for Date", function (done) {
    expect(defaultFormatter(new Date(), "Date")).toBe("4/25/2023");
    done();
  });

  it("test defaultFormatter for Boolean", function (done) {
    expect(defaultFormatter(true, "Boolean")).toBe("Yes");
    expect(defaultFormatter(false, "Boolean")).toBe("No");
    done();
  });

  it("test defaultFormatter for Object", function (done) {
    expect(defaultFormatter({ a: 1 }, "Object")).toBe(JSON.stringify({ a: 1 }));
    done();
  });

  it("test defaultFormatter for String", function (done) {
    expect(defaultFormatter("str", "String")).toBe("str");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(defaultFormatter("str", "Unknown")).toBe("str");

    done();
  });
});
