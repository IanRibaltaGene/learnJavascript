let myLeads = ["a", "b", "c"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// Log out the items in the myLeads array using a for loop 

for(index in myLeads) {
    console.log(myLeads[index])
}

