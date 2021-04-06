import bookImg from '../images/book.png'

const LandingPage = () => {
	return (
		<div className='container flex flex-col items-center'>
			<div className='flex flex-col items-center'>
				<img className='w-12' src={bookImg} alt='logo' />
				<h1 className='font-inter text-2xl font-bold text-gray-900'>Track Your Reading</h1>
				<div className=''>
					<span className=''></span>
					<p className=''>Already have an account? Sign in below</p>
					<span className=''></span>
				</div>
				<a href='some.link.com'>
					<span>Create Your Account</span>
				</a>
			</div>
			<div>
				<form action=''>
					<div className=''>
						<label htmlFor='email' className=''>
							Email Address
						</label>
						<input
							type='email'
							id='email'
							name='user_email'
							placeholder='john@email.com'
							className=''
						/>
					</div>
					<div className=''>
						<label htmlFor='password' className=''>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='user_password'
							className=''
						/>
					</div>
					<div>
						<input
							type='checkbox'
							name='remember'
							id='remember_check'
							className=''
						/>
						<span className=''>Forgot your password?</span>
					</div>
					<button type='submit' className=''>
						Sign in
					</button>
				</form>
			</div>
		</div>
	)
}

export default LandingPage
