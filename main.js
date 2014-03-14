document.body.style.marginTop = "2em";
document.body.style.overflow = "scroll";

var searchWrapElem = document.createElement("div");
var searchElem = document.createElement("input");

searchWrapElem.appendChild(searchElem);

searchWrapElem.id = "searchwrap";
searchElem.id = "search";

searchElem.placeholder = "Search with regular expression here...";

searchElem.addEventListener("input", function(e) {
	var navwrap = document.getElementById("navwrap");
	var uls = navwrap.getElementsByTagName("ul");
	
	var rgx;
	try {
		rgx = RegExp(e.target.value);
	} catch(e) { return; }
	
	for(var i=0; uls.length > i; i++) {
		var ul = uls[i];
		for(var n=0; ul.children.length > n; n++) {
			var elem = ul.children[n];
			var res = elem.textContent.match(rgx);
			if(res == null) {
				elem.style.display = "none";
			} else {
				elem.style.display = "";
			}
		}
	}
});

document.body.insertBefore(searchWrapElem, document.body.childNodes[0]);
