import { Form, Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-80'>
                <Form method='post' className='flex flex-col'>
                    <label className="input input-bordered flex items-center gap-2 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" placeholder="Password" />
                    </label>
                    <div className="flex justify-center mt-4">
                        <button className="btn btn-success w-1/3 mx-2 px-3 py-3 text-center" type="submit">Sign In</button>
                        <button className="btn btn-warning w-1/3 mx-2 px-3 py-3 text-center" type="submit">Forgot Password</button>
                    </div>
                </Form>
                <h1 className="mt-10 text-xl px-8 my-3">Don&apos;t have an account?</h1>
                <button className="btn btn-active w-2/5"><Link className="text-slate-50 hover:text-slate-50" to="/signup">Sign Up</Link></button>
            </div>
        </div>
    );
}
