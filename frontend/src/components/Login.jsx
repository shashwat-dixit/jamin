import { Form, Navigate } from 'react-router-dom';

export default function Login() {
    return (
        <div className='flex flex-col'>
            <Form method='post' className='flex flex-col'>
                <input className="px-8 py-4 my-4 rounded" type="email" id="user_email" name="user_email" placeholder="Email Address" />
                <input className="px-8 py-4 my-4 rounded" type="password" id="user_password" name="user_password" placeholder="Password"/>
                <button type="submit">Sign In</button>
            </Form>
            <h1 className="mt-4 text-xl px-8 my-3">Don&apos;t have an account?</h1>
            <Navigate to="/signup">Sign Up</Navigate>
        </div>
    );
}
