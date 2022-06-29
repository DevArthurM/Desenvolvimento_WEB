// Estou declarando uma função para realizar o GET de uma API
function doGet() {
    /* Como padrão o metodo fetch sempre faz um get, nessse caso estou fazendo uma 
    requisição para o endereço passado como parâmetro, caso eu queira fazer um POST
    basta colocar ('url', method: 'POST')*/
    fetch("https://jsonplaceholder.typicode.com/todos/")
        /*O metodo fetch retorna uma promises que vamos chamar de response, e para consu_
        mir a API, temos que fazer o seu parser para JSON.*/
        .then(response => response.json())
        //Apos fazer o parser para json, temos podemos trabalhar com ele na promises seguinte.
        .then(data => {
            // Printo o json no console
            console.log(data)
            /* Crio uma constante para referenciar o elemento lista no meu HTML, assim podendo
            inserir elementos nela durante a execução do programa.*/
            const list = document.querySelector('#list')
            /* O .map faz a navegação pelo vetor data, passando por cada elemento da lista fornecida
            pela API.*/
            data.map((elementOnData) => {
                /*Crio uma constante que irá armazenar uma função que cria um elemento na lista.*/
                const listIten = document.createElement('li')
                /*Com o .setAtribute() eu consigo colocar um atributo dentro do listIten o que equivale
                a colocar <li id="elementOnData.id">, nesse caso estou fazendo com que a cada iten criado
                pelo listIten receba um id em sua tag que seja igual ao id do json retornado*/
                listIten.setAttribute('id',elementOnData.id);
                listIten.setAttribute('class','iten_on_list');
                /*O .innerHTML faz com que eu coloque algo dentro da minha tag html <p>Exemplo</p>*/
                listIten.innerHTML = elementOnData.title;
                /*Atribuo um filho dentro da DOM a minha lista*/
                list.appendChild(listIten)
            })
        })
}