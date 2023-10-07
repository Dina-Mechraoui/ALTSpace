import "./sign.css";

const signup = () => {
  return (
    <div className="sign-page-container">
      <div className="half"></div>
        <div className="half">
          <div className="image"></div>
          <h2>Sign Up</h2>
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
              <p>You already have an account?</p>
              <a href="./login">Sign In</a>
            </div>
            <input type="submit" value="Connect" />
          </form>
      </div>
    </div>
  );
};

export default signup;