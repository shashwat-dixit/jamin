import { Form } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-1/3'>
            <Form method='post' className='flex flex-col'>
                <input className="px-8 py-4 my-4 rounded" type="text" name="user_name" placeholder="Name" required/>
                <input className="px-8 py-4 my-4 rounded" type="email" name="user_email" placeholder="Email Address" required/>
                <input className="px-8 py-4 my-4 rounded" type="password" name="user_password" placeholder="Password" required/>
                <button type="submit">Sign Up</button> 
            </Form>
            </div>
        </div>
    );
}
