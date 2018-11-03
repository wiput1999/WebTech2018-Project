hljs.initHighlightingOnLoad()
let md = window.markdownit({
  langPrefix: "",
  html: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + "</code></pre>"
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
  }
})

function router() {
  // Lazy load view element:
  let el = document.getElementById("content")
  // Current route url (getting rid of '#' in hash as well):
  let url = location.hash.slice(1) || "/"
  render(url.slice(1), el)
}

async function render(url, el) {
  url = url || "index"
  let result = await fetch(`../data/content/${url}.md`).then(r => {
    if (r.status === 200) {
      return r.text()
    }
    return "Not Found!"
  })

  let header = await fetch(`../data/heading/${url}.json`).then(r => {
    if (r.status === 200) {
      return r.json()
    }
    return {
      title: "Not Found",
      description: "",
      icon: "notfound.png"
    }
  })

  let headingTitle = document.getElementById("header-title")
  let headingDescription = document.getElementById("header-description")
  let headingIcon = document.getElementById("header-icon")

  headingTitle.innerText = header.title
  headingDescription.innerHTML = header.description
  headingIcon.setAttribute("src", `../assets/img/icon/${header.icon}`)
  headingIcon.setAttribute("class", "header-image")

  result = await md.render(result)
  el.innerHTML = result
}

// Listen on hash change:
window.addEventListener("hashchange", router)
// Listen on page load:
window.addEventListener("load", router)
