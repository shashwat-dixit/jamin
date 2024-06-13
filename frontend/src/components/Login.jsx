import { Form, Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-1/3'>
                <Form method='post' className='flex flex-col'>
                    <input className="px-8 py-4 my-4 rounded-xl text-center" type="email" id="user_email" name="user_email" placeholder="Email Address" required />
                    <input className="px-8 py-4 my-4 rounded-xl text-center" type="password" id="user_password" name="user_password" placeholder="Password" />
                    <div className="flex justify-center">   
                        <button className="btn btn-success w-1/4 mx-2 px-2 py-3" type="submit">Sign In</button>
                        <button className="btn btn-warning w-1/4 mx-2 px-2 py-3" type="submit">Forgot Password</button>
                    </div>
                </Form>
                <h1 className="mt-10 text-xl px-8 my-3">Don&apos;t have an account?</h1>
                <button className='btn btn-outline btn-secondary'><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
    );
}
