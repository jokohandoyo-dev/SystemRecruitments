import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <Head title='Login'></Head>
                <div className='hidden md:flex w-1/2 relative bg-black'>
                    <img src="/images/login.jpg" alt="Login Image" className='absolute inset-0 w-full h-full object-cover opacity-70' />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
                    <div className='relative z-10 flex items-end p-10 flex'>
                        <div className='bg-white/10 backdrop-blur-md p-6 rounded-xl text-white max-w-sm ml-24'>
                            <h2 className='text-xl font-semibold mb-2'>
                                Welcome back to the future of hiring
                            </h2>
                            <p className='text-sm text-gray-200'>
                                Precision analytics meets human-centric recruitment.
                                Access your SRMS dashboard to manage top-tier talent with AI driven clarity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6'>
                    <div className='w-full max-w-md'>
                        <div className='mb-8 text-start'>
                            <h1 className='text-2xl font-semibold'>Welcome Back</h1>
                            <p className='text-sm text-gray-500'>Login to your SRMS account</p>
                        </div>
                        {status && (
                            <div className='mb-4 text-sm text-green-600'>
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit} className='space-y-5'>
                            <div>
                                <label className='text-sm text-gray-600'>
                                    EMAIL ADDRESS
                                </label>
                                <input type="email" value={data.email} 
                                    onChange={(e) => setData('email', e.target.value)}
                                    className='mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none'
                                    placeholder='name@company.com'
                                />
                                <InputError message={errors.email} className='mt-2' />
                            </div>
                            <div>
                                <div className='flex justify-between text-sm'>
                                    <label className='text-gray-500'>PASSWORD</label>
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className='text-purple-600 hover:underline'>
                                            Forgot Password?    
                                        </Link>
                                    )}
                                </div>
                                <input type="password" value={data.password} 
                                    onChange={(e) => setData('password', e.target.value)}
                                    className='mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none'
                                    placeholder='••••••••'
                                />
                                <InputError message={errors.password} className='mt-2' />
                            </div>
                            <div className='flex items-center'>
                                <Checkbox
                                    name='remember'
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}/>
                                <span className='ml-2 text-sm text-gray-600'>Remember</span>
                            </div>
                            <button
                                type='submit'
                                disabled={processing}
                                className='w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition'>
                            Login    
                            </button>
                            <div className='flex items-center gap-2'>
                                <div className='flex-1 h-px bg-gray-300'></div>
                                <span className='text-sm text-gray-400'>
                                    OR CONTINUE WITH
                                </span>
                                <div className='flex-1 h-px bg-gray-300'></div>
                            </div>
                            <button
                                type='button'
                                className='w-full border py-2 rounded-lg flex items-center justify-center gap-2 bg-white hover:bg-gray-100'
                            >
                                <img src="/icons/google.png" alt="Logo Google" className='w-5 h-5' />
                                Continue with Google
                            </button>
                            <p className='text-center text-sm text-gray-500'>
                                Don’t have an account?{' '}
                                <Link
                                    href="/register"
                                    className='text-purple-600 hover:underline'
                                >
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
        </div>
    );
}
