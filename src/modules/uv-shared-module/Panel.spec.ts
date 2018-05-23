import {Panel} from "./Panel";

describe('Panel', () => {
  const MockJQueryStatic = jest.fn<JQueryStatic>(() => ({
    subscribe: jest.fn()
  }));

  global.$ = new MockJQueryStatic();

  const MockJQuery = jest.fn<JQuery>(() => ({
    parent: jest.fn(),
    height: jest.fn(),
    width: jest.fn()
  }));
  const mockElement = new MockJQuery();

  const panel = new Panel(mockElement, true, true);
  it('constructs an Object', () => {
    expect(panel).toBeInstanceOf(Panel);
  });
});
