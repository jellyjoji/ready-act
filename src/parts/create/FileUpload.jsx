import imgUpload from '@/assets/icons/imgUpload.svg';
import {forwardRef, useId, useState} from 'react';

function FileUpload({title, labelClassName, ...restProps}, ref) {
  const [fileImages, setFileImages] = useState(null);
  const id = useId();

  const handleFileUpload = (e) => {
    const {files} = e.target;
    const fileImages = Array.from(files).map((file) => ({
      image: URL.createObjectURL(file),
      label: file.name,
    }));
    setFileImages(fileImages);
  };

  return (
    <>
      <div className=" mb-14">
        <div className="flex justify-between items-center">
          <p>사진 업로드</p>
          <label htmlFor={id} className={labelClassName}>
            {title}
          </label>
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/webp,image/avif"
            name="photo"
            id={id}
            ref={ref}
            onChange={handleFileUpload}
            style={{display: 'none'}}
            {...restProps}
          />
        </div>
        <div className="flex justify-center border-2 my-4 rounded-lg border-dashed border-line-400">
          {!fileImages && (
            <img src={imgUpload} alt="photo" className="w-20 p-4" />
          )}
          {fileImages?.map((file) => {
            return <img key={file.label} src={file.image} alt={file.label} />;
          })}
        </div>
      </div>
    </>
  );
}

export default forwardRef(FileUpload);
