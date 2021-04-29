import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ComponentWithButtons from "@/components/ComponentWithButtons.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: jest.fn()
};

const store = new Vuex.Store({ mutations });

describe("ComponentWithButtons", () => {
  it("should commits a mutation when a button is clicked", async () => {
    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    });

    await wrapper.find(".commit").trigger("click");

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: "Test Commit" }
    );
  });

  it("should dispatches an action when a button is clicked", async () => {
    const mockStore = {
      dispatch: jest.fn()
    };
    const wrapper = mount(ComponentWithButtons, {
      mocks: {
        $store: mockStore
      }
    });

    await wrapper.find(".dispatch").trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalledWith("testAction", {
      msg: "Test Dispatch"
    });
  });

  it("should dispatch a namespaced action when button is clicked", async () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();

    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    });

    await wrapper.find(".namespaced-dispatch").trigger("click");

    expect(store.dispatch).toHaveBeenCalledWith(
      "namespaced/very/deeply/testAction",
      {
        msg: "Test Namespaced Dispatch"
      }
    );
  });
});
