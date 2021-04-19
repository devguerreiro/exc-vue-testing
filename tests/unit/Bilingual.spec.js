import { mount } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";

describe("Bilingual", () => {
  it("should renders successfully", () => {
    // default mock configured
    const wrapper = mount(Bilingual);

    console.log(wrapper.html());
  });
});
