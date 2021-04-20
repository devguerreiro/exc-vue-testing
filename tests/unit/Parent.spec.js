import { mount } from "@vue/test-utils";
import "@testing-library/jest-dom";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue"
import ParentWithManyChildren from "@/components/ParentWithManyChildren"

describe("Parent", () => {
  it("should not render a span", () => {
    const wrapper = mount(Parent);

    expect(wrapper.find("span").element).not.toBeVisible();
  });

  it("should render a span", () => {
    const wrapper = mount(Parent, {
      data: () => ({
        showSpan: true
      })
    })

    expect(wrapper.find("span").element).toBeVisible()
  })

  it("should not render Child component", () => {
    const wrapper = mount(Parent)

    expect(wrapper.findComponent(Child).exists()).toBe(false)
  })

  it("should render a Child component", () => {
    const wrapper = mount(Parent, {
      data: () => ({
        showChild: true
      })
    })

    expect(wrapper.findComponent({name: "Child"}).exists()).toBe(true)
  })

  it("should renders many children", () => {
    const wrapper = mount(ParentWithManyChildren)

    expect(wrapper.findAllComponents(Child).length).toBe(3)
  })
});
