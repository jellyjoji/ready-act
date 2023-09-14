import { useState, forwardRef } from "react";
import { imgUpload } from '../../assets/icons/svg-icons'

function FileUpload({ }, ref) {

  const [fileImages, setFileImages] = useState(null);

  const handleFileUpload = (e) => {
    const { files } = e.target;
    const fileImages = Array.from(files).map((file) => ({
      image: URL.createObjectURL(file),
      label: file.name,
    }));
    setFileImages(fileImages);

    // img file const 
    // console.log(photoRef.current.files);
    // const photoValue = photoRef.current.files;

    // if (!photoValue[0]) {
    //   // toast message here
    // }
  };

  return (<>
    <div >
      <label htmlFor="photo" className="sr-only">
        사진 등록
      </label>
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/webp,image/avif"
        name="photo"
        id="photo"
        ref={ref}
        onChange={handleFileUpload}
        className=""
      />
      <div className="" >
        {!fileImages && (
          <img
            src={imgUpload}
            alt="photo"
            className="w-24"
          />
        )}
        {fileImages?.map((file) => {
          return (
            <img
              key={file.label}
              src={file.image}
              alt={file.label}
              className=""
            />
          );
        })}
      </div>
    </div>
  </>)
}
export default forwardRef(FileUpload);