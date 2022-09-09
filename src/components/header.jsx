export default function Header(){
    return (
        <>
        <div className="header">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="search" placeholder="Enter Activity Title" />
                <button type="submit">Search</button>
            </form>
        </div>
        </>
    )
}