// Questao 1
const amigos = ["Ana", "Maria", "Joze"];
console.log("Lista de amigos:", amigos);
console.log("Segundo amigo:", amigos[1]);

// Questao 2
const carro = {
    nome: "Gol",
    marca: "Volkswagen",
    cor: "Branco"
};
console.log("Objeto carro:", carro);
console.log("Nome do carro:", carro.nome);
console.log("Marca do carro:", carro.marca);
console.log("Cor do carro:", carro.cor);

const { nome, cor } = carro;
console.log(`Nome: ${nome}, Cor: ${cor}`);

// Questao 3
const alunos = [
    { nome: "Ana", turma: "A1", altura: 1.65 },
    { nome: "Vitor", turma: "A2", altura: 1.75 },
    { nome: "Joao", turma: "A3", altura: 1.70 }
];
console.log("Lista de alunos:", alunos);
console.log("Aluno na posição 2:", alunos[1]);
console.log("Nome do aluno na posição 2:", alunos[1].nome);

// Questao 4
const nomePessoa = "Kevin";
const sobrenome = "Murilo Ferreira da Silva";
const curso = "Desenvolvimento de Sistemas";
console.log(`Meu nome é ${nomePessoa} ${sobrenome} e meu curso é ${curso}`);

// Questao 5
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5, 6];
console.log("Novo array:", novosNumeros);

// Questao 6
const materias = ["Projeto de vida", "Front-end", "Educação Fisica"];
materias.map((materia) => console.log(`Matérias preferidas: ${materia}`));


