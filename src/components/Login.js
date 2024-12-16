export default function Login() {
    return (
        <div className="login-form">
            <form>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Enter your username" />
                <br />
                <label>Password:</label>
                <input type="password" name="password" placeholder="Enter your password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}