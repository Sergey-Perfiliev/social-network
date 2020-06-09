import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile Status", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="Hello girls!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Hello girls!");
  });

  test("after creation span should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="Hello girls!" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.length).not.toBeNull();
  });

  test("after creation input should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="Hello girls!" />);
    const root = component.root;
    
    expect(() => {
        const input = root.findByType("input");
    }).toThrow();
  });

  test("after creation span should be contains correct status", () => {
    const component = create(<ProfileStatus status="Hello girls!" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("Hello girls!");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Hello girls!" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("Hello girls!");
  });

  test("callback should be called", () => {
      const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="Hello girls!" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});