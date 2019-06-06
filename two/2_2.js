var names = ["Saurabh Vikram", "Nikunj Gautam", "Deependra Chansoliya","Shivam Shukla","Satvik Jain","Shyam Shah","Deepankar Vish","Ayush Sharma","Nikhil Kumar","Pranit Mandloi"];
var roll = [180001, 180002, 180003, 180004, 180005, 180006, 180007, 180008, 180009, 180010];
var year = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
var html = "<table border='2px'><tr><th>Roll No.</th> <th>Name</th> <th>Year</th></tr>";

for (let i = 0; i < 10; i++){
    html += "<tr><td>"+roll[i]+"</td><td>"+ names[i]+"</td><td>" + year[i] + "</td></tr>";
}
html+= "</table";

document.getElementById("tab").innerHTML = html;

function takeAction(){
    var toSearch = document.getElementById("search").value;
    var html1 ="<table border='2px'><tr><th>Roll No.</th> <th>Name</th> <th>Year</th></tr>";
    for (let i = 0; i < 10; i++){
        if(names[i].toUpperCase().indexOf(toSearch.toUpperCase()) != -1 )
        {
            html1 += "<tr><td>"+roll[i]+"</td><td>"+ names[i]+ "</td><td>" + year[i] + "</td></tr>" ;
        }
    }
    html1 += "</table";
    document.getElementById("tab").innerHTML = html1;

    console.log("Action performed" + toSearch);
}