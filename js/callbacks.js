

const posts = [
    {title: 'post One', body: 'This is post one'},
    {title: 'post Two', body: 'This is post Two'}

];


function getPosts() {
    setTimeout(() => { 
        let output = '';
        posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
        });
       
        document.body.innerHTML = output;
    }, 1000);
}



getPosts();


