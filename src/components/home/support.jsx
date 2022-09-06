function Support(){
    return (
        <div className="supportSection">
            <div className="left supportContent">
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter Your Email" /> 
                    <textarea name="messageContent" id="messageContent" placeholder="Write Your Message"></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <div className="right supportContent"></div>
        </div>
    )
}

function handleSubmit(e){
    e.preventDefault()
}

export default Support
