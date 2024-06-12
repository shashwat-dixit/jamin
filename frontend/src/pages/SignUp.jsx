import { Form } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className='flex flex-col'>
            <Form method='post' className='flex flex-col'>
                <input className="px-8 py-4 my-4 rounded" type="email" name="user_name" placeholder="Name" />
                <input className="px-8 py-4 my-4 rounded" type="email" name="user_email" placeholder="Email Address" />
                <input className="px-8 py-4 my-4 rounded" type="password" name="user_password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </Form>
        </div>
    );
}
