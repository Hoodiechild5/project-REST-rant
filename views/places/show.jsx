const React = require("react");
const Def = require("../default");

function show(data) {
    let comments = <h3 className="inactive">No comments yet!</h3>;
    let rating = <h3 className="inactive">Not yet rated</h3>;
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += 'â­ï¸'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map((c) => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    {rating}
                </div>
            );
        });
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} width="400px" />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                     <h1>{data.place.name}</h1>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                    </div>
                </div>
            </main>
            <main>
                
                <section>currnely not availbe</section>
                <section>Comment</section>
                {comments}
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author" />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea id="content" name="content"></textarea>
                    </div>
                    <div>
                        <label htmlFor="rating">Star Rating</label>
                        <input type="number" id="stars" name="stars" step="0.5" />
                    </div>
                    <div>
                        <label htmlFor="rant">Rant</label>
                        <input type="checkbox" id="rant" name="rant" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
