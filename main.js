var fam = ["Family Book", "Dad", "Mom", "Me"];
var imfam = ["cover.jpg", "dad.jpg", "mom.jpg", "me.jpg"];
i = 0;
function dispchange() {
document.getElementById("fam").src = imfam[i];
document.getElementById("namehold").innerHTML = fam[i];
i++
if(i > 3)
{
    i = 0;
}
}