$(document).ready(() => {
  $.ajax({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json',
  }).done((data) => {
    console.log(data)
  $.each(data, (i, post) => {
     $('.posts').append(`
        <div class="post" id=${post.id}>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="tog">Comments</button>
       
      </div>
      `); 
      $(`#${post.id}`).on('click', () =>{
        $('.comms').fadeToggle(1000, () => {
          console.log("toggled")
        });
      });
    });
  });
  $.ajax({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/comments',
    dataType: 'json'
  }).done((data) => {
    console.log(data, 'data2')
    $.each(data, (i, comment) =>{
      $(`#${comment.postId}`).append(`
       <div class="comms" id=${comment.postId}>
           <p>${comment.name}</p>
           <p>${comment.email}</p>
           <p>${comment.body}</p>
        </div>

          


      `)
    })

  })
  

  

});




