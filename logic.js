const feedbacks = [
    {
        foto: "./src/imgs/perfis/pessoa1.jpg",
        nome: "Mariana Souza",
        origem: "Instagram",
        mensagem: "Nunca tive uma experiência tão positiva em uma clínica odontológica. A recepção foi calorosa, o ambiente agradável e o dentista explicou tudo de forma simples. Fiz uma restauração e fiquei surpresa com o cuidado e a rapidez. Já recomendei para amigos e familiares."
    },
    {
        foto: "./src/imgs/perfis/pessoa2.jpg",
        nome: "Carlos Henrique",
        origem: "Facebook",
        mensagem: "O atendimento foi excelente desde o primeiro contato. A clínica é moderna, organizada e transmite confiança. Fiz um clareamento dental e o resultado ficou incrível, muito acima das minhas expectativas. Senti que realmente se importaram com meu bem-estar durante todo o processo."
    },
    {
        foto: "./src/imgs/perfis/pessoa3.jpg",
        nome: "João Pedro Almeida",
        origem: "Twitter",
        mensagem: "Confesso que estava nervoso antes da consulta, mas toda a equipe foi muito acolhedora. O dentista explicou cada passo e me deixou seguro. Fiz uma limpeza profunda e percebi diferença imediatamente. Foi rápido, indolor e muito bem feito, adorei o resultado final."
    },
    {
        foto: "./src/imgs/perfis/pessoa4.jpg",
        nome: "Ana Clara Lima",
        origem: "LinkedIn",
        mensagem: "Profissionalismo e atenção definem essa clínica. Precisei extrair um dente e achei que seria algo complicado, mas tudo foi conduzido com calma e clareza. O consultório é bem equipado e transmite segurança. O atendimento foi tão bom que virei paciente fixo daqui para frente."
    },
    {
        foto: "./src/imgs/perfis/pessoa5.jpg",
        nome: "João Almeida",
        origem: "Google Reviews",
        mensagem: "Adorei o serviço prestado! A clínica é limpa, confortável e o atendimento foi muito rápido. Fiz uma avaliação geral e também uma profilaxia. Saí satisfeito e tranquilo, com todas as minhas dúvidas respondidas. Dá para perceber que se preocupam muito com os pacientes."
    },
    {
        foto: "./src/imgs/perfis/pessoa6.jpg",
        nome: "Mateus Oliveira",
        origem: "Instagram",
        mensagem: "Fui indicado por um amigo e realmente valeu a pena. O ambiente é acolhedor e a equipe demonstra bastante paciência. Fiz um tratamento de canal, que eu achava que seria doloroso, mas foi surpreendentemente tranquilo. Estou muito feliz com o resultado e o atendimento."
    },
    {
        foto: "./src/imgs/perfis/pessoa7.jpg",
        nome: "Luciana Andrade",
        origem: "WhatsApp",
        mensagem: "O que mais gostei foi da transparência e do cuidado em cada etapa do atendimento. O dentista explicou com detalhes o que precisava ser feito e tirou todas as minhas dúvidas. Fiz uma limpeza e pequenas correções e já notei melhora enorme na estética e na saúde dos meus dentes."
    }
]

document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelectorAll(".carrousel")
    const prevBtn = document.querySelector("#leftArrow")
    const nextBtn = document.querySelector("#rightArrow")
    const carrouselDisplay = document.querySelector("#carrouselNav").children

    let currentIndex = 0
    const slideWidth = 100 / 3
    function updateCarrousel() {
        for (let i = 0; i < carrousel.length; i++) {
            carrousel[i].style.transform = `translateX(-${currentIndex * slideWidth}%)`
        }
        carrouselDisplay[currentIndex].classList.add("navButtonActive")
    }
    updateCarrousel()
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            carrouselDisplay[currentIndex].classList.remove("navButtonActive")
            currentIndex--;

            updateCarrousel()
        }

    })

    nextBtn.addEventListener("click", function () {
        if (currentIndex < 2) {
            carrouselDisplay[currentIndex].classList.remove("navButtonActive")

            currentIndex++
            updateCarrousel()

        }
    })

    let feedbackIndex = 0
    const perfilImg = document.querySelector("#perfilImg")
    const name = document.querySelector("#personName")
    const localMedia = document.querySelector("#localFeedback")
    const localText = document.querySelector("#feedbackMessage")
    const panel = document.querySelector("#feedbackInfo");

    const prev = document.querySelector("#carrouselLeftControl")
    const next = document.querySelector("#carrouselRightControl")
    function updateFeedback() {
        perfilImg.src = feedbacks[feedbackIndex].foto
        name.innerText = feedbacks[feedbackIndex].nome
        localMedia.innerText = feedbacks[feedbackIndex].origem
        localText.innerText = feedbacks[feedbackIndex].mensagem
        panel.innerText = `${feedbackIndex + 1}/${feedbacks.length}`
    }

    prev.addEventListener("click", function () {
        if (feedbackIndex > 0) {
            feedbackIndex--
            updateFeedback()
        }
    })

    next.addEventListener("click", function () {
        if (feedbackIndex < feedbacks.length - 1) {
            feedbackIndex++
            updateFeedback()
        }

    })

    const links = document.querySelectorAll("#navLinks a")
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault()
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 60

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                })
            }
        })
    })

    const brandName = document.querySelector("#nameBrand")
    brandName.addEventListener("click", function (e) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    const goToServicesF = document.getElementById("goToServices")
    const servicesSection = document.getElementById("services")
    let servicesOffSet = servicesSection.offsetTop

    goToServicesF.addEventListener("click", function () {
        window.scrollTo({
            top: servicesOffSet,
            behavior: "smooth"
        })
    })

    const photos = document.querySelector("#photos")
    const leftButton = document.querySelector("#svgLeft")
    const rightButton = document.querySelector("#svgRight")
    const carrouselInfo = document.querySelector("#carrouselInfo").children

    let currentPosition = 0;
    const photoWidth = 100 / photos.children.length

    function updatephotoShowcase() {
        photos.style.transform = `translateX(-${currentPosition * photoWidth}%)`;
        carrouselInfo[currentPosition].classList.add("activeBar")
    }
    updatephotoShowcase()
    leftButton.addEventListener("click", function () {
        if (currentPosition > 0) {
            carrouselInfo[currentPosition].classList.remove("activeBar")
            currentPosition--;

            updatephotoShowcase()
        }

    })

    rightButton.addEventListener("click", function () {
        if (currentPosition < photos.children.length - 1) {
            carrouselInfo[currentPosition].classList.remove("activeBar")

            currentPosition++
            updatephotoShowcase()

        }
    })

    window.addEventListener("scroll", () => {
        const div1 = document.querySelector("nav").children[0]
        const currentScroll = window.scrollY
        if (currentScroll >= window.innerHeight) {
            brandName.classList = " "
            div1.classList = " "
        } else {
            brandName.classList = "center"
            div1.classList = "center"
        }
    })


})