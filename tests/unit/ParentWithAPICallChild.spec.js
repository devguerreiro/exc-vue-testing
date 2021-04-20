import { mount, shallowMount } from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild";
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall";

describe("ParentWithAPICallChild", () => {
  it("should renders with mount and does initialize API call", () => {
    // const wrapper = mount(ParentWithAPICallChild, {
    //   stubs: {
    //     ComponentWithAsyncCall: true
    //   }
    // });
    const wrapper = shallowMount(ParentWithAPICallChild);

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBeTruthy();
  });
});
