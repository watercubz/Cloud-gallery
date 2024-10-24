import { useEffect, useState } from 'react';
import supabase from '../../../utils/supabase';
import { useNavigate } from 'react-router-dom';

export default function ProfileComponent() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickname] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const ImageProfile = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log('error', error);
      }
      console.log(data);

      setImage(data.session.user.user_metadata.avatar_url);
      setName(data.session.user.user_metadata.full_name);
      setNickname(data.session.user.user_metadata.user_name);
    };
    ImageProfile();
  }, []);

  const handleHome = () => {
    navigate('/app');
  };

  useEffect(() => {
    const handleDate = () => {
      const date = new Date();
      const formattedDate = date.toLocaleTimeString().split('T')[0]; // Formato YYYY-MM-DD
      setDate(formattedDate);
    };
    handleDate();

    const intervalId = setInterval(handleDate, 0);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {image ? (
        <div className="grid place-items-center min-h-screen bg-gray-900">
          <button
            className="absolute top-4 left-4 py-2 px-4 text-white transition-colors duration-150 border border-zinc-500 rounded-lg bg-gray-900 hover:bg-gray-800 z-20"
            onClick={handleHome}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div className="flex flex-col items-center justify-center pb-10">
              <img
                className="w-24 h-24 mb-3 mt-2 rounded-full shadow-lg text-white"
                src={image}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-white">
                {nickName}
              </h5>
              <span className="text-sm text-white">{name}</span>
              <button className="flex mt-4 md:mt-6 text-white">{date}</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando imagen de perfil...</p>
      )}
    </>
  );
}
