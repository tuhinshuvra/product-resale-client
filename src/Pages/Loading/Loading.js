import React from 'react';

const Loading = () => {
    return (
        <div className=' justify-center my-16'>
            <button type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-24 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                <p className=' progress'></p>
            </button>

        </div>
    );
};

export default Loading;