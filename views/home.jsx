const React = require("react");
const Def = require("./default");
function home() {
  return (
    <Def>
      <main>
        <h1>REST-rant</h1>
        <div>
          <img src="/images/ramenpic.jpg" alt="Bowl o Ramen" id="ramenpic"/>
        </div>
        <div>
          Photo by <a href="https://unsplash.com/@goodeats_yqr">GoodEats YQR</a>{" "}
          on <a href="https://unsplash.com/">Unsplash</a>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}
module.exports = home;