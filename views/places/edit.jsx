const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${data.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group">
              <label htmlFor="name">Place Name</label>
              <input
                type="url"
                className="form-control"
                id="name"
                name="name"
                value={data.place.name}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="pic">Place Picture</label>
              <input type="url" className="form-control" id="pic" name="pic" />
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="city">City</label>
              <input
                type="url"
                className="form-control"
                id="city"
                name="city"
                value={data.place.City}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="url"
              className="form-control"
              id="state"
              name="state"
              value={data.place.State}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              type="url"
              className="form-control"
              id="cuisines"
              name="cuisines"
              value={data.place.Cuisines}
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
