import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ComponentWithVuex from "@/components/ComponentWithVuex.vue";

// boilerplate
const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  state: {
    username: "alice"
  }
});

describe("ComponentWithVuex", () => {
  it("should renders a username using a real Vuex store", () => {
    const wrapper = mount(ComponentWithVuex, {
      store,
      localVue
    });

    expect(wrapper.find(".username").text()).toBe("alice");
  });

  // easy way and I guess that is the best
  it("should renders a username using a mock store", () => {
    const wrapper = mount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: {
            username: "alice"
          }
        }
      }
    });

    expect(wrapper.find(".username").text()).toBe("alice");
  });
});
