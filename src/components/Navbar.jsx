import React, { useState } from "react"
import logo from "../resources/images/techcitidels.png"
import avatar from "../resources/images/Avatar.png"
import { RiAppsLine, RiArrowDropDownLine } from "react-icons/ri"
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5"
import Profile from "../components/Profile"

const MainNav = () => {
	const [profileDisplay, setProfileDisplay] = useState(false)
	return (
		<div className='nav h-[68px] flex justify-between items-center relative'>
			<div className='flex items-center gap-40'>
				<img src={logo} alt='logo' width={30} />

				<div className='flex items-center gap-12 font-semibold'>
					<span className='font-semibold opacity-50 text-sm cursor-pointer hover:opacity-80'>Overview</span>
					<span className='font-semibold opacity-50 text-sm cursor-pointer hover:opacity-80'>Analytics</span>
					<span className='font-semibold opacity-50 text-sm cursor-pointer hover:opacity-80'>Community</span>
					<span className='font-semibold opacity-50 text-sm cursor-pointer hover:opacity-80'>Messages</span>
				</div>
			</div>
			<div className='flex items-center gap-16'>
				<div className='flex items-center gap-3'>
					<span className='text-blue-400'>
						<RiAppsLine />
					</span>
					<span className='font-semibold opacity-50 text-sm cursor-pointer hover:opacity-80'>Courses</span>
				</div>
				<div className='flex items-center gap-6'>
					<span className='text-xl cursor-pointer hover:opacity-80'>
						<IoSettingsOutline />
					</span>
					<span className='font-semibold opacity-60 text-xl cursor-pointer hover:opacity-80'>
						<IoNotificationsOutline />
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<span>
						<img src={avatar} alt='avatar' width={30} />
					</span>
					<span
						className='text-3xl cursor-pointer hover:opacity-80'
						onClick={() => {
							setProfileDisplay((prev) => !prev)
						}}>
						<RiArrowDropDownLine />
					</span>
				</div>
			</div>
			{profileDisplay && (
				<div className='absolute top-[68px] right-0 z-10'>
					<Profile />
				</div>
			)}
		</div>
	)
}

export default MainNav
