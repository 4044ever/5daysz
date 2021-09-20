let tagMap = new Map();
let tagArray = new Array();
{{ range $key, $value := .Data.Terms }}
    tagMap.set("{{ $key }}", {{ len $value }});
    tagArray.push([{{ $key }}, {{ len $value }} ]);
{{ end }}
