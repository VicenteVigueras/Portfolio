import Image from 'next/image'

export function HomePage() {
    return (
        <div className="flex items-start justify-center h-screen flex-col ml-30">
            <div className="space-y-4 text-center">
                <div className="">
                       <Image 
                        src="/profile.jpg"
                        width={250}
                        height={250}
                        alt="Profile Picture"
                         className="rounded-3xl"
                        />
                    </div>
                    <div className="text-md font-bold ">
                        Description
                    </div>
                </div>
        </div>
    );
};