const { PHASE_DEVELOPMENT_SERVER, pH } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "eldin",
        mongodb_password: "kg5aEA6E9os7zZk7",
        mongodb_cluster: "cluster0",
        mongodb_database: "blog",
      },
    };
  }
  return {
    env: {
      mongodb_username: "eldin",
      mongodb_password: "kg5aEA6E9os7zZk7",
      mongodb_cluster: "cluster0",
      mongodb_database: "blog",
    },
  };
};
