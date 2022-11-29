const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.nascimento)
    }
}

const admin = {
    nome: "Mariana",
    email: "j2@j.com",
    nascimento: "2020/01/01",
    role: "admin",
    criarCurso() {
        console.log("curso criado")
    }
}



Object.setPrototypeOf(admin, user)


admin.criarCurso()
admin.exibirInfos()
