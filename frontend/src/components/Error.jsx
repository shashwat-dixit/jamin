
export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Error</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end mt-3">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </div>
  )
}
