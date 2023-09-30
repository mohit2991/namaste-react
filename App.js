const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child", key: "1" }, [
            React.createElement("h1", { key: "1" }, "It's h1 tag"),
            React.createElement("h2", { key: "2" }, "It's h2 tag")
        ]),
        React.createElement("div", { id: "child2", key: "2" }, [
            React.createElement("h3", { key: "1" }, "It's h3 tag"),
            React.createElement("h4", { key: "2" }, "It's h4 tag")
        ]),
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);