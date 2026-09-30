(function () {
    var c = window.FUNDADORAS_CONFIG || {};
    var msg = encodeURIComponent(c.message || "");
    var href = "mailto:" + (c.email || "") + "?subject=" + encodeURIComponent(c.emailSubject || "") + "&body=" + msg;
    var waHref = c.whatsappNumber ? "https://wa.me/" + c.whatsappNumber + "?text=" + msg : "";
    document.querySelectorAll("[data-cta]").forEach(function (a) { a.href = href; });
    var list = (c.alternativeContacts || []).map(function (x) { return x && x.whatsapp ? { label: x.label, url: waHref } : x; })
        .filter(function (x) { return x && x.url; });
    var altEl = document.getElementById("alt-contact");
    if (altEl) {
        if (!list.length) { altEl.classList.add("hidden"); }
        list.forEach(function (x) {
            var a = document.createElement("a");
            a.href = x.url;
            a.textContent = x.label || x.url;
            a.className = "text-green-400 underline font-medium";
            if (/^https?:/.test(x.url)) { a.target = "_blank"; a.rel = "noopener"; }
            altEl.appendChild(a);
        });
    }
    document.querySelectorAll("[data-flag]").forEach(function (el) {
        if (!c[el.getAttribute("data-flag")]) el.remove();
    });
    document.querySelectorAll("[data-group-size]").forEach(function (el) { el.textContent = c.limitedGroupSize || ""; });
})();
