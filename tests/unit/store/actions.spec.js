import actions from "@/store/actions.js";

describe("authenticate", () => {
  it("should authenticate a user", async () => {
    const commit = jest.fn();
    const username = "alice";
    const password = "password";

    await actions.authenticate({ commit }, { username, password });

    expect(commit).toHaveBeenCalledWith("SET_AUTHENTICATED", {
      token: "123",
      refresh_token: "321"
    });
  });

  it("should catches an error", async () => {
    await expect(
      actions.authenticate({ commit: jest.fn() }, {})
    ).rejects.toThrow("API Error occurred.");
  });
});
