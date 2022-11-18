import React from "react"
import { BsDot } from "react-icons/bs"
import { TbCircles, TbStack2 } from "react-icons/tb"
import { IoCalendarOutline } from "react-icons/io5"

const classes = [
	{
		id: "1",
		title: "Design Theory",
		color: "#C47AFF"
	},
	{
		id: "2",
		title: "Illustration",
		color: "#CFF5E7"
	},
	{
		id: "3",
		title: "Research User Objective",
		color: "#FFB3B3"
	},
	{
		id: "4",
		title: "Usability",
		color: "#5A8F7B"
	},
	{
		id: "5",
		title: "Design Thinking",
		color: "#FF8B8B"
	},
	{
		id: "6",
		title: "Journey Mapping",
		color: "#FF7F3F"
	}
]

const Sidebar = () => {
	return (
		<div className='overflow-auto'>
			{
				<>
					<div className='flex justify-between items-center w-[280px]'>
						<div className='gap-3 ml-3 mt-4 flex flex-col text-slate-900'>
							<h1 className='text-[36px] font-bold tracking-normal leading-none'>
								Certified <span className='text-[#C47AFF]'>online</span> courses
							</h1>
							<h1 className='text-[36px] font-bold tracking-normal leading-none'>For Profesionals</h1>
						</div>
					</div>
					<div className='mt-10 rounded-lg bg-[#dde4f051] px-6 py-8'>
						<div className='flex items-center gap-1 mb-6 relative'>
							<h2 className='font-semibold mb-1'>Upcoming Tests</h2>
							<span className='text-xs opacity-50'>6</span>
							<span className='absolute right-0 top-1 text-lg opacity-60'>
								<IoCalendarOutline />
							</span>
						</div>
						<div className='p-3 bg-white rounded-lg drop-shadow-lg'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<div className='w-8 h-8 rounded-lg relative' style={{ backgroundColor: "#ff4e00" }}>
										<span className='absolute top-[50%] left-[50%] translate-x-[-50%] text-sm translate-y-[-50%] font-bold opacity-50'>
											4
										</span>
									</div>
									<p className='font-semibold text-xs'>Journey Mapping</p>
								</div>
								<span className='opacity-70'>
									<TbCircles />
								</span>
							</div>
							<div className='flex items-center gap-1 mt-3'>
								<div className='flex items-center gap-1'>
									<span className='opacity-50'>
										<TbStack2 />
									</span>
									<p className='opacity-70 font-semibold text-xs'>UIUX Design</p>
								</div>
								<div className='text-lg opacity-60'>
									<BsDot />
								</div>
								<p className='opacity-60 text-xs'>20 November</p>
							</div>
						</div>
					</div>
					<div className='mt-10'>
						<h2 className='opacity-70 font-semibold'>Classes</h2>
						<div className='mt-4 flex flex-col gap-2'>
							{classes.map(({ id, title, color }) => (
								<div key={id} className='flex items-center gap-6 rounded-lg hover:bg-[#dde4f051] cursor-pointer'>
									<span className='text-[40px]' style={{ color: color }}>
										<BsDot />
									</span>
									<p className='text-sm'>{title}</p>
								</div>
							))}
						</div>
					</div>
				</>
			}
		</div>
	)
}

export default Sidebar
