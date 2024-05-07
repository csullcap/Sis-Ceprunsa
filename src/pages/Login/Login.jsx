export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("login");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <>
      <h1>Login</h1>
      <form id="login" onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <select name="role">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
