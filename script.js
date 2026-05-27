//your JS code here. If required.

let sqr=document.querySelectorAll(".square");

for(let i=0;i<sqr.length;i++ )
	{
		sqr[i].addEventListener("mouseover",()=>{
        let ind=i;
       changeColor(ind)
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
				sqr[i].style.backgroundColor="#6F4E37"
			}
		}
}




