const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const  allprices=document.querySelectorAll(".price")
		const table=document.getElementById("table")
		function getSumandAppend(){
			let totalsum=0
			for(let price of allprices){
				totalprice+=parseInt(price.innerText)
			}
			const newrow=document.createElement("tr")
			const newdata=document.createElement("td")
			newdata.colSpan=2
			newdata.innerText=`Total price: ${totalsum}`
			newrow.appendchild(newdata)
			table.appendchild(newrow)
		}
};

getSumBtn.addEventListener("click", getSum);

