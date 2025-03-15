inicio
    inteiro a <- 1, b <- 2, calc, finalSum
    
    inteiro loops <- 1, n <- 1, number <- 0
        enquanto loops <= 15 faz
            ler number
            enquanto n < number faz
                calc <- a * b
                // shift numbers
                a <- calc
                b <- b + 1
                n <- n + 1
            fimenquanto
            n <- 1 // reset n
            a <- 1
            b <- 2
            finalSum <- finalSum + calc
            loops <- loops + 1
        fimenquanto
    escrever "Final sum: ", finalSum
fim
    
