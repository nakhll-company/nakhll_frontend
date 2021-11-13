const list = [];

export const allDataLanding = (state = list, action) => {
  switch (action.type) {
    case "UPDATE_PICTURE":
      return [...action.payload];

      break;
    case "UPDATE_URL":
      return [...action.payload];

      break;

    case "UPDATE_PRODUCTS":
      return [...action.payload];

      break;
    case "UPDATE_DATA":
      return [...action.payload];

      break;

    case "UPDATE_TITLE_COLOR_SUBTITLE":
      return [...action.payload];

      break;
    default:
      return state;
      break;
  }
};

// const list = [
//   {
//     type: 6,
//     ID: "c22xzczxc6da83-9526-465a-97d4-9f112a0dc636",
//     data:{
//         api:"",
//         url:"",
//   }
//   },
//   {
//     type: 5,
//     ID: "c226da83czxvzxvz-9526-465a-97d4-9f112a0dc636",
//     data: [
//         {
//           src: "",
//           url: "",
//           order: 0,
//         },
//         {
//           src: "",
//           url: "",
//           order: 1,
//         },
//         {
//           src: "",
//           url: "",
//           order: 2,
//         },
//         {
//           src: "",
//           url: "",
//           order: 3,
//         },
//       ],
//   },
//   {
//     type: 1,
//     ID: "f3501a78-2b0e-4zxvzxvzx302-9d1c-f282daa5592e",
//     data: [
//         {
//           src: "",
//           url: "",
//           order: 0,
//         },
//         {
//           src: "",
//           url: "",
//           order: 1,
//         },
//         {
//           src: "",
//           url: "",
//           order: 2,
//         },
//       ],
//   },
//   {
//     type: 2,
//     ID: "c226da83-9526-465a-9zc<zcz7d4-9f112a0dc636",
//     data: [
//       {
//         src: "",
//         url: "",
//         order: "",
//       },
//     ],
//   },

//   {
//     type: 3,
//     ID: "c226da83-9zx526-465a-97d4-9f112a0dc636",
//     data: [
//         {
//           src: "",
//           url: "",
//           order: 0,
//         },
//         {
//           src: "",
//           url: "",
//           order: 1,
//         },
//       ],
//   },
//   {
//     type: 4,
//     ID: "c226da83-zxvzx9526-465a-97d4-9f112a0dc636",
//     data: [
//         {
//           src: "",
//           url: "",
//           order: 0,
//         },
//         {
//           src: "",
//           url: "",
//           order: 1,
//         },
//         {
//           src: "",
//           url: "",
//           order: 2,
//         },
//       ],
//   },
// ];
