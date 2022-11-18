import React from "react"
import avatar from "../resources/images/Avatar.png"

const Profile = () => {
	return (
		<div className='p-6 bg-[#f7f7f7] rounded-lg'>
			<div className='text-center'>
				<div className='w-fit mx-auto rounded-full user-progress'>
					<img src={avatar} width={60} alt='user' />
				</div>
				<h2 className='text-lg font-semibold'>Akinbiyi Jason</h2>
				<p className='opacity-60 text-xs'>@akinbiyi_jason</p>
			</div>
			<div className='flex h-12 w-full bg-[#bfbfbf] items-center px-6 py-3 rounded-lg gap-5 mt-6'>
				<div className='flex flex-col gap-1 items-center'>
					<span className='text-xs opacity-60'>Rank</span>
					<span className='text-sm'>135</span>
				</div>
				<div className='flex flex-col gap-1 items-center'>
					<span className='text-xs opacity-60'>Average Act.</span>
					<span className='text-sm'>3,2</span>
				</div>
				<div className='flex flex-col gap-1 items-center'>
					<span className='text-xs opacity-60'>Courses</span>
					<span className='text-sm'>6</span>
				</div>
			</div>
		</div>
	)
}

export default Profile
