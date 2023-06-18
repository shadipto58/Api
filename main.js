

const friends = { id: 22, name: 'piyal', city: 'Dhaka', phone: 11222222};

const stringify = JSON.stringify(friends);

//console.log(friends);
//console.log(stringify); 



const company = {
	name: 'web devloper',
	ceo: {
		name: 'Shadipto',
		id: 2121,
		phone:12412412
	},
	work: {
		job:'Website making',
		employee: 22,
		tech: {
			first:'html',
			secoend:'css',
			third: 'javascript'
		}
	}
}

const companyString = JSON.stringify(company);
//console.log(companyString);

const companyObj = JSON.parse(companyString);
//console.log(companyObj);


function loadApi(){
	fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(responce => responce.json())
	.then(data => console.log(data))
}

function loadUser(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(data => displayUser(data))
}


function displayUser(users){
	const ul = document.getElementById('list') 

	for(let user of users){
		console.log(user)
		const li = document.createElement('li');
		li.innerText = user.name;
		ul.appendChild(li);
	}
}

// post js

function loadPost(){
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then(data => displayPost(data))
}

function displayPost(data){
	const postBox = document.getElementById('post');
	for(let post of data){
		const div = document.createElement('div');
		div.classList.add('post');
		div.innerHTML = `<h3>ID: ${post.id}</h3>
		<h2>${post.title}</h2>
		<p>${post.body}</p>`

		postBox.appendChild(div);
	}
}
loadPost(); 


// comments.js

function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
function displayComment(comments){
const CommentBox = document.getElementById('comment');
	for(const comment of comments){
	    const div = document.createElement('div');
	    div.classList.add('comment')
	    div.innerHTML = `
	    <h2>Id:${comment.id}</h2>
	    <h3>Mail: ${comment.email}</h3>
	    <p> ${comment.body}</p>
	    `
	    CommentBox.appendChild(div)

	}
}

loadComment()

// Albums.js
function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
function displayAlbums(albums){
const albumBox = document.getElementById('album');
	for(const album of albums){
	    const div = document.createElement('div');
	    div.classList.add('album')
	    div.innerHTML = `
	    <h2>User Id:${album.userId}</h2>
	    <h3>Id: ${album.id}</h3>
	    <p>Title:${album.title}</p>
	    `
	    albumBox.appendChild(div)
	}
}

loadAlbum();