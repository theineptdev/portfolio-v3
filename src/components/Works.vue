<template>
    <div class="container">
        <div class="repo-container">
            <div class="title">GitHub Repo</div>
            <!-- <div v-for="n in 8" :key="n"> -->
            <div class="repo-ref">
                <div class="list-name">∙ created ∙</div>
                <div class="github-widget" data-user="theineptdev"></div>
                <div class="list-name">∙ forked ∙</div>
                <div class="github-widget" data-user="theineptdev" data-options='{"forks":true}'></div>
                <!-- <div class="repo-title">webapp-title</div>
                <div class="repo-lang">javascript</div>
                <div class="repo-desc">Description of the project in this GitHub repository. What it’s purpose is.</div> -->
            </div>
            <!-- </div> -->
        </div>
        <div class="btns">
            <!-- <div class="upper"></div> -->
            <div class="lower">
                <div class="btn-more" @click="toggleMore('500vh')">show more</div>
                <div class="btn-less" @click="toggleMore('100vh')">show less</div>
                <div class="line">|</div>
                <a href="https://www.github.com/theineptdev" target="_blank" class="btn-github">visit github</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleMore(height) {
                document.getElementsByClassName('container')[3]
                    .style.maxHeight = height;
                document.getElementsByClassName('repo-container')[0]
                    .style.maxHeight = 'calc(' + height + ' - 4.5rem)';
                //change the height of the upper container to move the lower container
                // setTimeout(function(){
                //     const currentHeight = document.getElementsByClassName('repo-container')[0].clientHeight;
                //     document.getElementsByClassName('upper')[0]
                //         .style.height = 'calc(' + currentHeight + 'px - 7rem)';
                //     console.log(currentHeight);
                // }, 250);
                if (height !== '100vh') {
                    document.getElementsByClassName('btn-less')[0]
                        .style.display = 'flex';
                    document.getElementsByClassName('btn-more')[0]
                        .style.display = 'none';
                    // document.getElementsByClassName('btns')[0]
                    //     .style.bottom = '0';
                } else {
                    document.getElementsByClassName('btn-less')[0]
                        .style.display = 'none';
                    document.getElementsByClassName('btn-more')[0]
                        .style.display = 'flex';
                    // document.getElementsByClassName('btns')[0]
                    //     .style.bottom = '4.5rem';
                }
            },
            githubWidget() {
                // Generated by CoffeeScript 1.12.2
                /*
                * to minify:
                java -jar /usr/local/closure-compiler/compiler.jar \
                --compilation_level SIMPLE_OPTIMIZATIONS \
                --js github-widget.js \
                --js_output_file github-widget.min.js
                */


                /** @preserve https://github.com/jawj/github-widget
                Copyright (c) 2011 - 2012 George MacKerron
                Released under the MIT licence: http://opensource.org/licenses/mit-license
                */

                (function() {
                var allPayloadData, cls, get, getNext, init, jsonp, make, makeWidget, text,
                    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
                    hasProp = {}.hasOwnProperty;

                makeWidget = function(payloadData, div) {
                    var j, len, limit, made, opts, ref, ref1, repo, results, siteRepoNames, sortBy, user;
                    make({
                    cls: 'gw-clearer',
                    prevSib: div
                    });
                    user = div.getAttribute('data-user');
                    opts = div.getAttribute('data-options');
                    opts = typeof opts === 'string' ? JSON.parse(opts) : {};
                    siteRepoNames = [(user + ".github.com").toLowerCase(), (user + ".github.io").toLowerCase()];
                    // sortBy = opts.sortBy || 'watchers';
                    sortBy = opts.sortBy || 'created_at';
                    limit = parseInt(opts.limit) || 2e308;
                    made = 0;
                    // ref = payloadData.sort(function(a, b) {
                    //     console.log(a[sortBy]);
                    //     console.log(sortBy);
                    //     return b[sortBy] - a[sortBy];
                    // });
                    ref = payloadData.sort(function(a, b) {
                        return new Date(b[sortBy]) - new Date(a[sortBy]);
                    });
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                    repo = ref[j];
                    if ((!opts.forks && repo.fork) || (ref1 = repo.name.toLowerCase(), indexOf.call(siteRepoNames, ref1) >= 0) || !repo.description) {
                        continue;
                    }
                    // custom statement to prevent non-forked repos from being visible
                    if ((opts.forks && !repo.fork)) {
                        continue;
                    }
                    if (made++ === limit) {
                        break;
                    }
                    results.push(make({
                        parent: div,
                        cls: 'gw-repo-outer',
                        kids: [
                        make({
                            // a & href for entire element; messes up CSS border though (quick fix)
                            tag: 'a',
                            href: repo.html_url,
                            // opens link in new tab
                            target: '_blank',
                            cls: 'gw-repo',
                            kids: [
                            make({
                                cls: 'gw-title',
                                kids: [
                                make({
                                    tag: 'ul',
                                    cls: 'gw-stats',
                                    kids: [
                                    make({
                                        tag: 'li',
                                        text: repo.watchers,
                                        cls: 'gw-watchers'
                                    }), make({
                                        tag: 'li',
                                        text: repo.forks,
                                        cls: 'gw-forks'
                                    })
                                    ]
                                }), make({
                                    text: repo.name,
                                    cls: 'gw-name'
                                }), repo.language != null ? make({
                                    cls: 'gw-lang',
                                    text: repo.language
                                }) : void 0
                                ]
                            }), make({
                                cls: 'gw-repo-desc',
                                text: repo.description
                            })
                            ]
                        })
                        ]
                    }));
                    }
                    return results;
                };

                allPayloadData = [];

                init = function() {
                    var div, i, j, len, ref, results;
                    ref = get({
                    tag: 'div',
                    cls: 'github-widget'
                    });
                    results = [];
                    for (i = j = 0, len = ref.length; j < len; i = ++j) {
                    div = ref[i];
                    results.push((function(div, i) {
                        allPayloadData.push([]);
                        return getNext("https://api.github.com/users/" + (div.getAttribute('data-user')) + "/repos?callback=<cb>", div, i);
                    })(div, i));
                    }
                    return results;
                };

                getNext = function(url, div, seq) {
                    return jsonp({
                    url: url,
                    success: function(payload) {
                        var j, len, link, links;
                        allPayloadData[seq] = allPayloadData[seq].concat(payload.data);
                        links = payload.meta.Link;
                        if (links) {
                        for (j = 0, len = links.length; j < len; j++) {
                            link = links[j];
                            if (link[1].rel === 'next') {
                            getNext(link[0], div, seq);
                            return;
                            }
                        }
                        }
                        return makeWidget(allPayloadData[seq], div);
                    }
                    });
                };

                cls = function(el, opts) {
                    var c, classHash, classes, hasClasses, j, l, len, len1, ref;
                    if (opts == null) {
                    opts = {};
                    }
                    classHash = {};
                    classes = el.className.match(cls.re);
                    if (classes != null) {
                    for (j = 0, len = classes.length; j < len; j++) {
                        c = classes[j];
                        classHash[c] = true;
                    }
                    }
                    hasClasses = (ref = opts.has) != null ? ref.match(cls.re) : void 0;
                    if (hasClasses != null) {
                    for (l = 0, len1 = hasClasses.length; l < len1; l++) {
                        c = hasClasses[l];
                        if (!classHash[c]) {
                        return false;
                        }
                    }
                    return true;
                    }
                    return null;
                };

                cls.re = /\S+/g;

                get = function(opts) {
                    var el, els, hasCls, inside, ref, ref1, ref2, ref3, tag;
                    if (opts == null) {
                    opts = {};
                    }
                    inside = (ref = opts.inside) != null ? ref : document;
                    tag = (ref1 = opts.tag) != null ? ref1 : '*';
                    if (opts.id != null) {
                    return inside.getElementById(opts.id);
                    }
                    hasCls = opts.cls != null;
                    if (hasCls && tag === '*' && (inside.getElementsByClassName != null)) {
                    return inside.getElementsByClassName(opts.cls);
                    }
                    els = inside.getElementsByTagName(tag);
                    if (hasCls) {
                    els = (function() {
                        var j, len, results;
                        results = [];
                        for (j = 0, len = els.length; j < len; j++) {
                        el = els[j];
                        if (cls(el, {
                            has: opts.cls
                        })) {
                            results.push(el);
                        }
                        }
                        return results;
                    })();
                    }
                    if ((opts.multi == null) && (ref2 = tag.toLowerCase(), indexOf.call(get.uniqueTags, ref2) >= 0)) {
                    return (ref3 = els[0]) != null ? ref3 : null;
                    } else {
                    return els;
                    }
                };

                get.uniqueTags = 'html body frameset head title base'.split(' ');

                text = function(t) {
                    return document.createTextNode('' + t);
                };

                make = function(opts) {
                    var c, j, k, len, ref, t, v;
                    if (opts == null) {
                    opts = {};
                    }
                    t = document.createElement((ref = opts.tag) != null ? ref : 'div');
                    for (k in opts) {
                    if (!hasProp.call(opts, k)) continue;
                    v = opts[k];
                    switch (k) {
                        case 'tag':
                        continue;
                        case 'parent':
                        v.appendChild(t);
                        break;
                        case 'kids':
                        for (j = 0, len = v.length; j < len; j++) {
                            c = v[j];
                            if (c != null) {
                            t.appendChild(c);
                            }
                        }
                        break;
                        case 'prevSib':
                        v.parentNode.insertBefore(t, v.nextSibling);
                        break;
                        case 'text':
                        t.appendChild(text(v));
                        break;
                        case 'cls':
                        t.className = v;
                        break;
                        default:
                        t[k] = v;
                    }
                    }
                    return t;
                };

                jsonp = function(opts) {
                    var callbackName, ref, ref1, url;
                    callbackName = (ref = opts.callback) != null ? ref : '_JSONPCallback_' + jsonp.callbackNum++;
                    url = opts.url.replace('<cb>', callbackName);
                    window[callbackName] = (ref1 = opts.success) != null ? ref1 : jsonp.noop;
                    return make({
                    tag: 'script',
                    src: url,
                    parent: get({
                        tag: 'head'
                    })
                    });
                };

                jsonp.callbackNum = 0;

                jsonp.noop = function() {};

                init();

                }).call(this);

            }
        },
        mounted() {
            this.githubWidget();
        }
    }
