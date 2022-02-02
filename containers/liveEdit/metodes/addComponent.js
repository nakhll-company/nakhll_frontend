import { v4 as uuidv4 } from "uuid";

export function addComponent(type, idLanding) {
    let newItem = {};
    if (type == 2) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                image: "",
                url: `/shop/${idLanding[0]}`,
                title: "",
                order: "",
            }, ],
        };
    }
    if (type == 3) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    order: 0,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    order: 1,
                },
            ],
        };
    }
    if (type == 1) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 0,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 1,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 2,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 3,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 4,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 5,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 6,
                },
            ],
        };
    }
    if (type == 4) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 0,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 1,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    video: { id: "", src: "" },
                    order: 2,
                },
            ],
        };
    }
    if (type == 5) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    order: 0,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    order: 1,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    order: 2,
                },
                {
                    image: "",
                    url: `/shop/${idLanding[0]}`,
                    title: "",
                    order: 3,
                },
            ],
        };
    }
    if (type == 6) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                image: "",
                url: "",
                order: 0,
                color: "#F5F5F5",
                title: "",
                titleComponent: "پروفروش ترین",
                products: [],

                subTitle: "ویژه فصل پاییز",
            }, ],
        };
    }

    if (type == 7) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                text: "",
            }, ],
        };
    }

    if (type == 8) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                text: "درباره حجره خود بنویسید تا دیگران از داستان کسب و کار شما باخبر بشوند",
            }, ],
        };
    }
    if (type == 9) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                order: 0,

                products: [],
            }, ],
        };
    }
    if (type == 10) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                order: 0,

                products: [],
            }, ],
        };
    }
    if (type == 13) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                order: 0,

                products: [],
            }, ],
        };
    }

    if (type == 11) {
        newItem = {
            ID: uuidv4(),
            type,
            data: [{
                order: 0,

                video: { id: "", src: "" },
            }, ],
        };
    }

    return newItem;
}