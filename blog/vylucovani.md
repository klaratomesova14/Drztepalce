---
layout: article.njk
title: Vylučování. Vylučte mě, prosím.
tags: blog
date: 2023-02-14
category: Zamyšlení
image: nekonecnamocspanku3.jpg
---

    <div class="primary">
        <p class="link article__link"><a class="link__href link__href--dark" href="/"><i class="arrow arrow--left"></i>zpět</a></p>
        <article class="article article--primary">
            <h3 class="article__category article__category--primary">postřeh</h3>
            <h1 class="article__title article__title--primary">Vylučování. Vylučte mě, prosím.
            </h1>
            <h4 class="article__date article__date--primary">5. 1. 2023</h4>
            <p class="article__perex">
                Napustit vanu, toaleťákem posbírat vetší kusy, vysavačem vysát ty malinký, čistícími ubrousky otřít umazaná místa na podlaze, na koberec nastříkat pěnu - jediného zachránce tvrdošíjného zápachu na textiliích, který by nám tuhle veselou zkušenost připomínal ještě několik týdnů.
            </p>        

            <img class="article__picture article__picture--primary" src="/images/{{ image }}">

            <p class="article__paragraph"> 
                Tohle byl náš včerejší večer, kdy se dcera v momentě, kdy jsem upřímně věřila, že konečně jednou usnula v devět a dostane tak potřebné množství spánku před vstáváním do školky, potichoučku beze zvuku pokakala do pyžamka a než jsem na to při poslední kontrole přišla, zvládla to i přes pojistku v podobě overalu vytahat z nohavic a zaneřádit tím celý pokoj.
            </p>

            <p class="article__paragraph"> 
                Nějak zvlášť nás to tentokrát nerozhodilo. Jsme zvyklí, už víme co dělat. Ale bylo hůř. Desátého června loňského roku byl můj prozatím nejhorší den rodičovství. Nikdy - a to opravdu je z čeho vybírat - jsem necítila takový hněv a takovou beznaděj. To se jí podobný kousek povedl už potřetí během jednoho týdne a zahrnovalo to obrovskou plochu pokrytou silnou vrstvou hovínek na zdi v obýváku, od hovínek zničený viskózový koberec, hovínky komplet posypanou a ušpiněnou postel a peřiny v pokojíčku, panenky s cuckami hovínek ve vlasech, ze všech stran hovínky potřísněné příčky na zábraně u postele, jednu dávku hovínek ukrytou do dětské kuchyňky a v neposlední řadě dceru s hovínky pomalovaným obličejem ve stylu válečnice, ruce a nehty špinavé od hovínek jakoby se hodiny hrabala v hlíně a různě velké kusy hovínek visící z jejích dlouhých vlasů. 

            </p>

            <p class="article__paragraph"> 
                Zní to, jako bychom ji nechali doma hodiny samotnou nebo přinejmenším bez dozoru. Možná o to bylo to zoufalství větší, že jsme měli pocit, že už se to nemůže opakovat, protože jsme všechno zajistili, všechna rizika podchytili. No, nevěřili byste v její rychlost a vynalézavost. Společně s dalšími zážitky toho dne to byl skutečně den jako korálek.
            </p>

            <p class="article__paragraph">
                Teď už se to naštěstí moc neděje. Vlastně už nás to nepotkalo dost dlouho, dokonce tak dlouho, že jsme před pár týdny přestali dávat plenky a včera šli slavnostně poprvé do školky v kalhotkách.  Ten samý den se večer nejdříve počůrala a o pár hodin později pokakala. Naše malá velká vítězství? Ta máme. Ale často jen na chvíli.
            </p>

        </article>    
        <div class="comments">

            <form method="post" class="comments__form">
                <h3 class="comments__title">komentáře</h3>
                <textarea class="comments__text comments__field" name="text" id="text" placeholder="napiš komentář..." required></textarea>  
                <input class="comments__name comments__field" type="text" name="name" id="name" placeholder="jméno *" required>
                <input class="comments__email comments__field" type="email" name="email" id="email" placeholder="e-mail * (nebude se zobrazovat)" required>
                <input class="comments__button" type="button" name="send" id="send" value="Odeslat">
            </form>
            
            <div id="comments"></div>
            
            </div>
        
            <script>
                let articleId = 4
            
                let commentsDiv = document.getElementById('comments')
                let sendCommentBtn = document.getElementById('send')
                
                async function loadComments() {
                    let url = 'https://krystoftomes.cz/api/getComments.php?articleId=' + articleId
                    try {
                        let res = await fetch(url)
                        let data = await res.json()
            
                        let html = '<div class="comments__list">'
            
            data.forEach(row => {
                html += `<div class="comment">
                            <h4 class="comment__name">${row.username}</h4>
                            <p class="comment__date">${row.date}</p>
                            <p class="comment__message">${row.comment}</p>
                        </div>`       
            })
        
            html += '</div>'
        
                        commentsDiv.innerHTML = html
                    } catch (error) {
                        console.log(error)
                    }
                }
            
                async function addComment() {
                    let username = document.getElementById('name').value
                    let email = document.getElementById('email').value
                    let comment = document.getElementById('text').value
            
                    let url = 'https://krystoftomes.cz/api/addComment.php?articleId=' + articleId
            
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify([articleId, username, email, comment]),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status == 'Success') {
                            loadComments()
                            comments.scrollIntoView()
                        } 
                    })
                    .catch(error => console.log(error))
                }
                
                window.addEventListener('load', loadComments)
                sendCommentBtn.addEventListener('click', addComment)
            </script>
    </div>

    <div class="complementary">
        <div class="articles__suggestion">
            <h2 class="title title--complementary">další příspěvky</h2>
            <div class="articles--vertical">

                <article class="article article--secondary">
                    <a href="/tentokratoficialne/"><img class="article__picture article__picture--secondary" src="/images/tentokratoficialne.jpg"></a>
                    <div class="article__text article__text--secondary">
                        <h3 class="article__category article__category--secondary">jak to bylo</h3>
                        <h1 class="article__title article__title--secondary"><a href="/tentokratoficialne/" class="link__href">Tentokrát oficiálně</a></h1>
                    </div>
                </article>
    
                <article class="article article--secondary">
                    <a href="/nikdonicnevi/"><img class="article__picture article__picture--secondary" src="/images/nikdonicnevi.jpg"></a>
                    <div class="article__text article__text--secondary">
                        <h3 class="article__category article__category--secondary">Postřeh</h3>
                        <h1 class="article__title article__title--secondary"><a href="/nikdonicnevi/" class="link__href">Nikdo nic neví</a></h1>
                    </div>
                </article>
    
                <article class="article article--secondary">
                    <a href="/nesudmeadrzmepalce/"><img class="article__picture article__picture--secondary" src="/images/nesudmeadrzmepalce.jpg"></a>
                    <div class="article__text article__text--secondary">
                        <h3 class="article__category article__category--secondary">Zamyšlení</h3>
                        <h1 class="article__title article__title--secondary"><a href="/nesudmeadrzmepalce/" class="link__href">Nesuďme a držme palce</a></h1>
                    </div>       
                </article>   
    
    
                <article class="article article--secondary">
                    <a href="/nefnukameuzprilis/"><img class="article__picture article__picture--secondary" src="/images/nefnukameuzprilis.jpg"></a>
                    <div class="article__text article__text--secondary">
                        <h3 class="article__category article__category--secondary">Zamyšlení</h3>
                        <h1 class="article__title article__title--secondary"><a href="/nefnukameuzprilis/" class="link__href">Nefňukáme už příliš?</a></h1>
                    </div>
                </article>
            </div> 
        </div>
    </div>
