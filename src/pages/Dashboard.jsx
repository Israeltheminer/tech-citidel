import React, { useEffect } from "react"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import logo from "../resources/images/techcitidels.png"
import handSign from "../resources/images/hand-okay-sign.png"

import { IoPeopleOutline, IoPlayCircleOutline } from "react-icons/io5"
import { BsDot } from "react-icons/bs"
import { IoCalendarOutline } from "react-icons/io5"
import { AiOutlinePlus } from "react-icons/ai"
import { HiOutlineBookOpen } from "react-icons/hi"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

import "./dashboard.css"

import { useSelector, useDispatch } from "react-redux"
import { getCoursesFetch } from "../redux/courseState"
const Dashboard = () => {
	const courses = useSelector((state) => state.courses.courses)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCoursesFetch())
	}, [dispatch])
	return (
		<div className=''>
			<div className='mx-14 border-b'>
				<Navbar />
			</div>
			<div className='main py-14 flex'>
				<div className='side-bar px-14 border-r border-gray-300'>
					<div className='sticky top-0 left-0'>
						<Sidebar />
					</div>
				</div>
				<div className='px-14 flex flex-col gap-12 w-full'>
					<div className='rounded-3xl px-12 py-8 bg-blue-200 relative hero-banner overflow-hidden'>
						<div className='relative mb-12'>
							<span className='absolute top-1 left-0'>
								<img src={logo} alt='logo' width={16} />
							</span>
							<h2 className='text-lg top-0 left-4 font-semibold mb-9 self absolute'>itidel</h2>
						</div>
						<h1 className='text-[34px] font-semibold mb-2'>Go premium</h1>
						<p className='font-semibold opacity-90 text-sm mb-8'>Explore 500+ courses with lifetime membership</p>
						<button className='text-[#f4f4f4] bg-black/90 rounded-[10px] py-[6px] px-4'>Get Access</button>
						<div className='absolute bottom-10 right-12 flex gap-3'>
							<div className='content-[] w-9 border-white border-b-[3px]'></div>
							<div className='content-[] w-9 border-white border-b-[3px]'></div>
							<div className='content-[] w-9 border-white border-b-[3px]'></div>
						</div>
						<div className='absolute bottom-[-32px] right-32'>
							<img src={handSign} alt='okey' width={300} />
						</div>
					</div>
					<div>
						<div className='flex gap-16 items-start'>
							<div>
								<h3 className='text-xl mb-4 font-semibold'>Progress</h3>
								<div className='relative rounded-xl border border-gray-200 w-[272px] h-40 px-6 py-4'>
									<p className='absolute text-xs opacity-70 top-4 left-6 font-medium'>Hours Spent</p>
									<h1 className='absolute text-[26px] opacity-90 top-12 left-6 font-semibold'>21.2K</h1>
									<span className='absolute py-1 px-2 text-sm bg-indigo-400 text-white rounded-lg bottom-6 left-6'>+18.9%</span>
									<div className='flex items-end absolute right-6 bottom-6 gap-[6px]'>
										<div className='w-6 h-12 rounded-md bg-blue-100'></div>
										<div className='w-6 h-6 rounded-md bg-blue-100'></div>
										<div className='w-6 h-16 rounded-md bg-indigo-500'></div>
										<div className='w-6 h-10 rounded-md bg-blue-100'></div>
									</div>
								</div>
							</div>
							<div className='relative w-[100%]'>
								<h3 className='text-xl mb-4 font-semibold'>To Do List</h3>
								<span className='absolute top-1 right-0 bg-blue-500 text-white p-[2px] rounded-full'>
									<AiOutlinePlus />
								</span>
								<span className='absolute top-1 right-10 text-lg opacity-60'>
									<IoCalendarOutline />
								</span>
								<div className='flex items-center justify-between mb-12'>
									<div className='relative rounded-xl shadow-lg shadow-[#d7e3f9] w-[290px] h-40 px-6 py-4 flex flex-col justify-between'>
										<div className='flex gap-6 items-start'>
											<div>
												<div className='font-semibold w-16 h-16 rounded-full relative border-l progress-circle'>
													<span className='absolute top-[50%] left-[50%] translate-x-[-50%] text-sm translate-y-[-50%]'>80%</span>
												</div>
											</div>
											<div className='mx-auto'>
												<p className='font-semibold opacity-70 text-xs text-[#8de4c6]'>UIUX Design</p>
												<h3 className='font-semibold text-sm'>Research Objective User</h3>
											</div>
											<input type='checkbox' name='pop' id='pop' defaultChecked={true} className='top-6 right-6 scale-110' />
										</div>
										<div className='flex flex-col gap-1'>
											<span className='flex items-center gap-1'>
												<p className='opacity-60 font-semibold text-[13px]'>You marked </p>
												<span className='font-semibold text-[13px]'>3/5</span>
											</span>
											<span className='flex items-center gap-1'>
												<span className='text-[13px] opacity-60 font-semibold'>Subtask are done</span>
												<span className='text-sm'>🎉</span>
											</span>
										</div>
									</div>
									<div className='relative rounded-xl shadow-lg shadow-[#d7e3f9] w-[290px] h-40 px-6 py-4 flex flex-col justify-between'>
										<div className='flex gap-6 items-start'>
											<div>
												<div className='font-semibold w-16 h-16 rounded-full relative border-4 border-[#FF7F3F]'>
													<span className='absolute top-[50%] left-[50%] translate-x-[-50%] text-sm translate-y-[-50%]'>100%</span>
												</div>
											</div>
											<div className='mx-auto'>
												<p className='font-semibold opacity-70 text-xs text-[#FF7F3F]'>UIUX Design</p>
												<h3 className='font-semibold text-sm'>Design Thinking</h3>
											</div>
											<input type='checkbox' name='pop' id='pop' defaultChecked={false} className='top-6 right-6 scale-110' />
										</div>
										<div className='flex flex-col gap-1'>
											<span className='flex items-center gap-1'>
												<p className='opacity-60 font-semibold text-[13px]'>You marked </p>
												<span className='font-semibold text-[13px]'>4/4</span>
											</span>
											<span className='flex items-center gap-1'>
												<span className='text-[13px] opacity-60 font-semibold'>Subtask are done</span>
												<span className='text-sm'>🎉</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='relative'>
							<span className='flex items-start gap-2'>
								<h3 className='text-xl mb-4 font-semibold mr-1'>Courses You're Taking</h3>
								<p className='opacity-60 font-semibold relative top-1'>6</p>
							</span>
							<span className='absolute top-1 right-0 bg-blue-500 text-white p-[2px] rounded-full'>
								<AiOutlinePlus />
							</span>
							<span className='absolute top-1 right-10 text-lg opacity-60'>
								<HiOutlineMagnifyingGlass />
							</span>
							<div className='flex items-center gap-8 mb-12 flex-col'>
								{courses.map(({ id, title, duration, percentage, color, progress, people, bookmarks, plays }) => (
									<div
										key={id}
										className='rounded-lg w-full flex items-center justify-between ease-in-out px-6 transition-all shadow-lg shadow-[#d7e3f9] h-16'>
										<div className='flex items-center gap-4'>
											<div className='w-8 h-8 rounded-lg relative' style={{ backgroundColor: color }}>
												<span className='absolute top-[50%] left-[50%] translate-x-[-50%] text-sm translate-y-[-50%] font-bold opacity-50'>
													{id}
												</span>
											</div>
											<div className='w-60'>
												<p className='font-semibold text-[15px]'>{title}</p>
											</div>
										</div>
										<div className='w-16 flex flex-col gap-1'>
											<span className='font-semibold text-xs opacity-60'>Duration</span>
											<span className='font-semibold text-xs'>{duration}</span>
										</div>
										<div className='flex items-start gap-2'>
											<span className='text-sm font-semibold relative'>{percentage}</span>
											<div className='w-52 self-center'>
												<div className='h-1 rounded-lg bg-blue-300' style={{ width: `${percentage}` }}></div>
											</div>
										</div>
										<div className='text-sm w-4 font-semibold'>{progress}</div>
										<div className='w-40 flex items-center gap-[6px] opacity-60'>
											<div className='flex items-center gap-[3px]'>
												<IoPeopleOutline />
												<span className='text-sm'>{people}</span>
											</div>
											<div className='text-lg'>
												<BsDot />
											</div>
											<div className='flex items-center gap-[3px]'>
												<HiOutlineBookOpen />
												<span className='text-sm'>{bookmarks}</span>
											</div>
											<div className='text-lg'>
												<BsDot />
											</div>
											<div className='flex items-center gap-[3px]'>
												<IoPlayCircleOutline />
												<span className='text-sm'>{plays}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
