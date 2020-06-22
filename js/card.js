function setBookInfo(ratingStar,starNumber,divname,alt,image,title,author,summary){
    // alt 跳转，title 标题，author 作者，summary 简介， image 封面
    htmlstr = '<p><div class="post-cardpreview"><div class="post-cardpreview--meta"><div class="post-cardpreview--middle"><h4 class="post-cardpreview--title"><a target="_blank" href="' + alt +'">'+ title + '</a></h4><div class="rating"><div class="rating-star allstar'+starNumber+'"></div><div class="rating-average">'+ ratingStar +'</div></div><time class="post-cardpreview--date">作者: '+ author +' </time><section style="max-height:75px;overflow:hidden;" class="post-cardpreview--excerpt">' + summary +'</section></div></div><img loading="lazy" class="post-cardpreview--image" src="' + image + '"></div></p>'
    document.getElementById(divname).innerHTML = htmlstr
}

function setMovieInfo(ratingStar,starNumber,divname,alt,image,title,writers,summary){
    // alt 跳转，title 标题，writers 导演，summary 简介， image 封面
    htmlstr = '<p><div class="post-cardpreview"><div class="post-cardpreview--meta"><div class="post-cardpreview--middle"><h4 class="post-cardpreview--title"><a target="_blank" href="' + alt +'">'+ title + '</a></h4><div class="rating"><div class="rating-star allstar'+starNumber+'"></div><div class="rating-average">'+ ratingStar +'</div></div><time class="post-cardpreview--date">导演: '+ writers +' </time><section style="max-height:75px;overflow:hidden;" class="post-cardpreview--excerpt">' + summary +'</section></div></div><img loading="lazy" class="post-cardpreview--image" src="' + image + '"></div></p>'
    document.getElementById(divname).innerHTML = htmlstr
}