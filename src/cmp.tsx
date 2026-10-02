import { component$, useSignal, useVisibleTask$ } from "@qwik.dev/core";
import { label } from "./slow-dep";

export const Cmp = component$(() => {
  const text = useSignal("initial");
  useVisibleTask$(() => {
    text.value = label;
  });
  return <div>{text.value}</div>;
});
