function searchbar(){
    const titlelist = ["le premier chapitre", "le second chapitre"];

    var search = document.getElementById("SearchBar").value;
    
    if(search === "infos" || search === "info" || search === "contacts" || search === "contact") {window.open("infos.html"); return;}

    for(values of titlelist){
        if(isNaN(search) === false){window.open("#" + search); return;}
        var test = Number(titlelist.indexOf(values)) + 1
        if(search.toLowerCase === values){
            
            console.log("moove on #" + test);
            window.open("#" + test);
            return;}
        if(values.toLowerCase().includes(search) == true){
            console.log("moove on #" + test);
            window.open("#" + test);
            return;}}
    window.console.warn("Chapitre non trouver avec la recherche: '" + search.toLowerCase() + "'.");
    return;}

