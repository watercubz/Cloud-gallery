export default function Logout() {
  const Logout = () => {
    window.location.href = "https://youtu.be/xvFZjo5PgG0?si=jtJdnGME6yvpXKDQ";
  };
  console.log(Logout);

  return (
    <button onClick={Logout} className="hover:text-red-600">
      Logout
    </button>
  );
}
