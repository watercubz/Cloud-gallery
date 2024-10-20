// getBase64 permite leer informacion guardada en buffer y si hay una error lo eyectamos
export const getBase64 = (file) =>
  new Promise(function (resolve, reject) {
    let render = new FileReader();
    render.readAsDataURL(file);
    render.onload = () => resolve(render.result);
    render.onerror = (error) => reject("error", error);
  });
