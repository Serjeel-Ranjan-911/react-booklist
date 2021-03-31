const LandingPage = () => {
	return (
		<div className="">
			<div className="">LOGO</div>
			<h1 className="">Track Your Reading</h1>
			<div className="">
				<span className=""></span>
				<p className="">Already have an account? Sign in below</p>
				<span className=""></span>
			</div>
			<div>
				<form action=''>
					<div className=''>
						<label for='email' className=''>
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
						<label for='password' className=''>
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
