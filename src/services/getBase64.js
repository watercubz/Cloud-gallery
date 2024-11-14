// getBase64 allows reading information stored in buffer and if there is an error we eject it
export const getBase64 = (file) =>
  new Promise(function (resolve, reject) {
    let render = new FileReader();
    render.readAsDataURL(file);
    render.onload = () => resolve(render.result);
    render.onerror = (error) => reject('error', error);
  });
