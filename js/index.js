document.addEventListener("DOMContentLoaded",function(){
    if(typeof config !== "undefined"){
        var info = document.createElement("div");
        info.setAttribute("id","comment");
        info.innerText = config.comment;
        if(typeof config.title !== "undefined"){
            var title = document.createElement("i");
            title.innerText = config.title;
            info.appendChild(title);
        }
        document.getElementById("more").append(info);
        if(typeof config.sitename !== "undefined"){
            document.title = config.sitename;
        }
    }
});