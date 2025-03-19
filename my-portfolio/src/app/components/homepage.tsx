import Image from 'next/image'

export function HomePage() {
    return (
        <div className="flex items-start justify-center h-screen flex-col ml-30">
            <div className="space-y-4 text-center">
                       <Image 
                        src="/profile.jpg"
                        width={250}
                        height={250}
                        alt="Profile Picture"
                        className="rounded-3xl w-50 h-50 object-cover object-top border-4 border-gray-800 shadow-lg shadow-black"
                        />
                    <div className="text-md font-bold border-4 break-words whitespace-pre-wrap w-[200px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </div>
                </div>
        </div>
    );
};