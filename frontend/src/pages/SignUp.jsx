import { Form, Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className='flex flex-col'>
            <h1 className="text-5xl">SignUp</h1>
            <Form className='flex flex-col'>
                <input type="email" name="user_email" placeholder="email@xyz.com" />
                <input type="password" name="user_password" placeholder="12345678" />
                <button type="submit">Sign In</button>
            </Form>
            <h1 className="text-xl">Don&apos;t have an account?</h1>
            <Link to="/signup">Sign Up</Link> 
        </div>
    );
}
