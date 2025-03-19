// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let dataFriend = [];
let friendList = document.getElementById("listaAmigos");
let newFriend = document.getElementById("amigo");
let btnAdd = document.getElementById("addFriend");
let btnSortOut = document.getElementById("sortOutFriend");
let sortFriend = document.getElementById("resultado");

function validateElement(arr) {
    if (arr.includes("")) {
        return false;
    }
    return true;
}
function createId() {
    return Math.random().toString(16).slice(6);
}
function deleteFriend(friendId) {
    var index = dataFriend
        .map((x) => {
            return x.id;
        })
        .indexOf(friendId);
    dataFriend.splice(index, 1);
    renderFriend();
}

function createFriend(name) {
    let friendId = createId();
    let friend = {
        id: friendId.toString(),
        data: `<li>${name}<button class="trash-icon" onclick="deleteFriend('${friendId}');"><i class="fa-solid fa-trash fa-2xs"></i></button></li>`
    };
    dataFriend.push(friend);
    newFriend.value = '';
    renderFriend();
}

/* Actualizamos la información en el HTML */
function renderFriend() {
    let html = "";
    let total = 0;
    let done = 0;
    let decorate = '';

    dataFriend.forEach((element) => {
        decorate = element.data;
        html += decorate;
        total = total + 1;
    });

    friendList.innerHTML = html;

}

function sortOutFriend() {
    let selectedFriend = Math.floor(Math.random() * dataFriend.length);
    let friendId = dataFriend[selectedFriend].id;
    let sortOutFixed = dataFriend[selectedFriend].data.replace(`<button class="trash-icon" onclick="deleteFriend('${friendId}');"><i class="fa-solid fa-trash fa-2xs"></i></button>`, "");
    sortFriend.innerHTML = "Tu amigo secreto es: " + sortOutFixed;
}

btnAdd.addEventListener("click", () => {
    console.log(newFriend.value);
    // Adding tasks
    if (validateElement([newFriend.value])) {
        createFriend(newFriend.value);
    } else {
        alert("Debe indicar el nombre de la persona a añadir");
    }
});


btnSortOut.addEventListener("click", () => {
    console.log(newFriend.value);
    // Adding tasks
    if (dataFriend.length != 0) {
        sortOutFriend();
    } else {
        alert("Debe agregar amigos para realizar el sorteo");
    }
});

renderFriend();