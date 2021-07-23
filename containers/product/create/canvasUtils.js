const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })



/**
* This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
* @param {File} image - Image File url
* @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
* @param {number} rotation - optional rotation parameter
*/
export async function getCroppedImg(imageSrc, pixelCrop,) {

  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')


    canvas.width = pixelCrop.width,
    canvas.height = pixelCrop.height,


    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );






  let prev = []
  prev = [...prev, canvas.toDataURL('image/jpeg')]
  let listImage = window.localStorage.getItem("image");
  let xx = JSON.parse(listImage)
  debugger
  xx.push(canvas.toDataURL('image/jpeg'))
  window.localStorage.setItem("image", JSON.stringify(xx));
  debugger
  return true


  // debugger


  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  // return new Promise((resolve) => {
  //     debugger
  //   canvas.toBlob((file) => {
  //     resolve(URL.createObjectURL(file))
  //   }, 'image/png')
  // })
}


// export function getCroppedImg2(){

//   let prev = []
//   prev= [...prev , canvas.toDataURL('image/jpeg')]
//   debugger
//   return prev
// }


