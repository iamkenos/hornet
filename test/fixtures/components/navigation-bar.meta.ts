import nav, { TAG } from "@demo/test/fixtures/components/navigation-bar.meta";

export { TAG };
export default {
  default: {
    ...nav.default,
    labels: {
      foo: "bar"
    }
  }
};
