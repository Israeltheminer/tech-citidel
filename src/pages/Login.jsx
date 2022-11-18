import React from "react"
import { FcGoogle } from "react-icons/fc"
import { FiAtSign } from "react-icons/fi"
import { HiOutlineLockClosed } from "react-icons/hi"
import { Link } from "react-router-dom"
import logo from "../resources/images/techcitidels.png"
import computer from "../resources/images/computer.png"
import pencil from "../resources/images/pencil-case.png"
import books from "../resources/images/books-pile.png"
import onlineCourses from "../resources/images/online-courses.png"
import diary from "../resources/images/diary.png"
import teacher from "../resources/images/teacher-explaining-using-gestures.png"
import "./login.css"

const Login = () => {
	return (
		<div className='flex min-h-[100vh]'>
			<div className='w-[50%] bg-blue-[#3249ff] relative login-visual'>
				<div className='mt-32 h-96 w-96 mx-auto z-3 relative'>
					{false && (
						<div className=''>
							<img loading='lazy' src={computer} alt='learn-illustration' className='w-full hovering-left' />
							<img loading='lazy' src={pencil} alt='learn-illustration' className='w-20 hovering-left absolute bottom-[-10px] left-0' />
							<div className='rotate-90 absolute bottom-[-50px] right-[-20px]'>
								<img loading='lazy' src={books} alt='learn-illustration' className='w-40 hovering-right ' />
							</div>
						</div>
					)}
					{false && (
						<div>
							<img loading='lazy' src={onlineCourses} alt='learn-illustration' className='w-full hovering-left' />
						</div>
					)}
					{
						<div className=''>
							<img loading='lazy' src={teacher} alt='learn-illustration' className='w-full hovering-right' />
							<img loading='lazy' src={diary} alt='learn-illustration' className='w-48 hovering-right absolute bottom-[-40px] right-[-20px]' />
							<div className='absolute bottom-10 left-[-20px]'>
								<img loading='lazy' src={books} alt='learn-illustration' className='w-28 hovering-left ' />
							</div>
						</div>
					}
				</div>
				<div className='absolute bottom-20 text-white w-[300px] text-center grid grid-cols-1 gap-4 left-[50%] translate-x-[-50%]'>
					{false && (
						<div>
							<div>
								<h2 className='text-2xl font-medium'>Easy to Navigate And Find The Right Path for You</h2>
							</div>
							<span className='text-xs mx-4 opacity-80'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur inventore Asper
							</span>
						</div>
					)}
					{false && (
						<div>
							<div>
								<h2 className='text-2xl font-medium'>Certified Online Courses To Improve your skill</h2>
							</div>
							<span className='text-xs mx-4 opacity-80'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur inventore Asper
							</span>
						</div>
					)}
					<div>
						<div>
							<h2 className='text-2xl font-medium'>Learn At The Comfort Of Your Own Homes</h2>
						</div>
						<span className='text-xs mx-4 opacity-80'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur inventore Asper
						</span>
					</div>
					<div className='flex items-center gap-3 mx-auto'>
						<span className="bg-white/80 rounded-full content-[' '] h-[6px] w-[6px]"></span>
						<span className="bg-white/80 rounded-full content-[' '] h-[6px] w-[18px]"></span>
						<span className="bg-white/80 rounded-full content-[' '] h-[6px] w-[6px]"></span>
					</div>
				</div>
			</div>
			<div className='w-[50%] px-4 relative'>
				<div className='max-w-[400px] mx-auto'>
					<div className='w-full'>
						<div className='mx-auto mt-24 text-center'>
							<img loading='lazy' src={logo} alt='logo' className='w-16 h-16 rounded-full bg-[#e1e6ffbb] p-2 mx-auto mb-8' />
							<h2 className='font-semibold text-3xl opacity-90'>Hello Again!</h2>
							<p className='opacity-60 text-sm mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, accusantium</p>
						</div>
						<div className='mx-auto'>
							<div className='mt-8 flex flex-col gap-4'>
								<div className='relative'>
									<div className='input-container'>
										<input className='floating-input' type='email' placeholder=' ' />
										<label className='floating-label'>Email</label>
									</div>
									<span className='text-xl right-5 top-3 absolute opacity-50'>
										<FiAtSign />
									</span>
								</div>
								<div className='relative'>
									<div className='input-container'>
										<input className='floating-input' type='password' placeholder=' ' />
										<label className='floating-label'>Password</label>
									</div>
									<span className='text-xl right-5 top-3 absolute opacity-50'>
										<HiOutlineLockClosed />
									</span>
								</div>
							</div>
							<div className='flex justify-between items-center'>
								<span className='flex items-center gap-2'>
									<input className='opacity-80' type='checkbox' name='' id='' />
									<p className='opacity-60 text-xs'>Remember me</p>
								</span>
								<span className='text-[#3249ff]/60 text-xs font-semibold cursor-pointer'>Recovery Password</span>
							</div>
							<div className='mt-12 flex flex-col gap-6'>
								<div>
									<Link to='/dashboard'>
										<button className='w-full bg-[#3249ff] px-4 h-12 rounded-md font-medium text-white'>Login</button>
									</Link>
								</div>
								<div>
									<button className='w-full rounded-md px-4 h-12 flex items-center justify-center gap-4 border border-[#e4e4e4]'>
										<span className='text-xl'>
											<FcGoogle />
										</span>
										<span className='opacity-60 font-medium text-sm'>Sign in with Google</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='mx-auto flex items-center gap-4 absolute bottom-20 left-[50%] translate-x-[-50%]'>
					<span className='opacity-60 text-sm font-medium cursor-default'>Don't have an account yet?</span>
					<span className='text-[#3249ff]/60 text-sm font-semibold cursor-pointer'>Sign Up</span>
				</div>
			</div>
		</div>
	)
}

export default Login
