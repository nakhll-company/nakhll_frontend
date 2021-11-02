const list = [
  {
    type: 6,

    ID: "c22xzczxc6da83-9526-465a-97d4-9f112a0dc636",
    slug: "Irana",
    title: "نقش و نگار",
  },
  {
    type: 5,

    ID: "c226da83czxvzxvz-9526-465a-97d4-9f112a0dc636",
    slug: "Irana",
    title: "نقش و نگار",
  },
  {
    type: 0,

    ID: "46153726-<zczxcvxz3f09-4bb1-967c-ebd55c9751ba",
    slug: "mohammadi",
    title: "محمدی",
  },
  {
    type: 1,

    ID: "f3501a78-2b0e-4zxvzxvzx302-9d1c-f282daa5592e",
    slug: "Roya",
    title: "رویا",
  },
  {
    type: 2,

    ID: "c226da83-9526-465a-9zc<zcz7d4-9f112a0dc636",
    slug: "Irana",
    title: "نقش و نگار",
    data: {
      src: "",
      url: "",
    },
  },
  {
    type: 2,

    ID: "c226da83-9526-465a-9zc<zcz7d4-9f112a0dc63sdsadsd6",
    slug: "Irana",
    title: "نقش و نگار",
    data: {
      src: "",
      url: "",
    },
  },
  {
    type: 3,

    ID: "c226da83-9zx526-465a-97d4-9f112a0dc636",
    slug: "Irana",
    title: "نقش و نگار",
  },
  {
    type: 4,

    ID: "c226da83-zxvzx9526-465a-97d4-9f112a0dc636",
    slug: "Irana",
    title: "نقش و نگار",
  },
];

export const allDataLanding = (state = list, action) => {
  switch (action.type) {
    case "UPDATE_PICTURE":
      return {
        allData: [...action.payload],
      };
      break;
    case "UPDATE_URL":
      return {
        allData: [...action.payload],
      };
      break;
    case "Get_DATA":
      return state;
      break;
    default:
      return state;
      break;
  }
};
