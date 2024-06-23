async function Reviews(){
    var navbar = await fetch("./ReviewModule.html")
    var html = await navbar.text().then(
      html=>{
          rRunit(html);
      }
    )
}
Reviews();
function rRunit(html){
    
    //can dynamically load in reviews if needed
    var rowCount = 2;
    var columnCount = 2;
    var wrapper = document.createElement('div');
    wrapper.classList = "reviewbox pt-4 pb-5 mb-4 container"

    var rows = [];

    for(let x = 0; x<rowCount; x++){
        rows[x]=document.createElement('div')
        rows[x].classList ='row';
        for(let y = 0; y<columnCount; y++){
            var review = createElementFromString(html);
            
            
            //fetch values from either a db or a static file somewhere
            var starCount = "&starf; &starf; &starf; &starf; &starf;"
            var reviewcontent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui itaque consequatur debitis molestiae laborum id quisquam ab voluptates sit."
            var reviewer = "John D"

            console.log(review);
            review.querySelector('.reviewheader').innerHTML = starCount;
            review.querySelector('.reviewtext').innerHTML = reviewcontent;
            review.querySelector('.reviewer').innerHTML = " -"+reviewer;
            rows[x].appendChild(review);
        }

        wrapper.appendChild(rows[x]);
    }



    document.getElementById("reviews").appendChild(wrapper);
}
function createElementFromString(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstChild;
}