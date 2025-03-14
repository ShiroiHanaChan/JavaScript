inicio
    inteiro A <- 0, B <- 1
    
        enquanto B <= 500 faz
            se B % 2 = 0 entao
                A <- A + B
                B <- B + 1
            senao
                B <- B + 1
            fimse
        fimenquanto
    escrever A, "\n"
fim
