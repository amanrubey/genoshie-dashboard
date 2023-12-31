import React from 'react'

export default function
    Settings() {
    return (
        <div>

            <form className='flex gap-24'>
                <div class="flex flex-col -mt-16 justify-evenly">
                    <div className='flex gap-6'>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-white ">First name</label>
                            <input type="text" id=" first_name" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                        </div>
                        <div>
                            <label for="last_name" class="block  mb-2 text-sm font-medium text-white">Last name</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                        </div>
                    </div>
                    <div className='flex gap-6 '>
                        <div>
                            <label for="company" class="block - text-sm font-medium text-white d">Company</label>
                            <input type="text" id="company" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="genoshi" required />
                        </div>
                        <div>
                            <label for="phone" class="block - text-sm font-medium text-white ">Phone number</label>
                            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <label for="website" class="block   text-sm font-medium text-white ">Website URL</label>
                            <input type="url" id="website" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="genoshi.com" required />
                        </div>
                        <div>
                            <label for="bio" class="block   text-sm font-medium text-white ">Bio</label>
                            <input type="text" id="bio" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="pdf reader" required />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-evenly '>
                        <div class=" mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-white ">Email address</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
                        </div>
                        <div class="mb-6 mt-1">
                            <label for="password" class="block mb-2 text-sm font-medium text-white ">Password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                        </div>
                        <div class=" mb-6">
                            <label for="confirm_password" class="block mb-2 text-sm font-medium text-white ">Confirm password</label>
                            <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 t text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                        </div>

                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-white ">I agree with the <a href="#" class="text-blue-600 hover:underline ">terms and conditions</a>.</label>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Change</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
