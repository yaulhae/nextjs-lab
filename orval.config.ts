module.exports = {
  "petstore-file-transfomer": {
    output: {
      mode: "tags-split",
      target: "./src/api/petstore.ts",
      schemas: "./src/model",
      client: "react-query",
      httpClient: "axios",
    },
    input: {
      target: "./petstore.yaml",
    },
  },
};
``;
