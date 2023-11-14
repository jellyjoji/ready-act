import { AppContext } from '@/App';
import imgUpload from '@/assets/icons/imgUpload.svg';
import { useContext, useState } from 'react';

function UploadImage({ value, className, title, ...restProps }) {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [fileImages, setFileImages] = useState(value);

  const handleFileUpload = (e) => {
    const { files } = e.target;
    const fileImages = Array.from(files).map((file) => ({
      image: URL.createObjectURL(file),
      label: file.name,
    }));
    setFileImages(fileImages);
    updateCreateRoomForm('uploadImage', fileImages);
  };

  return (
    <>
      <div className=" mb-14">
        <div className="flex justify-between items-center">
          <p>사진 업로드</p>
          <label htmlFor="photo" className={className}>
            {title}
          </label>
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/webp,image/avif"
            name="photo"
            id="photo"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
            {...restProps}
          />
        </div>
        <div className="flex justify-center border-2 my-4 rounded-lg border-dashed border-line-400">
          {!fileImages && (
            <img src={imgUpload} alt="photo" className="w-20 p-4" />
          )}
          {fileImages?.map((file) => {
            return <img value={fileImages}
              key={file.label} src={file.image} alt={file.label} />;
          })}
        </div>
      </div>
    </>
  );
}

export default UploadImage;
