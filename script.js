function carregaVerses() {
    var poems = {

      bio01: {
        nome: "Hegel and Me",
        imagem: "img/HegelEeu.png",
        descricao: "Hegel was a friend, who unfortunately died due to a degenerative disease.",
        citacao: "Memories stay, even when you're gone. Your happiness in life still remains. I so wanted to have you here again.",
      },

      bio02: {
        nome: "Ana",
        imagem: "img/Ana.jpg",
        descricao: "Ana is my younger sister. Our birthdays are half a year apart, but I'm 8 and a half years older.",
        citacao: "Your smile. Your joy. They always make me happy. When I was born my life changed, I am much happier to have you here. I love you, my Naninha.",
      },

      bio03: {
        nome: "Mom and Dad",
        imagem: "img/MaeEpai.jpg",  
        descricao: "My parents don't usually take a lot of pictures, especially together, but this one is from my mom's birthday, and I think it's really cute.",
        citacao: "Mom and dad. I love you so much, even though sometimes it doesn't seem like it. You made so many mistakes, trying to get it right, first-time parents with me, it was to be expected. But know that I know you did your best, and for that I am grateful. I really love being your daughter. I just have to thank you for fate choosing me to be part of this family.",
      },

      bio04: {
        nome: "My First Boyfriend",
        imagem: "img/Vitor.jpg",  
        descricao: "My parents don't usually take a lot of pictures, especially together, but this one is from my mom's birthday, and I think it's really cute.",
        citacao: "You were the first to find the little key that I kept, that when I found you, I realized that it was of no use. Love will come, one hour or another, and I'm glad it came with you, my first boyfriend, but far beyond that, my best friend.",
      },

      bio05: {
        nome: "MySelf",
        imagem: "img/Eu.png",  
        descricao: "This photo is from graduation graduation photo day. A special day, because I am the first graduate of my family from a college.",
        citacao: "We are born without knowing who we are, but we already are. But throughout life we ​​change so much. What would become of us without being what we are?",
      },

      bio0: {
        nome: "My Cat",
        imagem: "img/Batman.jpg",  
        descricao: "This is my cat, he was adopted this year. He already came with 1 to 2 years old, but he is currently my little companion.",
        citacao: "A cat, a tutor, a date, lots of love. My life changed when you arrived. You are my home, and my routine, my company and my discipline.",
      },



    };
    
    var content = document.getElementById("content");

    for (var bio in poems) {
      content.innerHTML += '<div class="card">' + '<img src="' + poems[bio].imagem + '"/>' + "<details>" + "<summary>" + poems[bio].nome + "</summary>" + "<p>" + poems[bio].descricao + "</p>" + "<blockquote><q>" + poems[bio].citacao + "</q></blockquote>" + "</details></div>";
  }

}

  carregaVerses();
