document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id);var a=e.name.split(/(?=[A-Z])/).join(" ");t.textContent=a.toUpperCase();var l=a.split(" ")[0].charAt(0).toUpperCase()+a.slice(1).toLowerCase();e.placeholder=l,e.insertAdjacentElement("beforebegin",t)});
//# sourceMappingURL=index.17d7598c.js.map
