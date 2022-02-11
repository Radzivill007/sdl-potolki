var qLinks = document.getElementsByClassName('faq__tab-link');
var qContents = document.getElementsByClassName('faq__tab-content');

function showTab(index) {
    for(var i=0;i<qLinks.length;i++) {
        qLinks[i].classList.remove('faq__tab-link--active');
        qContents[i].classList.remove('faq__tab-content--active');
    }

    qLinks[index].classList.add('faq__tab-link--active');
    qContents[index].classList.add('faq__tab-content--active');
}

showTab(0);