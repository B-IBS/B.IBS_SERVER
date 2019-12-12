import {IResolvers} from 'graphql-tools';

const fodmap = require("./../../fodmap.json");

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`;
        },
        fodMap(parent, args, context, info) {
            return {
                code: "0",
                success: true,
                message: "Success",
                data: fodmap
            }
        },
        crises(parent, args, context, info) {
            console.log(args.token);
            return {
                code: "0",
                success: true,
                message: "Success",
                data: [{date: Date, intensity: 1}, {date: Date, intensity: 5}, {date: Date, intensity: 7}, {
                    date: Date,
                    intensity: 3
                }, {date: Date, intensity: 9}, {date: Date, intensity: 3}]
            }
        },
        widget(parent, args, context, info) {
            return {
                code: "0",
                success: true,
                message: "Success",
                data: [
                    {
                        name: "Fodmap",
                        desc: "",
                        image: "https://images.emojiterra.com/twitter/v12/512px/1f346.png",
                        tags: ["food", "validation"]
                    },
                    {
                        name: "Sophrologie",
                        desc: "La sophrologie est une méthode psychocorporelle utilisée comme technique thérapeutique ou vécue comme une philosophie de vie",
                        image: " https://cdn.icon-icons.com/icons2/1576/PNG/512/3561857-bedroom-emoji-emoticon-rest-sleep-sleeping_107895.png",
                        tags: ["Sommeil"]
                    }
                    ,
                    {
                        name: "Sophrologie",
                        desc: "La sophrologie est une méthode psychocorporelle utilisée comme technique thérapeutique ou vécue comme une philosophie de vie",
                        image: " https://cdn.icon-icons.com/icons2/1576/PNG/512/3561857-bedroom-emoji-emoticon-rest-sleep-sleeping_107895.png",
                        tags: ["Sommeil"]
                    }
                ]
            }
        },
        userFromToken(parent, args, context, info) {
            console.log(args.token);
            return {
                code: "0",
                success: true,
                message: "Success",
                data: {
                    firstName: "Romain",
                    lastName: "Urinou",
                    avatar: undefined,
                    sex: "Homme",
                    age: 20,
                    token: args.token,
                    job: "Etudiant",
                }
            }
        },
    },
};
export default resolverMap;

