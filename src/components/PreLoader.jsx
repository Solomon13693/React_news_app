import React from 'react'

function PreLoader() {
    return (
        <div className=" flex items-center justify-center mt-60">
            <div className="loader rotate-180 delay-75 ease-linear animate-ping rounded-full border-8 border-t-8 border-blue-800 h-32 w-32"></div>
        </div>
    )
}

export default PreLoader
