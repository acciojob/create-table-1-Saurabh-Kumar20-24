function insert_Row() {
    //Write your code here
  // document.getElementById("sampleTable").innerHTML+=`
  // <tr><td>New Cell</td> <td>New Cell2</td></tr>`

	let row=document.getElementById("sampleTable").insertRow(0);
	let cell1=row.insertCell(0);
	let cell2=row.insertCell(1);

	cell1.textContent="New Cell1"
	cell2.textContent="New Cell2"
  
}
