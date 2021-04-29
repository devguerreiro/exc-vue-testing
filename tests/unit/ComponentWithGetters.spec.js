import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ComponentWithGetters from "@/components/ComponentWithGetters.vue";

// boilerplate
const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  state: {
    firstName: "Alice",
    lastName: "Doe"
  },

  getters: {
    fullname: state => `${state.firstName} ${state.lastName}`
  }
});

describe("ComponentWithGetters", () => {
  it("should renders a fullname using a real Vuex getter", () => {
    const wrapper = mount(ComponentWithGetters, {
      store,
      localVue
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });

  // easy way and I guess that is the best
  it("should renders a fullname using computed mounting options", () => {
    const wrapper = mount(ComponentWithGetters, {
      computed: {
        fullname: () => "Alice Doe"
      }
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });
});
