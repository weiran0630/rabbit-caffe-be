module.exports = {
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: "rabbit-caffe-storage",
      publicFiles: false,
      uniform: false,
      basePath: "",
    },
  },
  //...
};
