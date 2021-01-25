class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li><a href="index.html">Sesión</a></li>
      </ul>`;
    this.ul = this.querySelector("ul");
  }
  /**
   * @param {Set<string>} privilegios
   */
  protege(privilegios) {
    let html = "";
    if (privilegios.has("Verduras")) {
      html += /* html */ `<li><a href="verduras.html">Verduras</a></li>`;
    }
    if (privilegios.has("Frutas")) {
      html += /* html */ `<li><a href="frutas.html">Frutas</a></li>`;
    }
    this.ul.innerHTML += html;
  }
}
customElements.define("mi-nav", MiNav);
