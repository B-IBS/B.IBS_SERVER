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
        },
        crises(parent, args, context, info) {
            return {
                code: "0",
                success: true,
                message: "Success",
                data: [{date: Date, intensity: 1}, {date: Date, intensity: 5}, {date: Date, intensity: 7}, {date: Date, intensity: 3}, {date: Date, intensity: 9}, {date: Date, intensity: 3}]
            }
        },

    },
};
export default resolverMap;

