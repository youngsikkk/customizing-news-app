import React from "react";

const Loading = () => {
    return (
        <div class="shadow rounded-md p-4 max-w-xl w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                    <div class="rounded-lg bg-slate-200 w-full h-70 lg:h-96 mx-auto"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;