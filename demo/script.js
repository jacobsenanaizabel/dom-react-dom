const render = () => {

  document.getElementById("js").innerHTML = `
    <div class="demo">
      Teste seu campo de digitação em Javascript 
      <input />
      <p>${new Date()}</p>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Teste seu campo de digitação em React ",
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    document.getElementById("react")
  );
}

setInterval(render, 1000);
