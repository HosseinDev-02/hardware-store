export default function Home() {
    return (
        <div className="bg-app-bg h-full w-full rounded-4xl grid grid-cols-12 gap-4">
            {/* sidebar */}
            <div className="bg-white h-full w-full col-span-2 rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)]">
                {/* logo */}
                <div className="font-aquire text-4xl font-bold py-4 border-b border-border text-center">HWT</div>
                {/* menu */}
                <div></div>
            </div>

            {/* content */}
            <div className="col-span-10 w-full rounded-l-2xl flex flex-col">
                {/* header */}
                <div className="w-full h-20 bg-white shadow-[0_0_10px_4px_rgba(0,0,0,5%)] rounded-2xl mb-4 flex items-center justify-center">
                    
                </div>

                {/* body */}
                <div className="w-full flex-1 flex flex-col">
                    {/* boxes */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32 flex items-center justify-center">
                            
                        </div>
                        <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32 flex items-center justify-center">
                            
                        </div>
                        <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32 flex items-center justify-center">
                            
                        </div>
                    </div>

                    {/* table */}
                    <div className="w-full flex-1 mt-4 bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] overflow-hidden flex items-center justify-center">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
