const filterList = ["Pending", "Accepted", "AWB Created", "Ready to Ship", "Shipped", "Completed", "Cancelled"]

export default function Filter() {
   

    return (
        <div className='project-filter'>
            <nav>
                {filterList.map((f) => (
                    <button key={f}
                    >
                        {f}
                    </button>
                ))}
            </nav>
        </div>
    )
}