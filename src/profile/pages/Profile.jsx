import toast from 'react-hot-toast';
import useProfileInfo from '../../hooks/useProfileInfo';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Profile() {
  const { profileData, error, loading } = useProfileInfo();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDeleteAccount = () => {
    toast.error('No diponblie.');
  };

  // const isProfilePage = () => {
  //   location('/connect');
  // };

  const isProfilePage = location.pathname === '/connect';

  if (loading) <p>cargando...</p>;
  if (error) <p>error...</p>;
  return (
    <>
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="relative my-4 w-56 sm:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
            />
            <label className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring">
              Accounts{' '}
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                Accounts
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                Team
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                Others
              </li>
            </ul>
          </div>

          <div
            className={`col-span-2 hidden sm:block ${isProfilePage ? 'w-16' : 'w-64'} transition-all duration-300`}
          >
            <ul>
              {!isProfilePage ? (
                <>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    Accounts
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    <button onClick={() => navigate('/connect')}>
                      Integrations
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    🔒
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    ⚙️
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Email Address</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-600">
                Your email address is <strong>{profileData.email}</strong>
              </p>
            </div>
            <hr className="mt-4 mb-8" />
            <div className="flex items-center">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={profileData.avatarUrl}
                  alt="user photo"
                />
              </div>
              <p className="ml-4 font-semibold">{profileData.nickname}</p>
            </div>
            <div className="flex items-center mt-4">
              <p className="font-medium">
                created_at:{' '}
                <code>
                  {' '}
                  {new Date(profileData.createdAt).toLocaleDateString()}
                </code>
              </p>
            </div>
            <hr className="mt-4 mb-8" />

            <div className="mb-10">
              <p className="py-2 text-xl font-semibold">Delete Account</p>
              <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                </svg>
                Proceed with caution
              </p>
              <p className="mt-2">
                Make sure you have taken backup of your account in case you ever
                need to get access to your data. We will completely wipe your
                data. There is no way to access your account after this action.
              </p>
              <button
                onClick={handleDeleteAccount}
                className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2"
              >
                Continue with deletion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
