/**
 * StateManager class is responsible for managing the state of the grid.
 * It notifies the subscribers when the state is updated.
 *
 * @class StateManager
 * @example
 * const stateManager = new StateManager();
 *
 * stateManager.subscribe((state) => {
 *  console.log(state);
 * });
 *
 * stateManager.setState({ sorting: "desc" });
 *
 * // Output:
 * // { sorting: "desc" }
 *
 * stateManager.setState({ sorting: "asc" });
 *
 * // Output:
 * // { sorting: "asc" }
 *
 * stateManager.setState({ sorting: "asc", filter: { Name: "test" } });
 *
 * // Output:
 * // { sorting: "asc", filter: { Name: "test" } }
 *
 * stateManager.setState({ sorting: "asc", filter: { Name: "test" }, grouping: { Name: "test" } });
 *
 * // Output:
 * // { sorting: "asc", filter: { Name: "test" }, grouping: { Name: "test" } }
 */
class StateManager {
  private state: Grid.StateManager = {
    rawData: [],
    data: [],
    sorting: null,
    filter: null,
    grouping: null
  };

  private subscribers = new Set<(state: Grid.StateManager) => void>();

  public subscribe(fn: (state: Grid.StateManager) => void) {
    this.subscribers.add(fn);
  }

  public unsubscribe(fn: () => void) {
    this.subscribers.delete(fn);
  }

  public notify() {
    this.subscribers.forEach((fn) => fn(this.state));
  }

  public setState(state: Partial<Grid.StateManager>) {
    this.state = { ...this.state, ...state };
    this.notify();
  }

  public getState(): Grid.StateManager {
    return Object.freeze(this.state);
  }
}

export { StateManager };
