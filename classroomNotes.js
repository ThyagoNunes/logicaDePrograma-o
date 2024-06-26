const alunos = [
    {
        nome: 'Thyago', 
        nota: 9
    },
    {
        nome: 'José', 
        nota: 7
    },
    {
        nome: 'Maria', 
        nota: 10
    },
    {
        nome: 'Gabigol', 
        nota: 2
    }
]

function bestStudent(alunos){
    let maior = 0;
    let bestStudent = {}

    for(let i = 0; i < alunos.length; i++ ){
        if(alunos[i].nota > maior){
            maior = alunos[i].nota
            bestStudent = alunos[i]
        }
    }

    console.log(bestStudent)
}

bestStudent(alunos);