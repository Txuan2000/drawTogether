var btnLoad=document.getElementById('load');
var btnPost=document.getElementById('post');

var canvas=document.createElement('canvas');
var context=canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.style.width='100%';
canvas.style.height=200;
canvas.style.border='1px solid';
context.fillStyle='#123';
context.moveTo(5,4);
context.lineTo(100,150);
context.stroke();
var imageData={
  'title':canvas.toDataURL(),
  'author':'dung'
}

var svurl='http://localhost:3000/posts';
btnPost.addEventListener('click',()=>{
  axios.post(svurl,imageData);
});
var items=[];
btnLoad.addEventListener('click', () => {
  axios.get(svurl)
  .then(function(item) {
      items = item.data;
      var url = items[0].title;
      console.log(items);
      var img = new Image();
      img.src = url;
      document.body.appendChild(img);
  });
});


