import {IResolvers} from 'graphql-tools';
const fodmap = require("./../../fodmap.json");

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`;
        },
      foodMap(parent, args, context, info) {
        return {
          code: "0",
          success: true,
          message: "Success",
          data: fodmap
        }
      }
    },
};
export default resolverMap;
