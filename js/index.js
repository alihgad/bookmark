    var sitName = document.getElementById("siteName"),
    siteURL = document.getElementById("siteURL"),
    bookmarks = []

    if(localStorage.getItem("bookmarks").length > 0 ) {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
        updateTable(bookmarks)
    }

    function addBookmark(){
        
        if(nameValidate()){
            var 
        bookmark ={
            name : sitName.value,
            url : siteURL.value
        }
        bookmarks.push(bookmark)
        updateTable(bookmarks)
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
        clear()
        
        }else{
            document.getElementById("alert").classList.replace("d-none","d-block")

        }
    }

    function updateTable(list){
        var cartona = ""
        for (let i = 0; i < list.length; i++) {
            cartona += `<tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td><a href="${list[i].url}" class="btn btn-success" target="_blank"><i class="fa-solid fa-eye pe-2"></i>visit</a></td>
            <td><button class="btn btn-danger" onclick="remove(${i})"><i class="fa-solid fa-trash-can pe-2"></i>delete</button></td>
          </tr>`
        }
        document.getElementById("tbody").innerHTML = cartona
    }


    function remove(index){
        bookmarks.splice(index,1)
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
        updateTable(bookmarks)
    }



    function nameValidate() {
        var regx = /^[a-zA-z\s]{3,15}$/
        if(regx.test(sitName.value)){
            sitName.classList.replace("is-invalid","is-valid")
            document.getElementById("nameHelper").classList.replace("d-block","d-none")
            return true
        }else{
            if(sitName.value == ""){
                sitName.classList.remove("is-invalid")
                sitName.classList.remove("is-valid")
                document.getElementById("nameHelper").classList.replace("d-block","d-none")

            }else{
            sitName.classList.add("is-invalid")
            document.getElementById("nameHelper").classList.replace("d-none","d-block")
            // return true
        }
        }

        
    }

    function isValidUrl(str) {
        const pattern = new RegExp(
          '^https?:\/\/' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', // fragment locator
          'i'
        );
        return pattern.test(str);
      }


    function urlvalidate() {
        
        if(isValidUrl(siteURL.value)){
            siteURL.classList.add("is-valid")
            siteURL.classList.replace("is-invalid","is-valid")
            document.getElementById("urlHelper").classList.replace("d-block","d-none") 
            return true
        }else{
            if(siteURL.value == ""){
                siteURL.classList.remove("is-invalid")
                siteURL.classList.remove("is-valid")
                document.getElementById("urlHelper").classList.replace("d-block","d-none")

            }else{
                siteURL.classList.add("is-invalid")
                document.getElementById("urlHelper").classList.replace("d-none","d-block")
        }


            
        }
    }

 




    function clear(){
     sitName.value = ""
     siteURL.value = ""
     sitName.classList.remove("is-valid")
     siteURL.classList.remove("is-valid")

    }



    function closing(){
        document.getElementById("alert").classList.replace("d-block","d-none")
    }

    function search(){
        var founded = []
        for (let i = 0; i < bookmarks.length; i++) {
            if (bookmarks[i].name.toLowerCase().includes(document.getElementById("search").value.toLowerCase())){
                console.log("hi");
                founded.push(bookmarks[i])
            }
            
            if(founded.length){
                updateTable(founded)
            }else{
                document.getElementById("tbody").innerHTML="<tr><td colspan='4' class='text-danger fw-bolder fs-1'>Data not found</td></tr>"
            }
        }

     

    }














