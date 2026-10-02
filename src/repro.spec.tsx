import { createDOM } from "@qwik.dev/core/testing";
import { Cmp } from "./cmp";

test("userEvent('qvisible') waits for the visible task it starts", async () => {
  const { render, screen, userEvent } = await createDOM();
  await render(<Cmp />);

  await userEvent("div", "qvisible");

  expect(screen.querySelector("div")!.textContent).toBe("visible");
});

test("control: the visible task does complete eventually", async () => {
  const { render, screen, userEvent } = await createDOM();
  await render(<Cmp />);

  await userEvent("div", "qvisible");
  await new Promise((resolve) => setTimeout(resolve, 200));

  expect(screen.querySelector("div")!.textContent).toBe("visible");
});
