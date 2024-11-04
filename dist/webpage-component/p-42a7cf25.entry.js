import{r as n,h as e}from"./p-c9071277.js";import"@fortawesome/fontawesome-free/css/all.min.css";const a="\nnav {\n    width: 100%;\n    height: 100px;\n\n    z-index: 1;\n\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(65, 65, 65, 0.05) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.565) 0%, rgba(0, 0, 0, 0.08) 120%) #989898;;\n    display: sticky;\n    box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.448);\n}\n\n\n\n\n\n@media (min-width: 490px) and (max-width: 768px) {\n    /* ONLY FOR SMALL SCREEN */\n    .dropDownMenu .contactButton { \n        display: none;\n    }.hamburgerButton {\n        display: none;\n    }\n    /************************/\n\n    nav {\n        height: 100px;\n\n    }\n\n    main {\n        position: relative;\n\n    }\n\n    .contactButton {\n        position: absolute;\n        right: 0;\n    }\n    main figure {\n        position: absolute;\n        left: 0;\n    }\n\n    .mainMenu {\n        position: relative;\n        top: 30px;\n        margin: 0;\n        display: flex;\n        justify-content: center;\n        align-content: center;\n\n        list-style-type: none;\n\n        li {\n            \n        }\n        a {\n            text-decoration: none;\n            padding: 10px;\n\n            font-size: 20px;\n            color: black;\n        }\n    }\n\n    \n\n\n\n\n\n\n    .nestListItem {\n        display: none;\n    }.dropDownMenu {\n        \n    }\n}\n\n@media (max-width: 490px) {\n\n    nav main {\n        display: flex;\n        position: relative;\n    }\n    \n    .mainMenu {\n        display: none;\n    }\n    .contactButton {\n        display: none;\n    }\n\n\n\n\n    .dropDownMenu .contactButton {\n        display: block;\n    }\n\n    .dropDownMenu {\n\n        position: fixed;\n        top: -100%;\n        width: 100%;\n        height: auto;\n\n        z-index: 2;\n\n        padding-bottom: 40px;\n        background-color: white;\n\n        transition: top 500ms ease-in-out;\n    }\n    .sideDown {\n        top: 0;\n    }\n\n    .dropDownMenu ul {\n        list-style-type: none;\n        width: 90%;\n\n        padding: 0px 0px 0px 10px;\n\n        li {\n            border-bottom: 1.5px solid lightgray;\n            width: 90%;\n\n            padding: 10px 0px 25px 0px;\n\n            a {\n                font-size: 40px;\n                text-decoration: none;\n                color: black;\n            }\n        }\n    }\n\n    .nestListItem {\n        height: 300px;\n        overflow: hidden;\n\n        transition: height 300ms ease-in-out;\n    }\n\n    .nestListItem ul {\n        margin-top: 20px;\n\n        \n        li {\n            border: 0;\n            padding: 10px 0px;\n            margin: 5px 0px;\n\n            a {\n                font-size: 20px;\n                padding: 20px 0px;\n\n            }\n        }\n\n    }\n    .hideListItem {\n        height: 0;\n        overflow: hidden;\n        margin: 0;\n    }\n\n\n    .contactButton{\n    \n        margin: 60px auto 40px auto;\n    \n        background-color: red;\n        width: 150px;\n        height: 50px;\n    \n        border-radius: 30px;\n    \n        a {\n            position: relative;\n            bottom: 3.5px;\n            right: 3px;\n    \n            display: inline-flex;\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            background-color: #989898;\n    \n            justify-content: center;\n            align-items: center;\n    \n            text-decoration: none;\n    \n            font-size: 20px;\n        }\n    }\n\n\n    .hamburgerButton {\n        position: absolute;\n        right: 0;\n        top: 25%;\n\n        z-index: 3;\n\n        border: 0;\n        border-radius: 5px;\n        cursor: pointer;\n        display: inline-block;\n        \n        padding: 10px;\n        margin-right: 10px;\n\n        background-color: #ffffff00;\n\n    }.bar1,\n    .bar2,\n    .bar3 {\n        width: 35px;\n        height: 4px;\n        border-radius: 2px;\n        background-color: black;\n        margin: 6px;\n\n\n        transition: 300ms;\n    }.change .bar1 {\n        transform: translate(0, 9px) rotate(-45deg);\n    }\n    .change .bar2 {\n        opacity: 0;\n    }\n    .change .bar3 {\n        transform: translate(0, -9px) rotate(45deg);\n    }\n\n}";const d=a;const c=class{constructor(e){n(this,e);this.isMainMenuOpen=undefined;this.isNestListItemOpen=undefined}toggleMenu(){this.isMainMenuOpen=!this.isMainMenuOpen;if(!this.isMainMenuOpen){this.isNestListItemOpen=false}}toggleListItem(){this.isNestListItemOpen=!this.isNestListItemOpen}render(){let n=null,a=null;a=e("div",{key:"8ef942e1e33f8691275f26e57aa32f9cf538c2c0",class:`nestListItem ${this.isNestListItemOpen?"":"hideListItem"}`},e("h3",{key:"24fe2d5e5cda4914d09263b629b694c2b88f6b89"},"General Contracting"),e("ul",{key:"c2622f01be9117870d40120c70f17ebbc0af4d6c"},e("li",{key:"00af7e2a56c6b30638be3e83f0c99de5d154e82c"},e("a",{key:"9849a970384c4fc138a14cc7c1baccef67413ca1",href:""},"Kitchen Remodeling")),e("li",{key:"8936e6c9f4034a19efc339d6462315de022edf4b"},e("a",{key:"091ed7d6cd2d81275721e243049948846e4d5644",href:""},"Bathroom Remodeling")),e("li",{key:"ec37daa189c0b2882fdb79b99392b84443c003d6"},e("a",{key:"1c643bea1bfd5f07332c7aa6c76a05274f3c6fed",href:""},"Decorative Panel Wall")),e("li",{key:"b32c8266091afc09bbbdf4a7546274bbe2b817ed"},e("a",{key:"5bd273d678160cfc659802d38ed001c957b8abd5",href:""},"Outdoor Living")),e("li",{key:"2310c417f838d584b576144d32386ee9e7896e02"},e("a",{key:"d1ed5c2cca5a111bce4f401ef063a7000bb9389b",href:""},"Additional")),e("li",{key:"b4f6e316c707b5b2faa96c53f192a3352198c074"},e("a",{key:"da8fb4641e39ce87229ab9f45e006b3c5a51824e",href:""},"Maintenance"))),e("h3",{key:"57e405857f1b039a92e128ba02c19132aef885b2"},"Painting"),e("ul",{key:"4488ab76c8beb4ca3167093c6fda7ab4b522cd9f"},e("li",{key:"6890895f5a4cac26c046b65b3f87759789ad5503"},e("a",{key:"ff418acc99c056392d3206b67035d4835fa2001f",href:""},"Kitchen Remodeling")),e("li",{key:"a59fb90d26de8de78476d67a15e5b3b854fcb7a7"},e("a",{key:"6671301474ac5fe697ad198b3d91f1b6bd9b12db",href:""},"Bathroom Remodeling")),e("li",{key:"b815a1b096832554cbceadfbbef34773082f34c2"},e("a",{key:"c59c1433326c44aaa899c5ff7c11d88faabd96dd",href:""},"Decorative Panel Wall")),e("li",{key:"6565492403413e4f4d0f21991614cf2084884573"},e("a",{key:"e50b0563d1959692efac04920d0e1223302323fa",href:""},"Outdoor Living")),e("li",{key:"2f9f21ca5fc6f95646d143f1ec439f25c90dd9e7"},e("a",{key:"fa00efa749b91c10d192449130440a824197732d",href:""},"Additional")),e("li",{key:"fb58c9ed8593c7556674176ef54b441be126233d"},e("a",{key:"46d749fcf4999f5f28c8c16eb45cb37470fa5fc3",href:""},"Maintenance"))));n=e("div",{key:"f81b81f6862ab632efd3d4798bcce3fa2629ef58",class:`dropDownMenu ${this.isMainMenuOpen?"sideDown":""} `},e("span",{key:"a64a066d51bb527918065b91aec813067dd65882",class:"contactButton"},e("a",{key:"d61f294bb7fbdb5dc76bc34fa7c0ff189ccda244",href:""},"Contact us ",e("i",{key:"515278e390a4f38b769f9e06b327946ba6c9df27",class:"fas fa-arrow-right"}))),e("ul",{key:"68ccb34956fa3501684e40465d3cbe4012bd1db1"},e("li",{key:"54af544fa60711cd16de723401703a99ebce469f"},e("a",{key:"f081f968665daacd78c21b8e71ec57f26e00dd29",href:""},"Home")),e("li",{key:"bafaee98f5e769f404473f35b8e8d1009bca16b9"},e("a",{key:"5f6349ea1e6709d948057f6fa3b0373a64a0922a",onClick:()=>this.toggleListItem()},"Services"),a),e("li",{key:"8b954f5262ee7a9828d59c85b112f5da89fa7c92"},e("a",{key:"bc1e3fc297a99be6e357952ef3c68e40110e4de7",href:""},"About us")),e("li",{key:"628763b42186886b7e8533919be045c4109bab43"},e("a",{key:"85a788b2ff3ed15053f4fc6171073cde0638c41d",href:""},"Our Work")),e("li",{key:"2dfb767b578543b9b80d1b547fefaee4e06ca7fd"},e("a",{key:"e8f4b03f206546e81df129a715a19d589d3b334b",href:""},"Testimonials"))));return e("nav",{key:"b1fa711a5b9197ad35665fdff14f00eabd29e0fc"},e("main",{key:"a3fd093150d210199b6083691140f3bc89af6117"},e("figure",{key:"90fcf5b3ca9336801d49f021f4486d310ed5083e"},e("img",{key:"1256816ae7471245014980e927f6d6722597eb7c",src:"https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png",alt:"Company Logo"})),e("ul",{key:"b67b9d8eb394b1b304d2e8c902c47531d51e0c26",class:"mainMenu"},e("li",{key:"c464066cfeafb18d3d47a5100a0bbed91ee0e767"},e("a",{key:"bb213b5a1950737082bb64122811d6dacd7449a3",href:""},"Home")),e("li",{key:"7422b6690ac36774e6d9330da9f5677ffe43e191"},e("a",{key:"0c8e8c3e4b86439af2af75dbecd5397d73a7f2e4"},"Services")),e("li",{key:"1c3cb1f1b5ddb3dc5936763a62819bb704a20fc1"},e("a",{key:"a43c7012301f911ad4cb10194f4e900c6926e841",href:""},"About us")),e("li",{key:"c8ef56e6742aaed46f2bc332381286d4d253984e"},e("a",{key:"25bb517ac7fba8ceb5386f47bd6466053823100d",href:""},"Our Work")),e("li",{key:"7c1c1b1f8782cef4607bc1b5c54517b42e164f39"},e("a",{key:"e662df0ee071338a466da0ea2c16c556b98fc27f",href:""},"Testimonials"))),e("span",{key:"18b53b485b221897851c2c655f2551f24cea4db7",class:"contactButton"},e("button",{key:"71528247c7e799705abcf94395b192f8e56cc888"},"CONTACT US")),e("button",{key:"8aab3f9816db97c5c92738be26b2e518a7e3f7d4",class:`hamburgerButton ${this.isMainMenuOpen?"change":""}`,onClick:()=>this.toggleMenu()},e("div",{key:"f17df96ebaed4509257829ea540de85b73624650",class:"bar1"}),e("div",{key:"5135f0dbf38abb5b762a801e526891e900bf09e5",class:"bar2"}),e("div",{key:"4fc09865eb22a8fe2b030642889d628d52eca73f",class:"bar3"}))),n)}};c.style=d;export{c as nate_nav_bar};
//# sourceMappingURL=p-42a7cf25.entry.js.map