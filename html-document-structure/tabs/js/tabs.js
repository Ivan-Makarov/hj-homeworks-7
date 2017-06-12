'use strict';

const selector = document.querySelector('.tabs-nav');
const content = document.querySelector('.tabs-content');
const articles = [...content.querySelectorAll('[data-tab-title]')];

articles.forEach(article => {
    const tab = selector.firstElementChild.cloneNode(true);
    tab.firstElementChild.classList.add(article.dataset.tabIcon);
    tab.firstElementChild.textContent = article.dataset.tabTitle;

    function toggleArticles() {
        articles.forEach(hideArticle);
        tabs.forEach(dimTab);
        showArticle(article);
        highlightTab(tab);
    }

    tab.addEventListener('click', toggleArticles);
    selector.appendChild(tab)
})

selector.removeChild(selector.firstElementChild);

function showArticle(article) {
    article.classList.remove('hidden')
}

function hideArticle(article) {
    article.classList.add('hidden')
}

function highlightTab(tab) {
    tab.classList.add('ui-tabs-active')
}

function dimTab(tab) {
    tab.classList.remove('ui-tabs-active')
}

const tabs = [...selector.querySelectorAll('li')];

articles.forEach(hideArticle);
showArticle(articles[0]);

tabs.forEach(dimTab);
highlightTab(tabs[0]);
