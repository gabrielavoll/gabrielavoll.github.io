This is my Github.io static blog. Decided to do it in javascript and since github.io only allows static pages, I decided to go the route of utilizing Harp.

All harp related code can be found in folder _harp/
And all the compiled html, css files are in the root folder

## Setup
```
	git clone git@github.com:gato333/Blog.io.git
	cd Blog.io
	( have harp module installed on your local computer, then )
	harp server
```

## Creating a new article
```
	add a md/jade/html file to the articles/ folder, with the intended url as the title
	update _data.json file in the articles/ folder, to include new url, and its title and date

	harp compile _harp ./
	git commit -m "New Article by Person"
	git push origin master
```