import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

const msg = "submit";
const factory = propsData => {
  return mount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  });
};

describe("SubmitButton", () => {
  describe("does not have admin privileges", () => {
    it("should render a message", () => {
      const wrapper = factory();

      expect(wrapper.find("span").text()).toBe("Not Authorized");
    });
  });

  describe("does have admin privileges", () => {
    it("should render a message", () => {
      const wrapper = factory({
        isAdmin: true
      });

      expect(wrapper.find("span").text()).toBe("Admin Privileges");
    });
  });
});
