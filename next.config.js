module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/indexing": { page: "/indexing" },
      "/data-transfer": { page: "/data-transfer" },
      "/reputation-systems": { page: "/reputation-systems" },
      "/payment-channels": { page: "/payment-channels" },
    };
  },
};
