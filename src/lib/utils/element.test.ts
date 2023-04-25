import { createBasicElement } from "./element";

describe("test element scope", function () {
  it("test createBasicElement", function (done) {
    const element = createBasicElement({
      type: "div",
      className: "test"
    });

    expect(element.outerHTML).toBe('<div class="test"></div>');

    done();
  });
});
