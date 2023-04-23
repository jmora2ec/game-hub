import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImage = (image_url: string) => {
  if (!image_url) return noImage;

  let imageCropped_url = "";
  const index = image_url.indexOf("media/") + "media/".length;

  imageCropped_url =
    image_url.slice(0, index) + "crop/600/400/" + image_url.slice(index);

  return imageCropped_url;
};

export default getCroppedImage;
