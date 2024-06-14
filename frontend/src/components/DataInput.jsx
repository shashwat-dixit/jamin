
export default function DataInput() {
    return (
        <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="btn m-1">Add Content</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Input Video URL</a></li>
                <li><a>Upload PDF File</a></li>
            </ul>
        </div>
    )
}
