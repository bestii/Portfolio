import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { lerp } from "./use-spotlight-position";
import { SpotlightGradient } from "./SpotlightGradient";

describe("lerp", () => {
  it("moves from current toward target", () => {
    expect(lerp(0, 1, 0.5)).toBe(0.5);
    expect(lerp(0.5, 1, 0.5)).toBe(0.75);
  });

  it("returns target when factor is 1", () => {
    expect(lerp(0, 100, 1)).toBe(100);
  });

  it("returns current when factor is 0", () => {
    expect(lerp(50, 100, 0)).toBe(50);
  });

  it("handles negative values", () => {
    expect(lerp(-10, 10, 0.5)).toBe(0);
  });
});

describe("SpotlightGradient integration", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
    vi.useFakeTimers();
    document.documentElement.setAttribute("data-theme", "dark");
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("renders a background-image on mount", () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    const { container } = render(<SpotlightGradient />);
    const spotlight = container.firstChild as HTMLElement;

    act(() => {
      vi.advanceTimersByTime(16);
    });

    expect(spotlight.style.backgroundImage).toContain("radial-gradient");
  });

  it("stays at center on touch devices", () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true });

    const { container } = render(<SpotlightGradient />);
    const spotlight = container.firstChild as HTMLElement;

    expect(spotlight.style.backgroundImage).toContain("radial-gradient");
    expect(spotlight.style.backgroundImage).toContain("50%");
  });

  it("responds to mouse movement and updates background-image", () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    const { container } = render(<SpotlightGradient />);
    const spotlight = container.firstChild as HTMLElement;

    act(() => {
      vi.advanceTimersByTime(16);
    });

    // Move mouse to bottom-right area (900/1024 ≈ 88%, 700/768 ≈ 91%)
    window.dispatchEvent(
      new MouseEvent("mousemove", { clientX: 900, clientY: 700 }),
    );

    act(() => {
      vi.advanceTimersByTime(100);
    });

    const bg = spotlight.style.backgroundImage;
    expect(bg).toContain("radial-gradient");

    // Extract the first percentage in the gradient (the x position)
    const xMatch = bg.match(/at ([\d.]+)%/);
    expect(xMatch).not.toBeNull();
    const xVal = Number.parseFloat(xMatch![1]);
    expect(xVal).toBeGreaterThan(50);
  });

  it("drifts back to center after idle timeout", () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    const { container } = render(<SpotlightGradient />);
    const spotlight = container.firstChild as HTMLElement;

    act(() => {
      vi.advanceTimersByTime(16);
    });

    window.dispatchEvent(
      new MouseEvent("mousemove", { clientX: 900, clientY: 700 }),
    );

    act(() => {
      vi.advanceTimersByTime(300);
    });

    const bgAfterMove = spotlight.style.backgroundImage;
    const xMatch = bgAfterMove.match(/at ([\d.]+)%/);
    expect(xMatch).not.toBeNull();
    expect(Number.parseFloat(xMatch![1])).toBeGreaterThan(75);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    const bgAfterIdle = spotlight.style.backgroundImage;
    const xIdleMatch = bgAfterIdle.match(/at ([\d.]+)%/);
    expect(xIdleMatch).not.toBeNull();
    expect(Number.parseFloat(xIdleMatch![1])).toBeLessThan(60);
  });

  it("pauses animation when tab is hidden and resumes when visible", () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    const { container } = render(<SpotlightGradient />);
    const spotlight = container.firstChild as HTMLElement;

    act(() => {
      vi.advanceTimersByTime(16);
    });

    window.dispatchEvent(
      new MouseEvent("mousemove", { clientX: 900, clientY: 700 }),
    );

    act(() => {
      vi.advanceTimersByTime(200);
    });

    const bgBefore = spotlight.style.backgroundImage;
    const xBeforeMatch = bgBefore.match(/at ([\d.]+)%/);
    expect(xBeforeMatch).not.toBeNull();
    const xBefore = Number.parseFloat(xBeforeMatch![1]);

    // Simulate tab hidden
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));

    act(() => {
      vi.advanceTimersByTime(500);
    });

    const bgWhile = spotlight.style.backgroundImage;
    expect(bgWhile).toBe(bgBefore);

    // Simulate tab visible again
    Object.defineProperty(document, "hidden", {
      value: false,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));

    act(() => {
      vi.advanceTimersByTime(100);
    });

    const bgAfter = spotlight.style.backgroundImage;
    const xAfterMatch = bgAfter.match(/at ([\d.]+)%/);
    expect(xAfterMatch).not.toBeNull();
    const xAfter = Number.parseFloat(xAfterMatch![1]);
    expect(xAfter).toBeGreaterThan(xBefore);
  });
});
