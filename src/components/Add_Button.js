'use client'

export const revalidate = 0

export default function Add_Button({ postValue }) {
    return (
        <button onClick={() => {
            postValue()
        }} className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
            <span className="mr-1 font-bold text-lg">Add</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                </path>
            </svg>
        </button>
    )
}
