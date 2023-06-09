// Put the array in the FrontEnd creating html elements

for (let i of eventos.data) {
  // Box for Events
  let box = document.createElement("div");
  box.classList.add("evento_box", "hide");
  // Anchor
  let anchor = document.createElement("a");
  anchor.setAttribute("href", i.enlace);
  box.appendChild(anchor);
  // Image
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  anchor.appendChild(image);
  // Name
  /*
  let name = document.createElement("p");
  name.classList.add("nombre_evento");
  name.innerText = i.eventName.toUpperCase();
  box.appendChild(name);
  */
  
  document.getElementById("evento").appendChild(box);
}
