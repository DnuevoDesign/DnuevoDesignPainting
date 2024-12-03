import{r as n,h as e}from"./p-c9071277.js";const a="\n\n\n@media (min-width: 1040px) {\n    .card {\n        box-sizing: border-box;\n        background-color: rgba(255, 255, 255, 0);\n    \n        height: 400px;\n        width: 300px;\n    \n        margin: 0 20px;\n\n        position: relative;\n\n        transition: box-shadow 200ms ease-in-out ;\n\n        cursor: pointer;\n\n    }\n    .card:hover .cardImage {\n        box-shadow: \n        0 0 6px 2px #c5c5c5de;\n        transform: scale(1.02); /* Adjust scale as desired */\n        transition: transform 0.3s ease-in-out; /* Smooth scaling */\n    }\n\n    \n    .cardImage {\n        position: relative;\n        margin: 0;\n        width: 100%;\n        height: 100%;\n       \n    }\n    .cardImage  img {\n        width: 100%;\n        height: 100%;\n\n    }\n\n\n    .cardText header {\n        text-wrap: pretty;\n        display: flex;\n        justify-content: start;\n        width: 100%;\n        \n        a {\n            text-decoration: none;\n\n        }\n\n        h2 {\n            margin:  0 0 10px 0;\n            text-align: start;\n\n            font-weight: 400;\n            font-size: 22px;\n            color: black;\n\n        }\n    }\n\n    .cardText p {\n       margin: 8px 0px;\n       font-weight: 200;\n    }\n\n\n\n    .leftArrow {\n       display: none;\n\n    }.leftShadow {\n        display: none;\n    }\n\n\n    .rightArrow {\n       display: none;\n    }.rightShadow {\n       display: none;\n    }\n}\n\n@media (min-width: 768px) and (max-width: 1040px) {\n    .card {\n        box-sizing: border-box;\n        background-color: rgba(255, 255, 255, 0);\n    \n        height: 60vh;\n        width: 92%;\n    \n        box-shadow: \n            -7px 6.5px 6px 2px #c5c5c5de,\n            inset 0 -200px 50px -50px rgba(0, 0, 0, 0.6)\n        ;\n        border-radius: 5px;\n    \n        margin: 0 auto;\n\n        position: relative;\n\n        border: 1.5px solid #ABABAB;\n\n    }\n    \n    .cardImage {\n        position: relative;\n        margin: 0;\n\n        width: 100%;\n        height: 100%;\n        img {\n            width: 100%;\n            height: 100%;\n    \n        }\n    }\n\n    .cardText header {\n        position: absolute;\n        bottom: 0;\n\n        text-wrap: balance;\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        h2 {\n            margin:  0 0 10px 0;\n            text-align: center;\n\n            width: 80%;\n\n            font-weight: 100;\n            font-size: 42px;\n            color: whitesmoke;\n        }\n    }\n\n    .leftArrow {\n        position: absolute;\n        left: 20px;\n        bottom: 40%;\n        width: 60px;\n        height: 60px;\n        color: white;\n\n        border: 2px solid whitesmoke;\n        border-radius: 50%;\n\n    }.leftShadow {\n        position: absolute;\n        display: inline-block;\n        height: 100%;\n        width: 2px;\n        box-shadow: \n            10px 0 20px 2px rgba(0, 0, 0, 0.1),\n            20px 0 20px 2px rgba(0, 0, 0, 0.2),\n            30px 0 20px 2px rgba(0, 0, 0, 0.2),\n            40px 0 20px 2px rgba(0, 0, 0, 0.3),\n            50px 0 20px 2px rgba(0, 0, 0, 0.3),\n            60px 0 20px 2px rgba(0, 0, 0, 0.3),\n            70px 0 20px 2px rgba(0, 0, 0, 0.3),\n            80px 0 20px 2px rgba(0, 0, 0, 0.4);\n\n        background-color: black;\n    }\n\n\n\n\n\n\n    .cardText p {\n        display: none;\n    }\n}\n\n\n@media (min-width: 490px) and (max-width: 768px) {\n    .card {\n        box-sizing: border-box;\n        background-color: rgba(255, 255, 255, 0);\n    \n        height: 60vh;\n        width: 92%;\n    \n        box-shadow: \n            -7px 6.5px 6px 2px #c5c5c5de,\n            inset 0 -200px 50px -50px rgba(0, 0, 0, 0.6)\n        ;\n        border-radius: 5px;\n    \n        margin: 0 auto;\n\n        position: relative;\n\n        border: 1.5px solid #ABABAB;\n\n    }\n    \n    .cardImage {\n        position: relative;\n        margin: 0;\n        width: 100%;\n        height: 100%;\n        img {\n            width: 100%;\n            height: 100%;\n    \n        }\n    }\n\n    .cardText header {\n        position: absolute;\n        bottom: 0;\n\n        text-wrap: balance;\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        margin-bottom: 10px;\n        h2 {\n            text-align: center;\n\n            width: 80%;\n\n            font-weight: 100;\n            font-size: 32px;\n            color: whitesmoke;\n        }\n    }\n\n\n\n\n    .cardText p {\n        display: none;\n    }\n}\n\n@media (max-width: 490px) {\n    .card {\n        box-sizing: border-box;\n        background-color: rgba(255, 255, 255, 0);\n    \n        height: 60vh;\n        width: 92%;\n    \n        box-shadow: \n            -7px 6.5px 6px 2px #c5c5c5de,\n            inset 0 -200px 50px -50px rgba(0, 0, 0, 0.6)\n        ;\n        border-radius: 5px;\n    \n        margin: 0 auto;\n\n        position: relative;\n\n        border: 1.5px solid #ABABAB;\n\n    }\n    \n    .cardImage {\n        position: relative;\n        margin: 0;\n        width: 100%;\n            height: 100%;\n        img {\n            width: 100%;\n            height: 100%;\n    \n        }\n    }\n\n    .cardText header {\n        position: absolute;\n        bottom: 0;\n\n        text-wrap: balance;\n        \n        margin-bottom: 10px;\n        h2 {\n            text-align: center;\n\n            font-weight: 200;\n            font-size: 26px;\n            color: whitesmoke;\n        }\n    }\n\n    .cardText p {\n        display: none;\n    }\n        \n\n}";const t=a;const i=class{constructor(e){n(this,e);this.imageSource=undefined;this.link=undefined;this.blogTitle=undefined;this.date=undefined}render(){return e("main",{key:"fe0e897104fa52b0387b9ae5bf9de354ef9c9a34",class:"card"},e("a",{key:"806039e0fe99ec0a50c15efa5168c5f68ea25a4b",href:this.link},e("figure",{key:"e7ef9de83293bc886fae259b16c5b6e14df59e12",class:"cardImage"},e("img",{key:"cbf8573941ae870ea9bea399f58a5a981a310721",src:this.imageSource,alt:"Blog Image"}))),e("article",{key:"765068ba84a35ad87b3a4f64a003ce965b57aa87",class:"cardText"},e("p",{key:"0ac9d25e241ebf92efe03adfdfb8af4c710ff0dc"},this.date),e("header",{key:"40cea8e06db5779adda2ef68c3df730255fec7ea"},e("a",{key:"c60c2a03d7f03887da7e0792a0b88fda15979018",href:this.link},e("h2",{key:"f63168ef6bd5f2b9ebb301a4b8f801bd737be1e5"},this.blogTitle)))))}};i.style=t;export{i as ni_blog_card};
//# sourceMappingURL=p-69cea4ce.entry.js.map