</script>

<style>
/* widget css */
.gw-repo-outer {
    margin: 0 auto;
    max-width: 35rem;
    /* prevents the width from being 100% on mobile / smaller screens */
    width: 95%;
    /* padding-bottom was 2.5rem */
    padding-bottom: 2rem;
    line-height: 2rem;
    cursor: auto;
}
.gw-repo-outer:nth-child(2n + 1) {
}
.gw-repo {
    text-decoration: none;
}

.gw-repo :is(.gw-name, .gw-lang, .gw-repo-desc) {
    transition: 0.25s ease-in-out;
}
.gw-repo:nth-child(2n) {
}
.gw-title{
    text-align: center;
}
.gw-name {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.75rem;
    text-transform: lowercase;
    display: inline-flex;
    padding-right: 0.25rem;
    overflow-y: hidden;
}
.gw-repo-desc {
    text-decoration: none;
    font-size: 1.25rem;
    color: rgb(90, 90, 90);
}
.gw-stats {
    display: none;
}
.gw-watchers, .gw-forks {
    background: transparent url('../assets/repostat.png') no-repeat 0 0;
}
.gw-watchers {
}
.gw-forks {
}
.gw-lang {
    overflow: hidden;
    text-decoration: none;
    font-size: 1.75rem;
    text-transform: uppercase;
    color: rgb(126, 126, 126);
    display: inline-flex;
    padding-left: 0.25rem;
}
.gw-clearer {
}

