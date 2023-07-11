This is my Github.io static blog. Decided to do it in javascript and since github.io only allows static pages, I decided to go the route of utilizing Harp.

All harp related code can be found in folder _harp/
And all the compiled html, css files are in the root folder
## Setup
first install [Harp](http://harpjs.com/docs/quick-start) module on your local computer globally
```
	git clone git@github.com:gabrielavoll/gabrielavoll.github.io.git
	cd gabrielavoll.github.io
	harp _harp
```

## Creating a new article
add a md/jade/html file to the articles/ folder, with the intended url as the title

update _data.json file in the articles/ folder, to include new url, and its title and date
```
	harp _harp compile
	(copy contents of compile into root directory)
	git commit -m "New Article by Person"
	git push origin master
```
