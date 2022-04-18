var checkBox = document.getElementById('checkbox');

 const basic = document.getElementById('basic');
 const professional = document.getElementById('professional');
 const master = document.getElementById('master');
 const basicm = document.getElementById('basicm');
 const professionalm = document.getElementById('professionalm');
 const masterm = document.getElementById('masterm');
 
checkBox.addEventListener('click', changeText);

function changeText(){
   if(basicm.style.display === 'block' && professionalm.style.display === 'block' && masterm.style.display === 'block'){
    checkBox.style.background = 'linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%))';
    basic.style.display = 'block';
    basicm.style.display = 'none';
    professional.style.display = 'block';
    professionalm.style.display = 'none';
    master.style.display = 'block';
    masterm.style.display = 'none';
   }else{
    checkBox.style.background = 'hsl(234, 14%, 74%)';
    basicm.style.display = 'block';
  basic.style.display = 'none';
  professionalm.style.display = 'block';
  professional.style.display = 'none';
  masterm.style.display = 'block';
  master.style.display = 'none';
   }
}