@media only screen and (min-width: 768px) {
    .gw-repo:hover :is(.gw-name, .gw-lang, .gw-repo-desc) {
        color: rgba(255, 255, 255, 0.8);
    }
}
</style>

<style scoped>
/* remaining css */
.container {
    color: white;
    background: #181818;
    height: auto;
    max-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    /* smooth transitions for elements within container */
    transition: 0.25s ease-in-out;
}

.list-name {
    color: rgba(255, 255, 255, 0.15);
    text-transform: uppercase;
    line-height: 2rem;
    cursor: auto;
}

.btns {
    pointer-events: none;
    /* sets relative to repo-container; repo-container overflow = visible & pushes btns out of view */
    position: flex;
    /* bottom: 4.5rem; */
    width: 100%;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    overflow: visible;
}
.upper {
    /* height: calc(100vh - 7rem); */
    height: 100vh;
    transition: 0.25s ease-in-out;
}
.lower {
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.5rem;
    /* background: rgb(24, 24, 24); */
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgb(24, 24, 24) 45%
    );
    color: rgba(255, 255, 255, 0.438);
    transition: 0.25s ease-in-out;
}
.btn-less {
    display: none;
}
.btn-more, .btn-less, .btn-github {
    padding-left: 1rem;
    padding-right: 1rem;
    /* padding-bottom: 2.5rem; */
    cursor: pointer;
    transition: 0.15s ease-in-out;
}
.btn-more, .btn-less, .btn-github, .line {
    /* lowers height in relation of gradient */
    /* padding-top: 2.5rem; */
}
.btn-github {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.438);
}

.repo-container {
    height: auto;
    /* max-height: 100vh; */
    max-height: calc(100vh - 4.5rem);
    /* overflow: hidden; */
    overflow: visible;
    transition: 0.25s ease-in-out;
}

.title {
    font-size: 2.5rem;
    text-transform: uppercase;
    /* 4.5rem originally */
    padding-top: 4rem;
    padding-bottom: 3rem;
}

/* .repo-ref {
    margin: 0 auto;
    max-width: 35rem;
    line-height: 2rem;
    cursor: pointer;
} */
.repo-title {
    font-size: 1.75rem;
    text-transform: lowercase;
    display: inline-flex;
    padding-right: 0.25rem;
}
.repo-lang {
    font-size: 1.75rem;
    text-transform: uppercase;
    color: rgb(126, 126, 126);
    display: inline-flex;
    padding-left: 0.25rem;
}
.repo-desc {
    font-size: 1.25rem;
    color: rgb(90, 90, 90);
}

@media only screen and (min-width: 768px) {
    :is(.btn-more, .btn-less, .btn-github):hover {
        color: white;
    }
    .title {
        padding-top: 3rem;
    }
}
</style>