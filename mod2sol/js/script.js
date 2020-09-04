var names = ["shirjeel","jamali","hamza","jamil","shaikh"]

for (var i in names)
{
    if(names[i][0] === "J" || names[i][0] === "j")
        {
            console.log("Goodbye " + names[i]);
        }
        else{
            console.log("Hello " + names[i]);
        }
}