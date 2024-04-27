// const handleZipCode = (event) => {
//     let input = event.target
//     input.value = zipCodeMask(input.value)
//   }
  
//   const zipCodeMask = (value) => {
//     if (!value) return ""
//     value = value.replace(/\D/g,'')
//     value = value.replace(/(\d{5})(\d)/,'$1-$2')
//     return value
//   }



// const form = document.querySelector("#form")
// const botao = document.querySelector("#botao")
// const input = document.querySelector("#cep")
// const div = document.querySelector("#resposta")
// const endereco = document.createElement("p")
// const bairro = document.createElement("p")
// const localidade = document.createElement("p")
// const uf = document.createElement("p")

// form.addEventListener("submit",  async function buscarCep(e){
//     e.preventDefault()
//     try{
//         const requisicao = await fetch(`https://viacep.com.br/ws/${input.value}/json`)
//         const resposta = await requisicao.json()
//         if(resposta.erro){
//             alert("CEP inválido")
//         }else{
//             endereco.textContent = `ENDEREÇO: ${resposta.logradouro}`
//             div.appendChild(endereco)

//             bairro.textContent = `BAIRRO: ${resposta.bairro}`
//             div.appendChild(bairro)
            
//             localidade.textContent = `CIDADE: ${resposta.localidade}`
//             div.appendChild(localidade)

//             uf.textContent = `ESTADO: ${resposta.uf}`
//             div.appendChild(uf)
//         }
//     }catch(error){
//         alert("Não foi possível requisitar")
//     }
//     input.value = ""
//     input.focus()

// }
// )


// const user = document.querySelector("#user")
// const botao = document.querySelector("botao")
// const form = document.querySelector("#form")
// const nome = document.createElement("h2")
// const bio = document.createElement("p")
// const avatar = document.createElement("img")

// document.body.append(nome, avatar, bio)

// form.addEventListener("submit", async function buscar_user(e) {
//     e.preventDefault
    
//     try{
//         const requisicao = await fetch(`https://api.github.com/users/${user.value}`)
//         const resposta = await requisicao.json()
//         if(resposta.erro){
//             alert("Usúario não existe!")
//         }else{
//             avatar.src = resposta.avatar_url
//             avatar.alt = "Foto perfil"
//             avatar.width = "300"
//             nome.textContent = `Nome: ${resposta.name}`  
//             bio.textContent = resposta.bio || "Usuário não possui biografia."
//         }
//     }
//     catch(error){
//         alert("Não foi possível requisitar")
//     }
// })


const formulario = document.querySelector("#form")
const usuario = document.querySelector("#user")

const error = document.createElement("p")
const nome_do_usuario = document.createElement("h2")
const foto_do_usuario = document.createElement("img")
const biografia_do_usuario = document.createElement("p")

document.body.append(nome_do_usuario, foto_do_usuario, biografia_do_usuario, error)





async function buscarUsuario(e){
    e.preventDefault()
    try{
        const request = await fetch(`https://api.github.com/users/${usuario.value}`)
        const response = await request.json()
        console.log(response)
        if(response.message === "Not Found"){
            error.textContent = "Usuário não existe"
        }else{
            error.textContent = ""
            nome_do_usuario.textContent = response.name
            foto_do_usuario.src = response.avatar_url
            foto_do_usuario.alt = "Foto do perfil do usuário"
            foto_do_usuario.width = "300"
            biografia_do_usuario.textContent = response.bio || "Usuário não possui biografia"
    
        }
        usuario.value = ""
        usuario.focus()


    }catch(error){
        console.log(error)
    }
}


formulario.addEventListener("submit", buscarUsuario)

