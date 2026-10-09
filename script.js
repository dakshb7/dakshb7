(function(){
  var lb=document.getElementById('lb'),img=lb.querySelector('img'),cap=lb.querySelector('p');
  document.querySelectorAll('.fig button').forEach(function(el){
    el.addEventListener('click',function(){
      var fig=el.closest('figure'),src=fig.querySelector('img');
      img.src=src.src;img.alt=src.alt;
      var fc=fig.querySelector('figcaption');cap.textContent=fc?fc.textContent:'';
      if(lb.showModal)lb.showModal();
    });
  });
  lb.querySelector('.close').addEventListener('click',function(){lb.close()});
  lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
})();
