import "./log.css";

const login = () => {
  return (
    <div className="login-page-container">
      <div className="half">
        <div className="image"></div>
            <h2>Log In</h2>
            <form action="" method="post">
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Adress"
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />
            <div className="toLogIn">
                <p>You don’t have an account?</p>
                <a href="./signup">Sign Up</a>
            </div>
            <input type="submit" value="Connect" />
            </form>
        </div>
      <div className="half sign"></div>
    </div>
  );
};
export default login;