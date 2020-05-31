const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on) => {
  const options = {
    browserifyOptions: {
      extensions: [".js", ".ts"],
      plugin: [["tsify"]],
    },
    typescript: require.resolve("typescript"),
  };

  on("file:preprocessor", browserify(options));
};
