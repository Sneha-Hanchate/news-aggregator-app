//const url ='http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-19&sortBy=publishedAt&apiKey=11d8247de9d6481491bc5c82ccd6624c';



// $(document).ready(async function news(){
// 	let response = await fetch(url);
// 	let data = await response.json();
// 	//debugger;
//   let news = ''
//   console.log(data);
// 	data.articles.forEach(article=> {
// 		// put your loop code over here 
// 				news+= `
//                     <li class="article">
//                        <img class="article-img" src="${article.urlToImage}"/>

//                        <h2 class="article-title">${article.title}</h2>

//                        <p class="article-description">${article.description}</p>

//                        <span class="article-author">${article.author}</span>

//                        <a class="article-link" href="${article.url}" target="_blank"></a>
//                     </li>
//                 `;
// 			});//iteration
//          /* let response = await fetch(url);
// 		  let data = await response.json();
//         //x.then(res => res.json())
// 		data.forEach((x) => {});
//         .then((articles) => {
//             let output="";
//             news.articles.forEach(article=>{
                
// 					   console.log("hii ".output);
//             });*/
			
//             document.getElementById("news-articles").innerHTML=news;
//         })
       
    

$(document).ready(function(){ 
  console.log("loadin...");
    $('#search').keypress(()=>{
      console.log("keypress...");
      let searchField = $("#search").val();
      const url1 = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-19&sortBy=publishedAt&apiKey=11d8247de9d6481491bc5c82ccd6624c`;
      //  const url1 ='https://api.linein.tech/common/v2/index.php/API/loadNews/bitcoin';
      if(searchField !== ""){
        $.ajax({
          url: url1,
          // crossDomain: true,
          method: "GET",
          dataType: "json",
          
            success: function(news){
              console.log("news fetched :: "+news);
            let output1 = "";
            let articles = news.articles;
            
            for(var art in articles){
              output1 +=`
                <li class="article">
                   <img class="article-img" src="${art.urlToImage}"/>
                   <h2 class="article-title">${art.title}</h2>
                   <p class="article-description">${art.description}</p>
                   <span class="article-author">${art.author}</span>
                   <a class="article-link" href="${art.url}" target="_blank"></a>
                </li>`;
            }
			// console.log(output2);
      //       if(output2 !== ""){
      //         document.getElementById("news-articles").innerHTML=output2;  
      //       }
      //       else{
			// 	news_articles.innerHTML='<li class="not-found">No article was found based on the search.</li>';

			// 	        } 
          } ,
          fail: function(xhr, textStatus, errorThrown){
            alert('request failed');
         } 
        }); 
      }
	 
    });
});



