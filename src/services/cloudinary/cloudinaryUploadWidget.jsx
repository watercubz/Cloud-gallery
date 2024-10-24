import useCloudUpload from '../../hooks/useCloudUpload';

export default function CloudinaryUploadWidget() {
  const { error, handleChange, uploading } = useCloudUpload();
  return (
    <div className="grid place-items-center mr-4">
      <label className="flex items-center">
        <span className="me-2 mb-2 text-sm cursor-pointer hover:text-emerald-400">
          Upload files
        </span>
        <input
          type="file"
          accept="image/png, image/jpeg, images/webp"
          onChange={handleChange}
          className="hidden"
        />
      </label>
      {uploading && <p className="text-blue-500">Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
