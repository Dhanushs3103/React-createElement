let root = document.getElementById("root");

let element = (
    <div className="wrapper">
        <h2 classname="text">parent</h2>
        <div className="second-wrapper">
        <div className="first">1</div>
        <div className="second">2</div>
        <div className="third">3</div>
        <div className="fourth">4</div>
        </div>
    </div>
);

let rootElement = ReactDOM.createRoot(root);
rootElement.render(element)