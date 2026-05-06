import React from "react";

export default function DashboardPage() {
    return (
        <div className="w-full flex-1 flex flex-col">
            {/* boxes */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32 flex items-center justify-center"></div>
                <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32 flex items-center justify-center"></div>
                <div className="bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] w-full h-32 flex items-center justify-center"></div>
            </div>

            {/* table */}
            <div className="w-full flex-1 mt-4 bg-white rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)] overflow-hidden flex items-center justify-center"></div>
        </div>
    );
}
