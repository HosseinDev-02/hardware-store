export default function Home() {
    return (
      <div className="bg-white h-full w-full rounded-4xl grid grid-cols-12 gap-10 shadow-[0_0_10px_4px_rgba(0,0,0,5%)]">
      {/* sidebar */}
      <div className="bg-white h-full w-full col-span-2 rounded-r-2xl p-4 border-l border-border">
        منو
      </div>
    
      {/* content */}
      <div className="bg-white col-span-10 w-full rounded-l-2xl p-4 flex flex-col">
        {/* header */}
        <div className="w-full h-20 bg-white shadow-[0_0_10px_4px_rgba(0,0,0,5%)] rounded-2xl mb-8">
          هدر
        </div>
    
        {/* body */}
        <div className="w-full flex-1 flex flex-col">
          {/* boxes */}
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32">
              بادی
            </div>
            <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32">
              بادی
            </div>
            <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32">
              بادی
            </div>
          </div>
    
          {/* table */}
          <div className="w-full flex-1 mt-8 bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] overflow-hidden">
            بادی (table)
          </div>
        </div>
      </div>
    </div>
    
    );
}
