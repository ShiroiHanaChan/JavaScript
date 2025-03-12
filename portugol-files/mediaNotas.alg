inicio
    real nota1
    escrever "Primeira nota: "
    ler nota1
    
    real nota2
    escrever "Segunda nota: "
    ler nota2
    
    real media
    media <- (nota1 + nota2) / 2
    
    se media < 4 entao
        escrever "Chumbou!"
    se media >= 4 e media < 7 entao
        escrever "Repetir exame"
    senao
        escrever "Passou!"
    fimse
fim
