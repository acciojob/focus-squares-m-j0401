//your JS code here. If required.

let sqr=document.querySelectorAll(".square");

for(let i=0;i<sqr.length;i++ )
	{
		sqr[i].addEventListener("mouseover",()=>{
        let ind=i;
       changeColor(ind)
		})

	}

for(let i=0;i<sqr.length;i++)
	{
		  sqr[i].addEventListener("mouseout",()=>{
			let idx=i;
			changeColors(idx)
		})
	}

function changeColor(ind) {
	for(let i=0;i<sqr.length;i++)
		{
			if(i==ind)
			{
				continue;
			}
			else
			{
				
   sqr[i].style.backgroundColor="rgb(111,78,55)"
		
			}
		}
}


function changeColors(ind) {
	for(let i=0;i<sqr.length;i++)
		{

			
			
				
   sqr[i].style.backgroundColor="rgb(230,230,250)"
		
			
		}
}







