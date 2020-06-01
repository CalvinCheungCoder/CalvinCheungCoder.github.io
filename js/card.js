function setBookId(id,ratingStar,starNumber,divname){
    $.ajax({
        type: 'GET',
        url: 'https://douban.uieee.com/v2/book/' + id,
        dataType: 'JSON',
        error: function () {
            
        },
        success: function (res) {
         htmlstr = '<p><div class="post-cardpreview"><div class="post-cardpreview--meta"><div class="post-cardpreview--middle"><h4 class="post-cardpreview--title"><a target="_blank" href="' + res.alt +'">'+ res.title +' (' + res.pubdate + ')</a></h4><div class="rating"><div class="rating-star allstar'+starNumber+'"></div><div class="rating-average">'+ ratingStar +'</div></div><time class="post-cardpreview--date">作者: '+ res.author +' </time><section style="max-height:75px;overflow:hidden;" class="post-cardpreview--excerpt">' + res.summary +'</section></div></div><img loading="lazy" class="post-cardpreview--image" src="' + res.image + '"></div></p>'
         $('#' + divname).append(htmlstr)
        }
    });
}

function setMovieId(movieId,ratingStar,starNumber,divname){
    $.ajax({
        type: 'GET',
        url: 'https://douban.uieee.com/v2/movie/subject/' + movieId,
        dataType: 'JSON',
        error: function () {
            
        },
        success: function (res) {
            htmlstr = '<p><div class="post-cardpreview"><div class="post-cardpreview--meta"><div class="post-cardpreview--middle"><h4 class="post-cardpreview--title"><a target="_blank" href="' + res.alt +'">'+ res.title + res.original_title +' (' + res.year + ')' + '</a></h4><div class="rating"><div class="rating-star allstar'+starNumber+'"></div><div class="rating-average">'+ ratingStar +'</div></div><time class="post-cardpreview--date">导演: '+ res.writers[0].name +' </time><section style="max-height:75px;overflow:hidden;" class="post-cardpreview--excerpt">' + res.summary +'</section></div></div><img loading="lazy" class="post-cardpreview--image" src="' + res.images['medium'] + '"></div></p>'
            $('#' + divname).append(htmlstr)
        }
    });
}

