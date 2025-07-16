+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
summary = ""
mine = false
link = ""
tags = []
featured_image = ""
artist_id = ""
+++


{{< artist-gigs artist="{{ replace .File.ContentBaseName `-` ` ` | title }}" >}}

