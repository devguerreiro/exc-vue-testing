import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("render a greeting", () => {
    const wrapper = mount(Greeting);
    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
