import * as DOM from "./domHelper";

function populateHeader(header) {
  const nav = DOM.createElement("nav");
  const logo = DOM.createElement("img", "logo");
  const profile = DOM.createElement("button", ["nav-button", "profile"]);
  const notif = DOM.createElement("button", "notif");
  DOM.appendChildren(nav, logo, profile, notif);
  DOM.appendChildren(header, nav);
}

function populateSidebar(sidebar) {
  const items = [
    { name: "Inbox", tag: "inbox" },
    { name: "Today", tag: "today" },
  ];
  items.forEach((item) => {
    const sidebarItem = DOM.createElement("button", "sidebar");
    const icon = DOM.createElement("img");
    sidebarItem.appendChild(icon);
    sidebarItem.textContent += `${item.name}`;
    sidebar.appendChild(sidebarItem);
  });
}

export default function makeBasePage() {
  const content = document.querySelector(".content");
  const header = DOM.createElement("header");
  const sidebar = DOM.createElement("div", "sidebar");
  const main = DOM.createElement("div", "main");
  const footer = DOM.createElement("footer");
  populateHeader(header);
  populateSidebar(sidebar);
  DOM.appendChildren(content, header, sidebar, main, footer);
}
