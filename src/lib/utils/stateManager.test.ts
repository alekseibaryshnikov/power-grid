import { StateManager } from "./stateManager";

describe("test StateManager", function () {
  it("test should notify subscribers when full state is updated", function (done) {
    const mockObject: Grid.StateManager = {
      rawData: [{ Name: "test" }],
      data: [{ Name: "test" }],
      sorting: "asc",
      filter: { Name: "test" },
      grouping: { Name: "test" }
    };

    const stateManager = new StateManager();

    stateManager.subscribe((state) => {
      Object.keys(mockObject).forEach((key) => {
        expect(state[key as keyof Grid.StateManager]).toEqual(
          mockObject[key as keyof Grid.StateManager]
        );
      });

      done();
    });

    stateManager.setState(mockObject);
  });

  it("test should notify subscribers when partial state is updated", function (done) {
    const mockObject: Grid.StateManager = {
      rawData: [{ Name: "test" }],
      data: [{ Name: "test" }],
      sorting: "asc",
      filter: { Name: "test" },
      grouping: { Name: "test" }
    };

    const stateManager = new StateManager();

    stateManager.setState(mockObject);

    expect(stateManager.getState()).toEqual(mockObject);

    stateManager.subscribe((state) => {
      expect(state.sorting).toEqual("desc");

      done();
    });

    stateManager.setState({ sorting: "desc" });
  });
});
